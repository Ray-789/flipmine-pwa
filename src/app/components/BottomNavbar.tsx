'use client';
import { Home, Settings, MapPinned } from 'lucide-react';
import React from 'react';

interface BottomNavbarProps {
  showRoadmap: boolean;
  setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  showScroll:boolean
setShowScroll:React.Dispatch<React.SetStateAction<boolean>>;
}




export default function BottomNavbar({ setShowRoadmap,setShowSettings,setShowScroll,showScroll }: BottomNavbarProps) {
  return (
    <nav className={`  fixed bottom-0 left-0 right-0 z-700 ${!showScroll && 'bg-gray-900'}  text-white border-t border-gray-700`}>
      <div className="flex justify-around items-center h-20">
        <NavItem icon={<Home size={24} />} label="Home" func={() =>{ 
          setShowRoadmap(() => false);
           setShowSettings(()=> false);
           setShowScroll(()=>false)
          }} />
        <NavItem
          icon={<MapPinned size={24} />}
          label="RoadMap"
          func={() => {
            setShowSettings(()=>false) 
            setShowScroll(()=>false)
          setShowRoadmap((prev) => !prev)
          }}
        />
        <NavItem icon={<Settings size={24} />} label="Settings" func={() =>{ 
          setShowRoadmap(() => false)
          setShowRoadmap((prev) => !prev) 
          setShowSettings((prev)=> !prev)
          
          }}  />
        
      </div>
    </nav>
  );
}

function NavItem({
  icon,
  label,
  func,
}: {
  icon: React.ReactNode;
  label: string;
  func?: () => void;
}) {
  return (
    <button
      onClick={func}
      className="flex flex-col items-center text-sm hover:text-cyan-400 transition"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}

