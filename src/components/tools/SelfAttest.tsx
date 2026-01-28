"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Upload,
  Trash2,
  Download,
  PenTool,
  Move,
  Eraser,
  Check,
  Loader2,
  Maximize,
} from "lucide-react";
import { removeImageBackground } from "@/lib/bg-remove-engine";

export default function SelfAttestWorkspace() {
  const [docPreview, setDocPreview] = useState<string | null>(null);
  const [sigPreview, setSigPreview] = useState<string | null>(null);
  const [isProcessingSig, setIsProcessingSig] = useState(false);

  // Signature Layer Controls
  const [sigPos, setSigPos] = useState({ x: 20, y: 20 });
  const [sigSize, setSigSize] = useState(150);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setDocPreview(URL.createObjectURL(file));
  };

  const handleSigUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSigPreview(URL.createObjectURL(file));
  };

  const handleRemoveBg = async () => {
    if (!sigPreview) return;
    setIsProcessingSig(true);
    try {
      // Use the engine we built earlier
      const blob = await removeImageBackground(sigPreview, () => {});
      setSigPreview(URL.createObjectURL(blob));
    } catch (err) {
      alert("AI failed to process signature background locally.");
    } finally {
      setIsProcessingSig(false);
    }
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.buttons !== 1 && !("touches" in e)) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    setSigPos({
      x: clientX - rect.left - sigSize / 2,
      y: clientY - rect.top - sigSize / 4,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* --- MAIN WORKSPACE --- */}
      <div
        ref={containerRef}
        onMouseMove={handleDrag}
        onTouchMove={handleDrag}
        className="relative w-full aspect-[3/4] md:aspect-auto md:h-[600px] bg-gray-100 rounded-[2.5rem] border-2 border-dashed border-gray-200 overflow-hidden flex items-center justify-center shadow-inner"
      >
        {!docPreview ? (
          <label className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleDocUpload}
            />
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl text-blue-600">
              <Upload size={32} />
            </div>
            <div className="text-center">
              <p className="font-black text-gray-900 uppercase tracking-tight">
                Upload Document
              </p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                Step 1: The Paper
              </p>
            </div>
          </label>
        ) : (
          <>
            {/* The Document Base Layer */}
            <Image
              src={docPreview}
              alt="Document"
              fill
              className="object-contain"
              unoptimized
            />

            {/* The Signature Overlay Layer */}
            {sigPreview && (
              <div
                style={{
                  left: `${sigPos.x}px`,
                  top: `${sigPos.y}px`,
                  width: `${sigSize}px`,
                }}
                className="absolute z-20 cursor-move group select-none"
              >
                <div className="relative">
                  {/* Signature Image */}
                  <img
                    src={sigPreview}
                    className={`w-full h-auto pointer-events-none ${isProcessingSig ? "opacity-30" : ""}`}
                    alt="Signature"
                  />

                  {/* Floating Tool Controls for Signature Only */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-gray-900 p-1 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={handleRemoveBg}
                      className="p-1.5 text-white hover:text-blue-400"
                      title="Remove Signature BG"
                    >
                      <Eraser size={14} />
                    </button>
                    <button
                      onClick={() => setSigSize((prev) => prev + 20)}
                      className="p-1.5 text-white hover:text-blue-400"
                    >
                      <PlusSquareIcon size={14} />
                    </button>
                    <button
                      onClick={() => setSigSize((prev) => prev - 20)}
                      className="p-1.5 text-white hover:text-blue-400"
                    >
                      <MinusSquareIcon size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* --- CONTROL PANEL --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Signature Upload Box */}
        <div className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center gap-4">
          <label className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center cursor-pointer hover:bg-indigo-100 transition-colors shrink-0">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleSigUpload}
            />
            <PenTool size={20} />
          </label>
          <div className="flex-1">
            <p className="text-xs font-black uppercase text-gray-900 tracking-tight">
              {sigPreview ? "Change Signature" : "Step 2: Add Signature"}
            </p>
            <p className="text-[10px] text-gray-400 font-bold uppercase">
              Sign on white paper & upload
            </p>
          </div>
          {sigPreview && (
            <button
              onClick={handleRemoveBg}
              disabled={isProcessingSig}
              className="px-3 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-lg uppercase flex items-center gap-2"
            >
              {isProcessingSig ? (
                <Loader2 className="animate-spin" size={12} />
              ) : (
                <Eraser size={12} />
              )}
              Clear BG
            </button>
          )}
        </div>

        {/* Download Final */}
        <button
          disabled={!docPreview || !sigPreview}
          className="bg-blue-600 text-white font-black uppercase rounded-3xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 disabled:opacity-20 transition-all hover:bg-blue-700 active:scale-95"
        >
          <Download size={20} />
          Download Attested
        </button>
      </div>

      {/* Reset Tool */}
      {(docPreview || sigPreview) && (
        <button
          onClick={() => {
            setDocPreview(null);
            setSigPreview(null);
          }}
          className="w-full text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <Trash2 size={14} /> Reset Workspace
        </button>
      )}
    </div>
  );
}

// Small helpers for icons
const PlusSquareIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="12" x2="12" y1="8" y2="16" />
    <line x1="8" x2="16" y1="12" y2="12" />
  </svg>
);
const MinusSquareIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="8" x2="16" y1="12" y2="12" />
  </svg>
);
