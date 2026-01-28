"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import Cropper, { Point, Area } from "react-easy-crop";
import {
  Upload,
  Download,
  Trash2,
  Camera,
  PenTool,
  Crop as CropIcon,
  Check,
} from "lucide-react";

export default function PhotoSignatureAttest() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState("#ffffff");

  // Cropping State
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isCropping, setIsCropping] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleUpload = (
    e: ChangeEvent<HTMLInputElement>,
    type: "photo" | "sig",
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      type === "photo" ? setPhoto(url) : setSignature(url);
    }
  };

  const onCropComplete = (items: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  };

  const generateFinalImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas || !photo || !signature) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Draw Background Color (This fixes the BG not working)
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 320, 240);

    const loadImage = (url: string): Promise<HTMLImageElement> =>
      new Promise((resolve) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => resolve(img);
      });

    const photoImg = await loadImage(photo);
    const sigImg = await loadImage(signature);

    // 2. Draw Photo (Top 180px)
    // If croppedAreaPixels exists, we use it to slice the source image
    if (croppedAreaPixels) {
      ctx.drawImage(
        photoImg,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        320,
        180,
      );
    } else {
      ctx.drawImage(photoImg, 0, 0, 320, 180);
    }

    // 3. Draw Signature Area (Bottom 60px)
    ctx.fillStyle = "#ffffff"; // Forced white background for signature legibility
    ctx.fillRect(0, 180, 320, 60);
    ctx.drawImage(sigImg, 40, 185, 240, 50);

    // 4. Trigger Download
    const link = document.createElement("a");
    link.download = "self-attested.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 bg-white border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <header className="border-b-4 border-black pb-2">
        <h2 className="text-2xl font-black uppercase italic tracking-tighter">
          Attest Pro
        </h2>
        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
          {/* Format: 320 x 240 PX */}
        </p>
      </header>

      {/* --- PREVIEW / CROPPER WORKSPACE --- */}
      <div
        className="relative w-full aspect-200/240 border-4 border-black overflow-hidden bg-gray-50"
        style={{ backgroundColor: isCropping ? "#000" : bgColor }}
      >
        {photo && isCropping ? (
          <div className="absolute inset-0 z-50 bg-black">
            <Cropper
              image={photo}
              crop={crop}
              zoom={zoom}
              aspect={200 / 180}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <button
              onClick={() => setIsCropping(false)}
              className="absolute bottom-4 right-4 bg-white border-2 border-black p-2 font-black uppercase text-xs flex items-center gap-2"
            >
              <Check size={14} /> Done
            </button>
          </div>
        ) : photo ? (
          <div className="relative h-[75%] w-full border-b-2 border-black group">
            <Image
              src={photo}
              alt="Uploaded Photo"
              fill
              sizes="(max-width: 448px) 100vw, 320px"
              className="object-cover"
              unoptimized
            />
            <button
              onClick={() => setIsCropping(true)}
              className="absolute top-2 right-2 bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <CropIcon size={16} />
            </button>
          </div>
        ) : (
          <div className="h-[75%] flex flex-col items-center justify-center text-gray-300">
            <Camera size={40} strokeWidth={1} />
            <span className="text-[8px] font-bold uppercase mt-2">
              Photo Layer
            </span>
          </div>
        )}

        <div className="h-[25%] bg-white relative flex items-center justify-center">
          {signature ? (
            <Image
              src={signature}
              alt="Signature"
              fill
              sizes="(max-width: 448px) 100vw, 320px"
              className="object-contain p-2"
              unoptimized
            />
          ) : (
            <PenTool size={20} className="text-gray-200" />
          )}
        </div>
      </div>

      {/* --- CONTROLS --- */}
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col items-center justify-center py-4 border-2 border-black bg-white hover:bg-black hover:text-white cursor-pointer transition-all group">
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handleUpload(e, "photo")}
          />
          <Upload size={18} className="mb-1" />
          <span className="text-[9px] font-black uppercase">Upload Photo</span>
        </label>

        <label className="flex flex-col items-center justify-center py-4 border-2 border-black bg-white hover:bg-black hover:text-white cursor-pointer transition-all">
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => handleUpload(e, "sig")}
          />
          <Upload size={18} className="mb-1" />
          <span className="text-[9px] font-black uppercase">Upload Sign</span>
        </label>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-3 border-2 border-black p-2 h-12">
          <span className="text-[9px] font-black uppercase whitespace-nowrap">
            BG:
          </span>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-full cursor-pointer bg-transparent border-none"
          />
        </div>
        <button
          onClick={() => {
            setPhoto(null);
            setSignature(null);
          }}
          className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <button
        disabled={!photo || !signature}
        onClick={generateFinalImage}
        className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.2em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] active:translate-x-1 active:translate-y-1 active:shadow-none disabled:opacity-10 transition-all flex items-center justify-center gap-3"
      >
        <Download size={20} /> Download Final
      </button>

      <canvas ref={canvasRef} width="320" height="240" className="hidden" />
    </div>
  );
}
