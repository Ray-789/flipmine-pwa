'use client';
import { useState, useEffect } from 'react';
import { FaUserCircle, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

interface NavbarProps {
  showRoadmap: boolean;
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

function Navbar({ setShowSettings, setShowRoadmap }: NavbarProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent|null>(null);
  const [showInstallIcon, setShowInstallIcon] = useState(false);
  const [showIosInstallInstructions, setShowIosInstallInstructions] = useState(false);

  // capture the install prompt
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => setDeferredPrompt(null));
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  // flip logo <-> download icon every 3s, but only if we can install
  useEffect(() => {
    if (!deferredPrompt) return;
    const iv = setInterval(() => {
      setShowInstallIcon(i => !i);
    }, 3000);
    return () => clearInterval(iv);
  }, [deferredPrompt]);

  const handleInstallClick = () => {
    // Android / Chrome
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
      });
      return;
    }
    // iOS fallback
    if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
      setShowIosInstallInstructions(true);
      setTimeout(() => setShowIosInstallInstructions(false), 5000);
    }
  };

  return (
    <>
      <header className="fixed w-full bg-gray-950 z-100 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button
            onClick={handleInstallClick}
            className="text-cyan-400 font-bold text-xl focus:outline-none"
            aria-label="Install FlipMine"
          >
            {deferredPrompt
              ? showInstallIcon
                ? <FaDownload className="animate-pulse" />
                : 'FlipMine'
              : 'FlipMine'
            }
          </button>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
            <Link href="/history" className="hover:text-white">History</Link>
            <button
              className="hover:text-white"
              onClick={() => {
                setShowRoadmap(false);
                setShowSettings(s => !s);
              }}
            >
              Settings
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-xs text-gray-400">XP / Role</p>
            <p className="text-purple-400 font-bold">{0}</p>
          </div>
          <FaUserCircle className="text-white text-3xl" />
        </div>
      </header>

      {/* iOS “Add to Home Screen” instructions overlay */}
      {showIosInstallInstructions && (
        <div className="fixed inset-0 flex items-end justify-center p-4 pointer-events-none">
          <div className="bg-gray-800 text-white px-4 py-2 rounded shadow-lg pointer-events-auto">
            Tap <span className="font-bold">Share</span> then <span className="font-bold">Add to Home Screen</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

