'use client';
import React from 'react';
import { Home, Settings, MapPinned, Play, Plus } from 'lucide-react';

type PageKey = 'Home' | 'Scroll' | 'Post' | 'RoadMap' | 'Settings';

interface BottomNavbarProps {
  showRoadmap: boolean;
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  showScroll: boolean;
  setShowScroll: React.Dispatch<React.SetStateAction<boolean>>;
  showPost: boolean;
  setShowPost: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BottomNavbar({
  showRoadmap,
  setShowRoadmap,
  showSettings,
  setShowSettings,
  showScroll,
  setShowScroll,
  showPost,
  setShowPost,
}: BottomNavbarProps) {
  const currentPage: PageKey =
    showPost ? 'Post'
    : showRoadmap ? 'RoadMap'
    : showSettings ? 'Settings'
    : showScroll ? 'Scroll'
    : 'Home';

  const goHome = () => {
    setShowRoadmap(false);
    setShowSettings(false);
    setShowScroll(false);
    setShowPost(false);
  };

  const toggleScroll = () => {
    setShowRoadmap(false);
    setShowSettings(false);
    setShowPost(false);
    setShowScroll(prev => !prev);
  };

  const togglePost = () => {
    setShowRoadmap(false);
    setShowSettings(false);
    setShowScroll(false);
    setShowPost(prev => !prev);
  };

  const toggleRoadmap = () => {
    setShowSettings(false);
    setShowScroll(false);
    setShowPost(false);
    setShowRoadmap(prev => !prev);
  };

  const toggleSettings = () => {
    setShowRoadmap(false);
    setShowScroll(false);
    setShowPost(false);
    setShowSettings(prev => !prev);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-820 bg-gray-900 text-white border-t border-gray-700">
      <div className="flex justify-around items-center h-20 relative">
        
        {/* Left 2 buttons */}
        <NavItem
          icon={<Home size={24} />}
          label="Home"
          active={currentPage === 'Home'}
          func={goHome}
        />
        <NavItem
          icon={<Play size={24} />}
          label="Scroll"
          active={currentPage === 'Scroll'}
          func={toggleScroll}
        />

        {/* Floating Post Button */}
        <button
          onClick={togglePost}
          className={`relative -top-6  bg-cyan-500 rounded-full p-4 shadow-lg transition hover:bg-cyan-400
            ${currentPage === 'Post' ? 'ring-4 ring-cyan-300' : ''}`}
        >
          <Plus size={28} className="text-white" />
        </button>

        {/* Right 2 buttons */}
        <NavItem
          icon={<MapPinned size={24} />}
          label="RoadMap"
          active={currentPage === 'RoadMap'}
          func={toggleRoadmap}
        />
        <NavItem
          icon={<Settings size={24} />}
          label="Settings"
          active={currentPage === 'Settings'}
          func={toggleSettings}
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


