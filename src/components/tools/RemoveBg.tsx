"use client";

import React, { useState, useEffect } from "react";
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
  const [progress, setProgress] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Clean up Object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [preview, resultUrl]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (preview) URL.revokeObjectURL(preview);
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResultUrl(null);
      setProgress(0);
    }
  };

  const processImage = async () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(10); // Initial start

    try {
      // Logic assumes removeImageBackground accepts a progress callback
      // modifying the callback to detect numerical progress if your engine supports it
      const blob = await removeImageBackground(file, (msg) => {
        setStatus(msg);
        // Basic logic: if message contains "downloading", simulate progress
        if (
          msg.toLowerCase().includes("loading") ||
          msg.toLowerCase().includes("download")
        ) {
          setProgress((prev) => (prev < 90 ? prev + 5 : prev));
        }
      });

      setResultUrl(URL.createObjectURL(blob));
      setProgress(100);
    } catch (err) {
      console.error(err);
      alert(
        "AI Engine failed. Ensure you have a stable connection for the model download.",
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
    setProgress(0);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 space-y-6">
      {!preview ? (
        <div className="relative border-4 border-dashed border-black p-8 md:p-16 text-center bg-white hover:bg-red-50 transition-all group cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          <div className="w-20 h-20 bg-black text-white flex items-center justify-center mx-auto mb-6 border-2 border-black group-hover:bg-red-600 transition-colors">
            <Upload size={32} strokeWidth={3} />
          </div>
          <h3 className="text-xl font-black text-black uppercase tracking-tight">
            Drop Photo Here
          </h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-2 tracking-[0.2em]">
            100% Client-Side Processing
          </p>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
          {/* Main Workspace Frame */}
          <div className="relative aspect-square w-full rounded-none border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Checkerboard background for transparent results */}
            <div
              className={`absolute inset-0 ${resultUrl ? "bg-checkerboard" : ""}`}
            />

            <Image
              src={resultUrl || preview}
              alt="Background removal result"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-contain relative z-10 p-4"
            />

            {/* Loading Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-8 text-center">
                <Loader2
                  className="animate-spin text-red-600 mb-6"
                  size={48}
                  strokeWidth={3}
                />
                <h4 className="text-sm font-black uppercase tracking-widest text-black mb-2">
                  AI Computing...
                </h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase max-w-50">
                  {status || "Warming up local AI engine..."}
                </p>

                {/* Visual Progress Bar */}
                <div className="mt-8 w-full max-w-xs border-2 border-black h-4 bg-white overflow-hidden relative">
                  <div
                    className="bg-red-600 h-full transition-all duration-500 ease-out border-r-2 border-black"
                    style={{ width: `${progress}%` }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black mix-blend-difference text-white">
                    {progress}%
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action Controls */}
          <div className="flex flex-col gap-4">
            {!resultUrl ? (
              <button
                onClick={processImage}
                disabled={isProcessing}
                className="w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                <Zap size={20} fill="currentColor" /> Remove Background
              </button>
            ) : (
              <a
                href={resultUrl}
                download="essentialcalc_no_bg.png"
                className="w-full py-5 bg-black text-white font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] flex items-center justify-center gap-3 transition-all hover:bg-gray-900"
              >
                <Download size={20} strokeWidth={3} /> Save PNG
              </a>
            )}

            <button
              onClick={reset}
              className="group flex items-center justify-center gap-2 text-[10px] font-black uppercase text-gray-400 hover:text-black transition-colors"
            >
              <Trash2 size={14} className="group-hover:text-red-600" /> Start
              Over
            </button>
          </div>
        </div>
      )}

      {/* Trust Badge */}
      <div className="flex items-center justify-center gap-3 py-6 border-t-2 border-black">
        <ShieldCheck size={18} className="text-black" />
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-black">
          Security: Privacy-First &middot; No Data Leaves Device
        </p>
      </div>

      {/* Global CSS for Checkerboard (Add to global.css or use a style tag) */}
      <style jsx>{`
        .bg-checkerboard {
          background-color: #ffffff;
          background-image:
            radial-gradient(#000 10%, transparent 10%),
            radial-gradient(#000 10%, transparent 10%);
          background-size: 15px 15px;
          background-position:
            0 0,
            7.5px 7.5px;
          opacity: 0.05;
        }
      `}</style>
    </div>
  );
}
