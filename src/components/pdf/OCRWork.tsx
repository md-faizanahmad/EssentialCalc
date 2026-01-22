"use client";

import React, { useState, useRef } from "react";
import {
  Copy,
  Trash2,
  Check,
  Languages,
  FileText,
  Download,
  Zap,
} from "lucide-react";
import { performOCR } from "@/lib/ocr-engine";

export default function OCRWork() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [extractedText, setExtractedText] = useState("");
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setExtractedText("");
    setProgress(0);

    try {
      const text = await performOCR(file, (p: number) => {
        setProgress(Math.round(p));
      });
      setExtractedText(text);
    } catch (error) {
      console.error("OCR Error:", error);
      alert(
        "Failed to extract text. Please ensure the document is clear and readable.",
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAsTxt = () => {
    const element = document.createElement("a");
    const fileBlob = new Blob([extractedText], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = "EssentialCalc_OCR_Result.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const reset = () => {
    setExtractedText("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="max-w-4xl mx-auto w-full space-y-8 animate-in fade-in duration-500">
      {/* 1. INITIAL UPLOAD STATE */}
      {!extractedText && !isProcessing && (
        <div className="relative border-2 border-dashed border-blue-200 rounded-[2.5rem] p-12 sm:p-20 text-center bg-blue-50/30 hover:bg-blue-50 transition-all group">
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*,application/pdf"
            onChange={handleFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
            <Languages size={40} />
          </div>
          <h3 className="font-black uppercase tracking-tight text-2xl text-gray-900">
            Drop Your Document
          </h3>
          <p className="text-[10px] font-bold text-gray-400 uppercase mt-2 tracking-[0.3em]">
            Images & PDFs &middot; 100% Local AI Processing
          </p>
        </div>
      )}

      {/* 2. PROCESSING STATE */}
      {isProcessing && (
        <div className="flex flex-col items-center justify-center py-20 space-y-8 animate-in zoom-in-95 duration-300">
          <div className="relative flex items-center justify-center">
            {/* Progress Ring */}
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-100"
              />
              <circle
                cx="64"
                cy="64"
                r="60"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={377}
                strokeDashoffset={377 - (377 * progress) / 100}
                className="text-blue-600 transition-all duration-300 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-black text-gray-900">
                {progress}%
              </span>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-black uppercase tracking-widest text-gray-900 text-sm mb-1">
              Analyzing Document
            </h3>
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <Zap size={12} fill="currentColor" className="animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                Neural Engine Active
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. RESULT STATE */}
      {extractedText && !isProcessing && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
            <div className="flex items-center gap-2 text-gray-400">
              <FileText size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Extracted Text
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={copyToClipboard}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold text-xs uppercase"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy All"}
              </button>
              <button
                onClick={downloadAsTxt}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 border border-gray-100 text-gray-600 rounded-xl hover:bg-gray-100 transition-all font-bold text-xs uppercase"
              >
                <Download size={16} /> Export
              </button>
              <button
                onClick={reset}
                className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all border border-red-100"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>

          <div className="relative">
            <textarea
              readOnly
              value={extractedText}
              className="w-full h-[60vh] p-8 sm:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-gray-100/50 resize-none focus:outline-none text-gray-700 text-base leading-relaxed font-medium overflow-y-auto"
            />
            <div className="absolute bottom-6 right-10 opacity-20 pointer-events-none font-black uppercase text-[10px] tracking-widest text-blue-600">
              EssentialCalc OCR Neural Engine
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
