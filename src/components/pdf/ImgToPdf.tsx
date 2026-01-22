"use client";

import React, { useState } from "react";
import {
  Plus,
  FileOutput,
  Download,
  X,
  Loader2,
  Trash2,
  Image as LucideImage,
} from "lucide-react";
import Image from "next/image";
import { convertImagesToPdf } from "@/lib/img-to-pdf-engine";

export default function ImageToPdf() {
  const [images, setImages] = useState<
    { id: string; url: string; name: string }[]
  >([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file) => ({
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages((prev) => [...prev, ...newImages]);
    setPdfUrl(null);
  };

  const removeImage = (id: string, url: string) => {
    URL.revokeObjectURL(url);
    setImages((prev) => prev.filter((img) => img.id !== id));
    setPdfUrl(null);
  };

  const clearAll = () => {
    images.forEach((img) => URL.revokeObjectURL(img.url));
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setImages([]);
    setPdfUrl(null);
  };

  const handleConvert = async () => {
    if (images.length === 0) return;
    setIsProcessing(true);
    try {
      const blob = await convertImagesToPdf(images.map((img) => img.url));
      setPdfUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
      alert("Conversion failed. Please try again with smaller images.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <div className="flex justify-end items-center mb-6">
        {images.length > 0 && !pdfUrl && (
          <button
            onClick={clearAll}
            className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-xl text-xs font-bold uppercase transition-all"
          >
            <Trash2 size={16} /> Clear All
          </button>
        )}
      </div>

      {!images.length ? (
        <div className="relative border-2 border-dashed border-blue-200 rounded-[2.5rem] p-16 md:p-24 text-center bg-blue-50/30 hover:bg-blue-50 transition-all group">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          />
          <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
            <LucideImage size={40} />
          </div>
          <h3 className="font-black uppercase tracking-tight text-2xl text-gray-900">
            Upload Your Photos
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            JPG, PNG, or WebP files accepted
          </p>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="relative aspect-3/4 rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm group hover:border-blue-400 transition-all"
              >
                <Image
                  src={img.url}
                  fill
                  className="object-cover"
                  alt="preview"
                  unoptimized
                />
                <button
                  onClick={() => removeImage(img.id, img.url)}
                  className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full hover:bg-red-500 transition-colors z-20 md:opacity-0 group-hover:opacity-100"
                >
                  <X size={14} />
                </button>
              </div>
            ))}

            {!pdfUrl && (
              <label className="relative aspect-3/4 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleUpload}
                  className="hidden"
                />
                <Plus size={24} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase mt-2 text-gray-400">
                  Add More
                </span>
              </label>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {!pdfUrl ? (
              <button
                onClick={handleConvert}
                disabled={isProcessing}
                className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 transition-all"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    <span className="uppercase tracking-widest text-sm">
                      Processing {images.length} Images...
                    </span>
                  </>
                ) : (
                  <>
                    <FileOutput size={24} />
                    <span className="uppercase tracking-widest text-sm">
                      Convert to PDF Now
                    </span>
                  </>
                )}
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row w-full gap-4">
                <button
                  onClick={() => setPdfUrl(null)}
                  className="px-8 py-5 bg-gray-50 text-gray-600 rounded-2xl font-bold uppercase text-sm border border-gray-100 hover:bg-gray-100 transition-all"
                >
                  Edit Collection
                </button>
                <a
                  href={pdfUrl}
                  download="EssentialCalc_Images.pdf"
                  className="flex-1 py-5 bg-green-600 text-white font-black rounded-2xl shadow-xl shadow-green-100 flex items-center justify-center gap-3 hover:bg-green-700 transition-all"
                >
                  <Download size={24} />
                  <span className="uppercase tracking-widest text-sm">
                    Download Your PDF
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
