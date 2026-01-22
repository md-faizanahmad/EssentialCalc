"use client";

import React, { useEffect, useState } from "react";
import { Download, X, Zap, ShieldCheck } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function InstallPWA() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent browser from showing default prompt
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);

      // Only show if user hasn't dismissed it in this session
      const isDismissed = sessionStorage.getItem("pwa-prompt-dismissed");
      if (!isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    // Trigger the native browser install dialog
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;

    if (outcome === "accepted") {
      setInstallPrompt(null);
      setIsVisible(false);
    }
  };

  const dismissPrompt = () => {
    setIsVisible(false);
    sessionStorage.setItem("pwa-prompt-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-10 left-4 right-4 md:left-auto md:right-10 md:w-96 z-100 animate-in slide-in-from-bottom-10 duration-500">
      <div className="bg-white border border-blue-100 p-6 rounded-[2.5rem] shadow-2xl shadow-blue-100 relative overflow-hidden">
        {/* Aesthetic Blue Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[50px] pointer-events-none" />

        <button
          onClick={dismissPrompt}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-opacity"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
            <Zap size={24} fill="white" className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">
              Get <span className="text-blue-600">EssentialCalc</span>
            </h3>
            <p className="text-[11px] font-bold text-gray-500 leading-relaxed mt-1 uppercase tracking-tight">
              Fast, Private & Works Offline
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-400">
            <ShieldCheck size={14} className="text-green-500" /> 100% Private
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-400">
            <Zap size={14} className="text-blue-500" /> No Data Use
          </div>
        </div>

        <button
          onClick={handleInstall}
          className="w-full py-4 bg-blue-600 text-white font-black uppercase rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-blue-700 shadow-xl shadow-blue-100"
        >
          <Download size={18} />
          Install App
        </button>
      </div>
    </div>
  );
}
