'use client';

import { FaUserCircle } from 'react-icons/fa';

export default function FlipMineAppNav() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <header className="bg-gray-950 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-500 uppercase">Your Goal</p>
        <h2 className="text-3xl font-extrabold text-cyan-400">$300 → $1,000</h2>
      </div>
      <FaUserCircle className="text-white text-3xl" />
    </header>
  );
}

