// src/app/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

interface NavbarProps {
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

type BeforeInstallPromptEvent = Event & {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

export default function Navbar({
  setShowRoadmap,
  setShowSettings,
}: NavbarProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [isInStandalone, setIsInStandalone] = useState(false);
  const [showIosInstructions, setShowIosInstructions] = useState(false);
  const [pulseIcon, setPulseIcon] = useState(false);

  // 1) Detect iOS / iPadOS
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    const isiPhone = ua.includes('iphone') || ua.includes('ipod');
    const isiPadUA = ua.includes('ipad');
    // iPadOS 13+ lies and says MacIntel
    const isiPadTouch = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    setIsIos(isiPhone || isiPadUA || isiPadTouch);

    // also detect if already running standalone
    const iosStandalone = window.navigator.standalone === true;
    const mmStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsInStandalone(iosStandalone || mmStandalone);
  }, []);

  // 2) Capture Android/Chrome install prompt
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => setDeferredPrompt(null));
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', () => setDeferredPrompt(null));
    };
  }, []);

  // 3) Pulse icon every 3s when install is available
  useEffect(() => {
    if (!deferredPrompt && !isIos) return;
    const iv = setInterval(() => setPulseIcon((v) => !v), 3000);
    return () => clearInterval(iv);
  }, [deferredPrompt, isIos]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Chrome/Android
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
      return;
    }
    if (isIos && !isInStandalone) {
      // iOS fallback
      setShowIosInstructions(true);
      // auto-hide after 5s
      setTimeout(() => setShowIosInstructions(false), 5000);
    }
  };

  const showInstallButton = !isInStandalone && (deferredPrompt !== null || isIos);

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-950 z-50 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          {showInstallButton ? (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-2 text-cyan-400 font-bold text-xl focus:outline-none"
              aria-label="Install FlipMine"
            >
              {pulseIcon
                ? <FaDownload className="animate-pulse" />
                : <>FlipMine</>
              }
            </button>
          ) : (
            <span className="text-cyan-400 font-bold text-2xl">FlipMine</span>
          )}

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
            <Link href="/history" className="hover:text-white">History</Link>
            <button
              onClick={() => {
                setShowRoadmap(false);
                setShowSettings((s) => !s);
              }}
              className="hover:text-white"
            >
              Settings
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-xs text-gray-400">XP / Role</p>
            <p className="text-purple-400 font-bold">0</p>
          </div>
          <FaUserCircle className="text-white text-3xl" />
        </div>
      </header>

      {showIosInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-10 rounded-2xl shadow-2xl border-4 border-cyan-500 max-w-md text-center">
            <h2 className="text-3xl font-extrabold mb-4">Add FlipMine to Home</h2>
            <p className="mb-6 text-lg">
              Tap the <span className="font-bold">Share</span> icon and then choose{' '}
              <span className="font-bold">Add to Home Screen</span>.
            </p>
            <button
              onClick={() => setShowIosInstructions(false)}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg text-lg transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}





