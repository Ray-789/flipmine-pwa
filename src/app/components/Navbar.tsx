// src/app/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

interface NavbarProps {
  showRoadmap: boolean;
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

type BeforeInstallPromptEvent = Event & {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export default function Navbar({
  showRoadmap,
  setShowRoadmap,
  showSettings,
  setShowSettings,
}: NavbarProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos, setIsIos] = useState(false);
  const [isInStandalone, setIsInStandalone] = useState(false);
  const [showIosInstructions, setShowIosInstructions] = useState(false);

  // Detect iOS & standalone mode in the browser
  useEffect(() => {
    const ua = navigator.userAgent;
    setIsIos(/iphone|ipad|ipod/i.test(ua));

    // @ts-ignore
    const standalone = window.navigator.standalone === true;
    const displayStandalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsInStandalone(standalone || displayStandalone);
  }, []);

  // Capture Chrome/Android beforeinstallprompt
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

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Android/Chrome
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
      return;
    }
    // iOS fallback
    if (isIos && !isInStandalone) {
      setShowIosInstructions(true);
      setTimeout(() => setShowIosInstructions(false), 5000);
    }
  };

  // Show the install button if not already standalone and we have a prompt or are on iOS
  const showInstallButton = !isInStandalone && (deferredPrompt !== null || isIos);

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-950 z-50 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          {showInstallButton && (
            <button
              onClick={handleInstallClick}
              className="text-cyan-400 text-2xl focus:outline-none"
              aria-label="Install FlipMine"
            >
              <FaDownload className="animate-pulse" />
            </button>
          )}
          <span className="text-cyan-400 font-bold text-xl">FlipMine</span>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
            <Link href="/history"   className="hover:text-white">History</Link>
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
        <div className="fixed inset-0 flex items-end justify-center p-4 pointer-events-none">
          <div className="bg-gray-800 text-white px-4 py-2 rounded shadow-lg pointer-events-auto">
            Tap <span className="font-bold">Share</span> then{' '}
            <span className="font-bold">Add to Home Screen</span>
          </div>
        </div>
      )}
    </>
  );
}


