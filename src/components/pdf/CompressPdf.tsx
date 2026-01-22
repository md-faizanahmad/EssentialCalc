"use client";

import React, { useState, useRef } from "react";
import {
  Loader2,
  Plus,
  X,
  Zap,
  CheckCircle2,
  FileType,
  Download,
  AlertTriangle,
  RefreshCcw,
} from "lucide-react";
import { runReduction } from "@/lib/reduce-engine";

interface ResultData {
  blob: Blob;
  url: string;
  finalSizeKB: number;
  savedPercent: number;
}

export default function CompressPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [target, setTarget] = useState<number>(100);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setError(null);
    setResult(null);

    // Basic Type Check
    if (
      !["application/pdf", "image/jpeg", "image/png"].includes(
        selectedFile.type,
      )
    ) {
      setError("Please upload a PDF or Image file (JPG/PNG).");
      return;
    }

    setFile(selectedFile);
  };

  const onReduce = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);

    try {
      const reducedBlob = await runReduction(file, target);
      const url = URL.createObjectURL(reducedBlob);

      const saved = Math.max(
        0,
        ((file.size - reducedBlob.size) / file.size) * 100,
      );
      const finalSizeKB = Number((reducedBlob.size / 1024).toFixed(1));

      setResult({
        blob: reducedBlob,
        url,
        finalSizeKB,
        savedPercent: Math.round(saved),
      });
    } catch (err) {
      console.error(err);
      setError(
        "Optimization failed. The file might be too complex for this target.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    if (result?.url) URL.revokeObjectURL(result.url);
    setFile(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 animate-in fade-in duration-300">
          <AlertTriangle size={20} className="shrink-0" />
          <p className="text-xs font-bold uppercase tracking-tight">{error}</p>
          <button
            onClick={() => setError(null)}
            className="ml-auto p-1 hover:bg-red-100 rounded"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Success State */}
      {result && (
        <div className="mb-6 p-8 rounded-[2.5rem] bg-green-50 border border-green-100 text-center animate-in zoom-in-95 duration-500">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600 shadow-sm">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-4xl font-black text-green-700 mb-1 leading-none">
            -{result.savedPercent}%
          </h3>
          <p className="text-[10px] uppercase font-black tracking-[0.2em] text-green-600/60 mb-8">
            Optimized to {result.finalSizeKB} KB
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={result.url}
              download={`compressed_${file?.name}`}
              className="flex items-center justify-center gap-2 w-full py-5 bg-green-600 text-white rounded-2xl font-bold uppercase tracking-tight hover:bg-green-700 transition-all shadow-lg shadow-green-100"
            >
              <Download size={20} /> Download File
            </a>
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 w-full py-3 text-gray-400 font-bold text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors"
            >
              <RefreshCcw size={14} /> Compress Another
            </button>
          </div>
        </div>
      )}

      {/* Upload & Controls */}
      {!result && (
        <div className="space-y-6">
          <div className="relative group">
            {!file ? (
              <div className="relative border-2 border-dashed border-blue-200 rounded-[2.5rem] p-12 text-center bg-blue-50/30 group-hover:bg-blue-50 transition-all duration-300">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*,application/pdf"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-sm">
                  <Plus size={32} />
                </div>
                <h3 className="font-black text-gray-900 uppercase tracking-tight text-xl mb-1">
                  Upload Document
                </h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                  PDF, JPG, or PNG
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 p-6 rounded-3xl flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4 truncate">
                  <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                    <FileType size={20} />
                  </div>
                  <div className="truncate">
                    <p className="font-bold text-sm text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={reset}
                  className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            )}
          </div>

          {/* KB Selection */}
          <div className="space-y-3">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
              Target Size Limit
            </p>
            <div className="grid grid-cols-4 gap-2">
              {[25, 50, 100, 200].map((kb) => (
                <button
                  key={kb}
                  onClick={() => setTarget(kb)}
                  className={`py-3 rounded-xl text-xs font-bold border transition-all uppercase ${
                    target === kb
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100"
                      : "bg-white border-gray-100 text-gray-400 hover:border-blue-200"
                  }`}
                >
                  {kb}KB
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={onReduce}
            disabled={!file || isProcessing}
            className="w-full flex items-center justify-center gap-3 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-100 disabled:opacity-30 disabled:shadow-none transition-all active:scale-[0.98]"
          >
            {isProcessing ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <Zap size={24} fill="white" />
            )}
            <span className="uppercase tracking-widest text-sm">
              {isProcessing ? "Optimizing..." : `Compress to ${target}KB`}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
