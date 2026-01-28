"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Cropper, { Point, Area } from "react-easy-crop";
import {
  Upload,
  Download,
  Scissors,
  Crop as CropIcon,
  Zap,
  Loader2,
} from "lucide-react";
import { removeBgExternal, toBase64 } from "@/lib/ai-services";

export default function RemoveBgAI() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Cropper States
  const [isCropping, setIsCropping] = useState(false);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback((_: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setResult(null);
    }
  };

  const applyCrop = async () => {
    if (!preview || !croppedAreaPixels) return;
    const img = new window.Image();
    img.src = preview;
    await new Promise((r) => (img.onload = r));

    const canvas = document.createElement("canvas");
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
    );

    setPreview(canvas.toDataURL("image/png"));
    setIsCropping(false);
  };

  const processImage = async () => {
    if (!preview) return;
    setLoading(true);
    try {
      let b64: string;
      if (preview.startsWith("data:image")) {
        const res = await fetch(preview);
        const blob = await res.blob();
        b64 = await toBase64(blob);
      } else {
        b64 = await toBase64(file!);
      }

      const processedBase64 = await removeBgExternal(b64);
      setResult(processedBase64);
    } catch (err) {
      console.error(err);
      alert("AI Processing Failed. Check API status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <header className="flex items-center justify-between border-b-4 border-black pb-4">
        <div>
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">
            AI REMOVER
          </h2>
          <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
            Secured Proxy Engine
          </p>
        </div>
        <Scissors size={32} strokeWidth={3} className="-rotate-12" />
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Input Box */}
        <div className="relative aspect-square border-4 border-black bg-gray-50 overflow-hidden group">
          {preview ? (
            <>
              <Image
                src={preview}
                alt="Original"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain p-2"
                unoptimized
              />
              <button
                onClick={() => setIsCropping(true)}
                className="absolute top-2 right-2 bg-black text-white p-2 border-2 border-black hover:bg-red-600 z-10"
              >
                <CropIcon size={18} />
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 opacity-20">
              <Upload size={48} />
            </div>
          )}
        </div>

        {/* Output Box */}
        <div className="relative aspect-square border-4 border-black bg-white overflow-hidden">
          {/* Transparent Grid Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[10px_10px]" />

          {loading && (
            <div className="absolute inset-0 z-20 bg-white/90 flex flex-col items-center justify-center">
              <Loader2
                className="animate-spin text-red-600 mb-2"
                size={40}
                strokeWidth={3}
              />
              <span className="text-[10px] font-black uppercase animate-pulse">
                Processing...
              </span>
            </div>
          )}
          {result && (
            <Image
              src={result}
              alt="Result"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-contain p-2 relative z-10"
              unoptimized
            />
          )}
        </div>
      </div>

      <div className="space-y-4">
        <label className="flex items-center justify-center w-full py-4 border-4 border-black bg-white hover:bg-black hover:text-white cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1">
          <input type="file" hidden accept="image/*" onChange={handleUpload} />
          <Upload size={20} className="mr-2" strokeWidth={3} />
          <span className="text-sm font-black uppercase">Select Image</span>
        </label>

        <div className="grid grid-cols-2 gap-4">
          <button
            disabled={!preview || loading}
            onClick={processImage}
            className="py-4 bg-red-600 text-white font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-20 flex items-center justify-center gap-2"
          >
            <Zap size={18} fill="currentColor" /> Remove BG
          </button>

          <button
            disabled={!result}
            onClick={() => {
              const a = document.createElement("a");
              a.href = result!;
              a.download = "no-bg.png";
              a.click();
            }}
            className="py-4 bg-black text-white font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] disabled:opacity-20 flex items-center justify-center gap-2"
          >
            <Download size={18} strokeWidth={3} /> Save PNG
          </button>
        </div>
      </div>

      {isCropping && (
        <div className="fixed inset-0 bg-black/80 z-100 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white border-4 border-black p-4 space-y-4">
            <div className="relative h-80 bg-black">
              <Cropper
                image={preview!}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setIsCropping(false)}
                className="flex-1 py-2 border-4 border-black font-black text-xs uppercase"
              >
                Cancel
              </button>
              <button
                onClick={applyCrop}
                className="flex-1 py-2 bg-red-600 text-white border-4 border-black font-black text-xs uppercase"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
