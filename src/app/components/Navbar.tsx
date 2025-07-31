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

export default function Navbar({
  setShowRoadmap,
  setShowSettings,
}: NavbarProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [isInStandalone, setIsInStandalone] = useState(false);
  const [showIosInstructions, setShowIosInstructions] = useState(false);
  const [showInstallIcon, setShowInstallIcon] = useState(false);

  // 1️⃣ Detect iOS & standalone
  useEffect(() => {
    setIsIos(/iphone|ipad|ipod/i.test(navigator.userAgent));
    // @ts-expect-error: navigator.standalone is iOS-only
    const standalone = (window.navigator as any).standalone === true;
    const displayStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsInStandalone(standalone || displayStandalone);
  }, []);

  // 2️⃣ Capture Chrome/Android install prompt
  useEffect(() => {
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', () => setDeferredPrompt(null));
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', () => setDeferredPrompt(null));
    };
  }, []);

  // 3️⃣ Toggle brand ↔ icon every 3s when install available
  useEffect(() => {
    if (!deferredPrompt && !isIos) return;
    const iv = setInterval(() => setShowInstallIcon((i) => !i), 3000);
    return () => clearInterval(iv);
  }, [deferredPrompt, isIos]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Chrome / Android
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
      return;
    }
    if (isIos && !isInStandalone) {
      // iOS fallback
      setShowIosInstructions(true);
      setTimeout(() => setShowIosInstructions(false), 5000);
    }
  };

  // show button if not already in standalone, and install is possible
  const showInstallButton = !isInStandalone && (deferredPrompt !== null || isIos);

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-950 z-50 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          {showInstallButton ? (
            <button
              onClick={handleInstallClick}
              className="text-cyan-400 text-2xl focus:outline-none"
              aria-label="Install FlipMine"
            >
              {showInstallIcon ? (
                <FaDownload className="animate-bounce" />
              ) : (
                'FlipMine'
              )}
            </button>
          ) : (
            <span className="text-cyan-400 font-bold text-xl">FlipMine</span>
          )}

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
            <Link href="/history" className="hover:text-white">
              History
            </Link>
            <button
              className="hover:text-white"
              onClick={() => {
                setShowRoadmap(false);
                setShowSettings((s) => !s);
              }}
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

      {/* iOS “Add to Home Screen” overlay */}
      {showIosInstructions && (
        <div className="fixed inset-0 flex items-end justify-center p-4 pointer-events-none z-60">
          <div className="bg-gray-800 text-white px-4 py-2 rounded shadow-lg pointer-events-auto">
            Tap <strong>Share</strong> then <strong>Add to Home Screen</strong>
          </div>
        </div>
      )}
    </>
  );
}



