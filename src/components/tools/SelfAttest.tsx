"use client";

import React, {
  useState,
  useRef,
  ChangeEvent,
  MouseEvent,
  TouchEvent,
} from "react";
import Image from "next/image";
import {
  Upload,
  Trash2,
  Download,
  PenTool,
  Eraser,
  Loader2,
  PlusSquare,
  MinusSquare,
  Move,
} from "lucide-react";
import { removeImageBackground } from "@/lib/bg-remove-engine";

export default function SelfAttestWorkspace() {
  const [docPreview, setDocPreview] = useState<string | null>(null);
  const [sigPreview, setSigPreview] = useState<string | null>(null);
  const [isProcessingSig, setIsProcessingSig] = useState(false);

  // Signature Layer Controls
  const [sigPos, setSigPos] = useState({ x: 50, y: 50 });
  const [sigSize, setSigSize] = useState(150);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDocUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setDocPreview(URL.createObjectURL(file));
  };

  const handleSigUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSigPreview(URL.createObjectURL(file));
  };

  const handleRemoveBg = async () => {
    if (!sigPreview) return;
    setIsProcessingSig(true);
    try {
      const blob = await removeImageBackground(sigPreview, () => {});
      setSigPreview(URL.createObjectURL(blob));
    } catch (err) {
      alert(
        "AI processing failed. Please ensure your signature is on a plain background.",
      );
    } finally {
      setIsProcessingSig(false);
    }
  };

  const moveSignature = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Calculate position relative to container
    const x = clientX - rect.left - sigSize / 2;
    const y = clientY - rect.top - (sigSize * 0.5) / 2; // Assuming 2:1 aspect ratio for sig

    // Constrain within bounds
    const boundedX = Math.max(0, Math.min(x, rect.width - sigSize));
    const boundedY = Math.max(0, Math.min(y, rect.height - sigSize / 2));

    setSigPos({ x: boundedX, y: boundedY });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) moveSignature(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) moveSignature(e.touches[0].clientX, e.touches[0].clientY);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4">
      {/* --- MAIN WORKSPACE --- */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        className="relative w-full aspect-[3/4] md:h-[600px] bg-white border-4 border-black overflow-hidden flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        {!docPreview ? (
          <label className="flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition-transform">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleDocUpload}
            />
            <div className="w-20 h-20 bg-black text-white flex items-center justify-center border-4 border-black">
              <Upload size={32} />
            </div>
            <div className="text-center">
              <p className="font-black text-black uppercase tracking-tight">
                Upload Document
              </p>
              <p className="text-[10px] text-gray-500 font-bold uppercase mt-1 tracking-widest">
                Step 1: Base Layer
              </p>
            </div>
          </label>
        ) : (
          <>
            <Image
              src={docPreview}
              alt="Document Base"
              fill
              className="object-contain pointer-events-none"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              unoptimized
            />

            {sigPreview && (
              <div
                style={{
                  left: `${sigPos.x}px`,
                  top: `${sigPos.y}px`,
                  width: `${sigSize}px`,
                }}
                className={`absolute z-20 select-none group ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
              >
                <div className="relative border-2 border-transparent group-hover:border-black/20">
                  {/* Signature UI Controls */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-black p-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1),4px_4px_0px_1px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={handleRemoveBg}
                      className="p-1 text-white hover:text-gray-300 border border-transparent hover:border-white"
                    >
                      <Eraser size={14} />
                    </button>
                    <button
                      onClick={() => setSigSize((s) => s + 20)}
                      className="p-1 text-white hover:text-gray-300"
                    >
                      <PlusSquare size={14} />
                    </button>
                    <button
                      onClick={() => setSigSize((s) => s - 20)}
                      className="p-1 text-white hover:text-gray-300"
                    >
                      <MinusSquare size={14} />
                    </button>
                  </div>

                  {/* The actual Signature Image */}
                  <img
                    src={sigPreview}
                    alt="Signature Overlay"
                    className={`w-full h-auto pointer-events-none ${isProcessingSig ? "blur-sm" : ""}`}
                  />

                  {/* Drag Handle Icon (Visible on mobile for UX) */}
                  <div className="absolute -right-2 -bottom-2 bg-black text-white p-1 md:hidden">
                    <Move size={10} />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* --- CONTROL PANEL --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Signature Upload */}
        <div className="bg-white p-4 border-2 border-black flex items-center gap-4">
          <label className="w-12 h-12 bg-black text-white flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleSigUpload}
            />
            <PenTool size={20} />
          </label>
          <div className="flex-1">
            <p className="text-xs font-black uppercase text-black italic">
              {sigPreview ? "Change Signature" : "Step 2: Add Signature"}
            </p>
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
              Use blue/black ink on white paper
            </p>
          </div>
          {sigPreview && isProcessingSig && (
            <Loader2 className="animate-spin text-black" size={16} />
          )}
        </div>

        {/* Action Button */}
        <button
          disabled={!docPreview || !sigPreview}
          className="bg-black text-white font-black uppercase py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-30 flex items-center justify-center gap-2"
        >
          <Download size={18} /> Download Attested
        </button>
      </div>

      {/* Reset Tool */}
      {(docPreview || sigPreview) && (
        <button
          onClick={() => {
            setDocPreview(null);
            setSigPreview(null);
          }}
          className="w-full text-center text-[10px] font-black uppercase text-gray-400 hover:text-red-600 flex items-center justify-center gap-2 transition-colors"
        >
          <Trash2 size={12} /> Clear All Layers
        </button>
      )}
    </div>
  );
}
