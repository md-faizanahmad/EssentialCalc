"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Upload,
  Download,
  Trash2,
  ShieldCheck,
  Zap,
  RefreshCw,
} from "lucide-react";
import { processImage } from "@/lib/image-processor";

export default function ImageProcessor() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [targetFormat, setTargetFormat] = useState("image/jpeg");
  const [targetKB, setTargetKB] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; url: string } | null>(
    null,
  );

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResult(null);
    }
  };

  const handleRun = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const blob = await processImage(file, targetFormat, targetKB);
      setResult({ blob, url: URL.createObjectURL(blob) });
    } catch (err) {
      console.error(err);
      alert("Processing failed locally.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {!preview ? (
        <label className="relative border-2 border-dashed border-cyan-200 rounded-4xl p-12 text-center bg-cyan-50/30 hover:bg-cyan-50 transition-all cursor-pointer block">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm text-cyan-600">
            <Upload size={32} />
          </div>
          <p className="font-black text-gray-900 uppercase tracking-tight">
            Select Photo
          </p>
          <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">
            PNG, JPG, WEBP &middot; 100% Private
          </p>
        </label>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-500">
          {/* Main Controls Card */}
          <div className="bg-white border border-gray-100 rounded-4xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border shrink-0">
                <Image
                  src={preview}
                  alt="Preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-gray-900 truncate">
                  {file?.name}
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Original: {(file!.size / 1024).toFixed(0)} KB
                </p>
              </div>
              <button
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                  setResult(null);
                }}
                className="p-2 text-gray-300 hover:text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Format Select */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  Target Format
                </label>
                <div className="flex bg-gray-50 p-1 rounded-xl">
                  {["JPG", "PNG", "WEBP"].map((ext) => {
                    const mime =
                      ext === "JPG"
                        ? "image/jpeg"
                        : `image/${ext.toLowerCase()}`;
                    return (
                      <button
                        key={ext}
                        onClick={() => setTargetFormat(mime)}
                        className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all ${targetFormat === mime ? "bg-white text-cyan-600 shadow-sm" : "text-gray-400"}`}
                      >
                        {ext}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Select */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center justify-between">
                  Target Size <span>{targetKB} KB</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={targetKB}
                  onChange={(e) => setTargetKB(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
              </div>
            </div>

            <button
              onClick={handleRun}
              disabled={isProcessing}
              className="w-full py-4 bg-cyan-600 text-white font-black rounded-2xl shadow-xl shadow-cyan-100 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              {isProcessing ? (
                <RefreshCw className="animate-spin" />
              ) : (
                <Zap size={18} fill="currentColor" />
              )}
              {isProcessing ? "PROCESSING..." : "PROCESS IMAGE"}
            </button>
          </div>

          {/* Result Card */}
          {result && (
            <div className="bg-emerald-50 border border-emerald-100 rounded-4xl p-6 animate-in slide-in-from-top-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    Optimized Result
                  </p>
                  <p className="text-sm font-bold text-emerald-900">
                    {(result.blob.size / 1024).toFixed(1)} KB &middot;{" "}
                    {targetFormat.split("/")[1].toUpperCase()}
                  </p>
                </div>
                <div className="bg-emerald-500 text-white p-2 rounded-xl">
                  <ShieldCheck size={20} />
                </div>
              </div>
              <a
                href={result.url}
                download={`essentialcalc_${targetKB}kb.${targetFormat.split("/")[1]}`}
                className="w-full py-4 bg-emerald-600 text-white font-black rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-100"
              >
                <Download size={20} /> DOWNLOAD NOW
              </a>
            </div>
          )}
        </div>
      )}

      <div className="text-center py-4">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-green-500" /> Secure On-Device
          Processing
        </p>
      </div>
    </div>
  );
}
