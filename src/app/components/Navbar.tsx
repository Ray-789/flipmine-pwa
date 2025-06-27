'use client';

import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

function Navbar({ xp }) {
  const level = Math.floor(xp / 100);
  const role = level >= 10 ? 'Trader Wolf' : level >= 5 ? 'Strategist' : 'Hustler';

  return (
    <header className="bg-gray-950 border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <h1 className="text-cyan-400 font-bold text-xl">FlipMine</h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Dashboard</Link>
          <Link href="/history" className="hover:text-white">History</Link>
          <Link href="/settings" className="hover:text-white">Settings</Link>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-xs text-gray-400">XP / Role</p>
          <p className="text-purple-400 font-bold">{xp} / {role}</p>
        </div>
        <FaUserCircle className="text-white text-3xl" />
      </div>
    </header>
  );
}
export default Navbar;

