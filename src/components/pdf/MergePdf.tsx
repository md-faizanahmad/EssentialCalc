"use client";

import React, { useState } from "react";
import {
  X,
  FileText,
  Plus,
  Zap,
  Loader2,
  CheckCircle2,
  RefreshCcw,
  Download,
  ShieldCheck,
} from "lucide-react";
import { mergePDFs } from "@/lib/pdf-engine";

interface QueuedFile {
  id: string;
  file: File;
  name: string;
  size: string;
}

type MergeStatus = "idle" | "processing" | "completed";

export default function MergePdf() {
  const [files, setFiles] = useState<QueuedFile[]>([]);
  const [status, setStatus] = useState<MergeStatus>("idle");
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const incoming = Array.from(e.target.files);

    // Basic validation
    if (files.length + incoming.length > 20) {
      return alert("Maximum 20 files allowed for security and performance.");
    }

    const newEntries = incoming.map((f) => ({
      id: crypto.randomUUID(),
      file: f,
      name: f.name,
      size: (f.size / (1024 * 1024)).toFixed(2) + " MB",
    }));
    setFiles((prev) => [...prev, ...newEntries]);
    if (status === "completed") resetWorkspace();
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const resetWorkspace = () => {
    if (mergedUrl) URL.revokeObjectURL(mergedUrl);
    setMergedUrl(null);
    setFiles([]);
    setStatus("idle");
  };

  const handleMerge = async () => {
    setStatus("processing");
    try {
      const blob = await mergePDFs(files.map((f) => f.file));
      const url = URL.createObjectURL(blob);
      setMergedUrl(url);
      setStatus("completed");
    } catch (err) {
      console.error("Merge Logic Error:", err);
      alert("An error occurred during merging. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6 pb-24 md:pb-12">
      {/* 1. STATUS ALERT */}
      {status === "completed" && (
        <div className="p-6 rounded-4xl bg-green-50 border border-green-100 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-3 text-green-700">
            <CheckCircle2 size={28} />
            <div>
              <p className="font-bold text-sm leading-none uppercase">
                Merge Successful
              </p>
              <p className="text-[10px] opacity-70">
                Your new document is ready for download.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={resetWorkspace}
              className="flex-1 sm:flex-none p-3 text-gray-400 hover:text-gray-600 bg-white border border-gray-100 rounded-xl transition-colors"
              title="Clear all"
            >
              <RefreshCcw size={20} />
            </button>
            <a
              href={mergedUrl!}
              download="EssentialCalc_Merged.pdf"
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-100 transition-all"
            >
              <Download size={18} /> DOWNLOAD
            </a>
          </div>
        </div>
      )}

      {/* 2. UPLOAD ZONE */}
      <div className="relative group">
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleUpload}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />
        <div className="border-2 border-dashed border-blue-200 rounded-[2.5rem] p-12 text-center bg-blue-50/30 group-hover:bg-blue-50 group-hover:border-blue-400 transition-all duration-300">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-600">
            <Plus size={32} />
          </div>
          <h3 className="font-black text-gray-900 uppercase tracking-tight text-xl mb-1">
            Add PDF Documents
          </h3>
          <p className="text-xs text-gray-500 font-medium">
            Click or drag files here to start staging
          </p>
        </div>
      </div>

      {/* 3. FILE QUEUE */}
      <div className="space-y-3">
        {files.length > 0 && (
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 mb-2">
            Staged Queue ({files.length})
          </p>
        )}
        <div className="grid grid-cols-1 gap-3">
          {files.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 transition-all group"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <FileText size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-gray-900 truncate">
                  {item.name}
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {item.size}
                </p>
              </div>
              <button
                onClick={() => removeFile(item.id)}
                className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. MERGE ACTION BUTTON */}
      <div className="pt-4">
        <button
          onClick={handleMerge}
          disabled={
            files.length < 2 ||
            status === "processing" ||
            status === "completed"
          }
          className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 active:scale-[0.98] transition-all disabled:opacity-30 disabled:grayscale disabled:shadow-none"
        >
          {status === "processing" ? (
            <Loader2 className="animate-spin" size={24} />
          ) : (
            <Zap size={24} fill="currentColor" />
          )}
          <span className="uppercase tracking-widest text-sm">
            {status === "processing"
              ? "Engine Processing..."
              : `Merge ${files.length} Files Now`}
          </span>
        </button>
      </div>

      {/* 5. PRIVACY BADGE */}
      <div className="flex items-center justify-center gap-2 text-gray-400 pt-4">
        <ShieldCheck size={16} className="text-green-500" />
        <span className="text-[10px] font-bold uppercase tracking-widest">
          100% Local Browser Processing &middot; No Uploads
        </span>
      </div>
    </div>
  );
}
