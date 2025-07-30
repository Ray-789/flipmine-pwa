'use client';
import { useEffect, useState } from 'react';
import { FaUserCircle, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

interface NavbarProps {
  showRoadmap: boolean;
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  setShowRoadmap,
  setShowSettings,
  showRoadmap,
  showSettings,
}: NavbarProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstallHint, setShowInstallHint] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    // Detect iOS
    setIsIos(/iphone|ipad|ipod/i.test(navigator.userAgent));
    // Detect if already launched from home screen
    setIsStandalone(('standalone' in navigator) && (navigator as any).standalone);

    // Listen for Chrome-style install prompt
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!isStandalone) setShowInstallHint(true);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // Toggle logo ↔ download icon every 3s
    const iv = setInterval(() => setAnimateLogo((v) => !v), 3000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearInterval(iv);
    };
  }, [isStandalone]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Chrome/Android install
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setShowInstallHint(false);
    } else if (isIos) {
      // iOS instructions
      alert(
        'To install FlipMine, tap the Share button in Safari and then "Add to Home Screen".'
      );
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gray-950 z-50 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        {/* Logo / Install toggle */}
        {showInstallHint ? (
          <button
            onClick={handleInstallClick}
            className="text-cyan-400 text-2xl focus:outline-none"
            title="Install FlipMine"
          >
            {animateLogo ? (
              <FaDownload className="animate-bounce" />
            ) : (
              <span className="font-bold text-xl">FlipMine</span>
            )}
          </button>
        ) : (
          <h1 className="text-cyan-400 font-bold text-xl">FlipMine</h1>
        )}

        {/* Main nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
          <Link href="/history" className="hover:text-white">History</Link>
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
  );
}


