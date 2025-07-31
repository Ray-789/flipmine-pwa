// src/app/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

interface NavbarProps {
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

// “standalone” on iOS
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
    const iosStandalone = navigator.standalone ?? false;
    const displayModeStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsInStandalone(iosStandalone || displayModeStandalone);
  }, []);

  // capture Chrome/Android prompt
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

  // pulse between icon and text
  useEffect(() => {
    if (!deferredPrompt && !isIos) return;
    const iv = setInterval(() => setShowInstallIcon((i) => !i), 3000);
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
        <div className="flex items-center gap-6">
          {showInstallButton ? (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition"
            >
              <FaDownload className="text-2xl animate-bounce" />
              {showInstallIcon ? 'Install App' : 'FlipMine'}
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

      {/* iOS “Add to Home Screen” overlay */}
      {showIosInstructions && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-40 p-4"
          onClick={() => setShowIosInstructions(false)}
        >
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8 rounded-xl shadow-2xl border-4 border-cyan-500 animate-pulse max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4">Install FlipMine</h2>
            <p className="mb-6">
              Tap <strong>Share</strong>, then <strong>Add to Home Screen</strong> to install.
            </p>
            <button
              onClick={() => setShowIosInstructions(false)}
              className="mt-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}




