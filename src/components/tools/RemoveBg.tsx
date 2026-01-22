"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Upload,
  Trash2,
  Download,
  Loader2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { removeImageBackground } from "@/lib/bg-remove-engine";

export default function BgRemove() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (preview) URL.revokeObjectURL(preview);
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResultUrl(null);
    }
  };

  const processImage = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const blob = await removeImageBackground(file, (msg) => setStatus(msg));
      setResultUrl(URL.createObjectURL(blob));
    } catch (err) {
      console.error(err);
      alert(
        "AI Engine failed. Ensure you have a stable connection for the initial model download.",
      );
    } finally {
      setIsProcessing(false);
      setStatus("");
    }
  };

  const reset = () => {
    if (preview) URL.revokeObjectURL(preview);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setFile(null);
    setPreview(null);
    setResultUrl(null);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {!preview ? (
        <div className="relative border-2 border-dashed border-rose-200 rounded-[2.5rem] p-12 text-center bg-rose-50/30 hover:bg-rose-50 transition-all group">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm text-rose-600">
            <Upload size={32} />
          </div>
          <h3 className="font-bold text-gray-900 uppercase tracking-tight">
            Select Photo
          </h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
            Local AI Processing
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Next.js Image Preview Container */}
          <div className="relative aspect-square w-full max-w-sm mx-auto rounded-4xl overflow-hidden border border-gray-100 bg-white shadow-2xl">
            <Image
              src={resultUrl || preview}
              alt="Background removal preview"
              fill
              unoptimized // Required for Blob URLs
              sizes="(max-width: 768px) 100vw, 400px"
              className={`object-contain transition-opacity duration-500 ${
                resultUrl
                  ? "bg-[url('/checkerboard.png')] bg-repeat bg-size-[20px_20px]"
                  : ""
              }`}
            />

            {isProcessing && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20">
                <Loader2
                  className="animate-spin text-rose-600 mb-4"
                  size={40}
                />
                <p className="text-xs font-black uppercase tracking-widest text-gray-900">
                  {status}
                </p>
                <div className="mt-4 w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-rose-600 h-full animate-pulse"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {!resultUrl ? (
              <button
                onClick={processImage}
                disabled={isProcessing}
                className="w-full py-4 bg-rose-600 text-white font-black rounded-2xl shadow-xl shadow-rose-100 flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
              >
                <Zap size={20} fill="currentColor" /> REMOVE BACKGROUND
              </button>
            ) : (
              <a
                href={resultUrl}
                download="essentialcalc_no_bg.png"
                className="w-full py-4 bg-green-600 text-white font-black rounded-2xl shadow-xl shadow-green-100 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Download size={20} /> DOWNLOAD PNG
              </a>
            )}
            <button
              onClick={reset}
              className="py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2 hover:text-red-500 transition-colors"
            >
              <Trash2 size={14} /> Remove and Start Again
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 py-4 border-t border-gray-50">
        <ShieldCheck size={16} className="text-green-500" />
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          No Server Upload &middot; Data Sovereignty
        </span>
      </div>
    </div>
  );
}
