"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import { Upload, Download, Trash2, Camera, PenTool } from "lucide-react";

export default function PhotoSignatureAttest() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (
    e: ChangeEvent<HTMLInputElement>,
    type: "photo" | "sig",
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      type === "photo" ? setPhoto(url) : setSignature(url);
    }
  };

  const generateFinalImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Draw Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 320, 240);

    // 2. Draw Photo (Top 180px)
    if (photo) {
      const img = new window.Image();
      img.src = photo;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 320, 180);
        // 3. Draw Signature (Bottom 60px)
        if (signature) {
          const sig = new window.Image();
          sig.src = signature;
          sig.onload = () => {
            ctx.fillStyle = "#ffffff"; // Sig area white background
            ctx.fillRect(0, 180, 320, 60);
            ctx.drawImage(sig, 40, 185, 240, 50); // Centered sig

            // Download Trigger
            const link = document.createElement("a");
            link.download = "attested-photo.png";
            link.href = canvas.toDataURL();
            link.click();
          };
        }
      };
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <header className="border-b-4 border-black pb-2">
        <h2 className="text-xl font-black uppercase italic">
          Self-Attest Tool
        </h2>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          Standard: 320x240px
        </p>
      </header>

      {/* --- PREVIEW BOX (320x240 Ratio) --- */}
      <div
        className="relative w-full aspect-[320/240] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        style={{ backgroundColor: bgColor }}
      >
        {photo ? (
          <div className="relative h-[75%] w-full border-b-2 border-black border-dashed">
            <Image
              src={photo}
              alt="Photo"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ) : (
          <div className="h-[75%] flex items-center justify-center text-gray-300">
            <Camera size={48} />
          </div>
        )}

        {signature ? (
          <div className="h-[25%] bg-white relative flex items-center justify-center">
            <img
              src={signature}
              alt="Signature"
              className="h-full object-contain p-2"
            />
          </div>
        ) : (
          <div className="h-[25%] bg-white flex items-center justify-center text-gray-300">
            <PenTool size={24} />
          </div>
        )}
      </div>

      {/* --- CONTROLS --- */}
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col items-center justify-center p-4 border-2 border-black bg-white hover:bg-gray-50 cursor-pointer transition-all">
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handleUpload(e, "photo")}
          />
          <Upload size={20} className="mb-1" />
          <span className="text-[10px] font-black uppercase">Photo</span>
        </label>

        <label className="flex flex-col items-center justify-center p-4 border-2 border-black bg-white hover:bg-gray-50 cursor-pointer transition-all">
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handleUpload(e, "sig")}
          />
          <Upload size={20} className="mb-1" />
          <span className="text-[10px] font-black uppercase">Sign</span>
        </label>
      </div>

      {/* --- BG COLOR & ACTIONS --- */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 border-2 border-black p-2 grow">
          <span className="text-[10px] font-black uppercase">BG Color:</span>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-8 cursor-pointer bg-transparent"
          />
        </div>
        <button
          onClick={() => {
            setPhoto(null);
            setSignature(null);
          }}
          className="p-3 border-2 border-black hover:bg-red-50"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <button
        disabled={!photo || !signature}
        onClick={generateFinalImage}
        className="w-full py-4 bg-black text-white font-black uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-20 transition-all"
      >
        Download Attested Image
      </button>

      {/* Hidden Canvas for Generation */}
      <canvas ref={canvasRef} width="320" height="240" className="hidden" />
    </div>
  );
}
