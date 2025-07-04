'use client';
import { Home, Search, ShoppingCart, Settings } from 'lucide-react';

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white border-t border-gray-700">
      <div className="flex justify-around items-center h-16">
        <NavItem icon={<Home size={24} />} label="Home" />
        <NavItem icon={<Search size={24} />} label="Search" />
        <NavItem icon={<ShoppingCart size={24} />} label="Cart" />
        <NavItem icon={<Settings size={24} />} label="Settings" />
      </div>
    </nav>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center text-sm hover:text-cyan-400 transition">
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}
