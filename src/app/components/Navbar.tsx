// src/app/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

interface NavbarProps {
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

// Extend Navigator for iOS standalone detection
declare global {
  interface Navigator {
    standalone?: boolean;
  }
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

  // detect iOS / standalone
  useEffect(() => {
    setIsIos(/iphone|ipad|ipod/i.test(navigator.userAgent));
    const iosStand = navigator.standalone ?? false;
    const displayStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsInStandalone(iosStand || displayStandalone);
  }, []);

  // capture Chrome/Android install prompt
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

  // pulse between icon and text every 3s if install available
  useEffect(() => {
    if (!deferredPrompt && !isIos) return;
    const iv = setInterval(() => setShowInstallIcon((v) => !v), 3000);
    return () => clearInterval(iv);
  }, [deferredPrompt, isIos]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
      return;
    }
    if (isIos && !isInStandalone) {
      setShowIosInstructions(true);
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
              className="text-cyan-400 font-bold text-xl focus:outline-none flex items-center gap-2"
              aria-label="Install FlipMine"
            >
              {showInstallIcon ? (
                <FaDownload className="animate-pulse" />
              ) : (
                'FlipMine'
              )}
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

      {/* Big, full-screen iOS instructions */}
      {showIosInstructions && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center p-8"
          onClick={() => setShowIosInstructions(false)}
        >
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-12 rounded-2xl shadow-2xl border-4 border-cyan-500 max-w-lg text-center space-y-6">
            <h2 className="text-4xl font-extrabold">Install FlipMine</h2>
            <p className="text-lg">
              Tap <strong>Share</strong> (the ⬆︎ icon), then choose <strong>Add to Home Screen</strong>.
            </p>
            <button
              onClick={() => setShowIosInstructions(false)}
              className="mt-4 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}




