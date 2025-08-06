'use client';
import { Home, Settings, MapPinned } from 'lucide-react';
import React from 'react';

interface BottomNavbarProps {
  showRoadmap: boolean;
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  showScroll: boolean;
  setShowScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BottomNavbar({
  showRoadmap,
  setShowRoadmap,
  showSettings,
  setShowSettings,
  showScroll,
  setShowScroll,
}: BottomNavbarProps) {
  const currentPage = showRoadmap
    ? 'RoadMap'
    : showSettings
    ? 'Settings'
    : showScroll
    ? 'Scroll'
    : 'Home';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-820 bg-gray-900 text-white border-t border-gray-700">
      <div className="flex justify-around items-center h-20">
        <NavItem
          icon={<Home size={24} />}
          label="Home"
          active={currentPage === 'Home'}
          func={() => {
            setShowRoadmap(false);
            setShowSettings(false);
            setShowScroll(false);
          }}
        />
        <NavItem
          icon={<MapPinned size={24} />}
          label="RoadMap"
          active={currentPage === 'RoadMap'}
          func={() => {
            setShowSettings(false);
            setShowScroll(false);
            setShowRoadmap((prev) => !prev);
          }}
        />
        <NavItem
          icon={<Settings size={24} />}
          label="Settings"
          active={currentPage === 'Settings'}
          func={() => {
            setShowRoadmap(false);
            setShowSettings((prev) => !prev);
            setShowScroll(false);
          }}
        />
      </div>
    </nav>
  );
}

function NavItem({
  icon,
  label,
  func,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  func?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={func}
      className={`flex flex-col items-center text-sm transition ${
        active ? 'text-cyan-400' : 'hover:text-cyan-400'
      }`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}

