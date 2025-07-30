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

function Navbar({ setShowSettings, setShowRoadmap }: NavbarProps) {
  // this controls which of the two to show
  const [showTextLogo, setShowTextLogo] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShowTextLogo((v) => !v);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed w-full bg-gray-950 z-100 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div
          className="
            relative w-32 h-6
            flex items-center justify-center
          "
        >
          {/* FlipMine text */}
          <h1
            className={`
              absolute
              text-cyan-400 font-bold text-xl
              transition-opacity duration-500
              ${showTextLogo ? 'opacity-100' : 'opacity-0'}
            `}
          >
            FlipMine
          </h1>

          {/* Download icon */}
          <FaDownload
            className={`
              absolute text-cyan-400
              text-2xl
              transition-opacity duration-500
              ${showTextLogo ? 'opacity-0' : 'opacity-100'}
            `}
          />
        </div>

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
              setShowSettings((prev) => !prev);
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

export default Navbar;


