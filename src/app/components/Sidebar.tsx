'use client';
import React, { useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaFilter,
  FaListUl,
  FaHome,
  FaCog,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { useDeviceType } from '../hooks/useDeviceType'; // Adjust path if needed

interface SidebarFiltersProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
  showRoadmap: boolean;
    setShowRoadmap: React.Dispatch<React.SetStateAction<boolean>>;
    showSettings: boolean;
    setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
    showScroll:boolean
  setShowScroll:React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  showSidebar,
  toggleSidebar,
  setShowRoadmap,setShowScroll,setShowSettings,showRoadmap,showScroll,showSettings
}) => {
  const device = useDeviceType();
  const [tab, setTab] = useState<'filters' | 'pages'>('filters');

  // Only show this component on desktop
  if (device !== 'desktop'){
 return (
    <>
      {/* Toggle Button (Floating Arrow) */}
      {!showSidebar ? (
        <button
          onClick={toggleSidebar}
          className="fixed top-1/2 left-2 -translate-y-1/2 z-830 bg-opacity-30 text-white p-2 rounded-r-full shadow-sm backdrop-blur-sm transition-all hover:bg-opacity-60"
        >
          <FaArrowRight className="text-lg" />
        </button>
      ) : (
        <button
          onClick={toggleSidebar}
          className="fixed top-1/2 left-64 -translate-y-1/2 z-830 bg-opacity-30 text-white p-2 rounded-r-full shadow-sm backdrop-blur-sm transition-all hover:bg-opacity-60"
        >
          <FaArrowLeft className="text-lg" />
        </button>
      )}

      {/* Sidebar Panel */}
      <aside
        className={`
          ${showSidebar ? 'block' : 'hidden'}
          absolute top-0 bottom-5 pt-6 bg-gray-900 text-white h-screen w-64  z-830          overflow-y-auto scrollbar-hide lg:flex lg:flex-col
        `}
      >
        {/* Tab Switcher */}
        <div className=" h-6 flex justify-around items-center mb-4 px-4">
          <button
            onClick={() => setTab('filters')}
            className={`flex-1 h-full  text-sm font-bold transition ${
              tab === 'filters' ? 'bg-cyan-600' : 'bg-gray-800'
            }`}
          >
            <FaFilter className="inline mr-2" />
            Filters
          </button>
          <button
            onClick={() => setTab('pages')}
            className={`flex-1 h-full  text-sm font-bold transition ${
              tab === 'pages' ? 'bg-cyan-600' : 'bg-gray-800'
            }`}
          >
            <FaListUl className="inline mr-2" />
            Pages
          </button>
        </div>

        {/* FILTERS TAB */}
        {tab === 'filters' && (
          <div className="space-y-4 px-4">
            <div>
              <label className="block font-bold mb-2">SEARCH</label>
              <input
                type="text"
                placeholder="Search for Deals"
                className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">LOCATION</label>
              <input
                type="text"
                placeholder="Enter city or ZIP"
                className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">BUDGET RANGE</label>
              <input type="range" min="50" max="500" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">CATEGORIES</label>
              <div className="space-y-1">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked /> <span>Tools</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked /> <span>Electronics</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked /> <span>Home</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">DISTANCE</label>
              <input type="range" min="10" max="50" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">TIMEFRAME</label>
              <select className="w-full bg-gray-800 p-2 rounded-md">
                <option>1 week</option>
                <option>2 weeks</option>
                <option>1 month</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">RISK LEVEL</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 bg-green-800 bg-opacity-30 px-3 py-1 rounded-md">
                  <input type="checkbox" />
                  <span className="text-green-400 font-semibold">Low</span>
                </label>
                <label className="flex items-center space-x-2 bg-yellow-700 bg-opacity-30 px-3 py-1 rounded-md">
                  <input type="checkbox" />
                  <span className="text-yellow-400 font-semibold">Medium</span>
                </label>
                <label className="flex items-center space-x-2 bg-red-800 bg-opacity-30 px-3 py-1 rounded-md">
                  <input type="checkbox" />
                  <span className="text-red-400 font-semibold">High</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* PAGES TAB */}
        {tab === 'pages' && (
          <div className=" h-6/12 flex  flex-col justify-around space-y-4 px-6 pt-4 text-sm font-medium">
            <button onClick={()=>{
              setShowRoadmap(false);
              setShowSettings(false);
              setShowScroll(false)
            }}  className={`w-full text-xl ${!showRoadmap&&!showScroll&&!showSettings ?'text-cyan-400':""}  text-left flex items-center gap-2  hover:text-cyan-400`}>
              <FaHome /> Home
            </button>
            <button onClick={()=>{
              setShowRoadmap(false);
              setShowSettings(false);
              setShowScroll((prev)=>!prev)
            }}  className="w-full text-xl text-left flex items-center gap-2 hover:text-cyan-400">
              <FaMapMarkedAlt /> Scroll
            </button>
            <button onClick={()=>{ 
              setShowRoadmap(false);
              setShowScroll(false)
              setShowSettings((prev)=>!prev)
        }} className="w-full text-xl text-left flex items-center gap-2 hover:text-cyan-400">
              <FaCog /> Settings
            </button>
            {/* <button onClick={(prev)=>{
              setShowSettings(false);
              setShowScroll(false)
              setShowRoadmap(!prev)
              }} className="w-full text-xl text-left flex items-center gap-2 hover:text-cyan-400">
              <FaListUl /> Roadmap
            </button> */}
            
          </div>
        )}
      </aside>
    </>
  )

  }else{

  return (
    <>
      {/* Toggle Button (Floating Arrow) */}
      {!showSidebar ? (
        <button
          onClick={toggleSidebar}
          className="fixed top-1/2 left-2 -translate-y-1/2 z-770 bg-opacity-30 text-white p-2 rounded-r-full shadow-sm backdrop-blur-sm transition-all hover:bg-opacity-60"
        >
          <FaArrowRight className="text-lg" />
        </button>
      ) : (
        <button
          onClick={toggleSidebar}
          className="fixed top-1/2 left-64 -translate-y-1/2 z-770 bg-opacity-30 text-white p-2 rounded-r-full shadow-sm backdrop-blur-sm transition-all hover:bg-opacity-60"
        >
          <FaArrowLeft className="text-lg" />
        </button>
      )}

      {/* Sidebar Panel */}
      <aside
        className={`
          ${showSidebar ? 'block' : 'hidden'}
          relative top-2 pt-3 bg-gray-900 text-white h-[calc(100vh-4.5rem)] w-64 z-803
          overflow-y-auto scrollbar-hide lg:flex lg:flex-col
        `}
      >
        {/* Tab Switcher */}
        <div className=" h-6 flex justify-around items-center mb-4 px-4">
          <button
            onClick={() => setTab('filters')}
            className={`flex-1 h-full  text-sm font-bold transition ${
              tab === 'filters' ? 'bg-cyan-600' : 'bg-gray-800'
            }`}
          >
            <FaFilter className="inline mr-2" />
            Filters
          </button>
          <button
            onClick={() => setTab('pages')}
            className={`flex-1 h-full  text-sm font-bold transition ${
              tab === 'pages' ? 'bg-cyan-600' : 'bg-gray-800'
            }`}
          >
            <FaListUl className="inline mr-2" />
            Pages
          </button>
        </div>

        {/* FILTERS TAB */}
        {tab === 'filters' && (
          <div className="space-y-4 px-4">
            <div>
              <label className="block font-bold mb-2">SEARCH</label>
              <input
                type="text"
                placeholder="Search for Deals"
                className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block font-bold mb-2">LOCATION</label>
              <input
                type="text"
                placeholder="Enter city or ZIP"
                className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">BUDGET RANGE</label>
              <input type="range" min="50" max="500" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">CATEGORIES</label>
              <div className="space-y-1">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked /> <span>Tools</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked /> <span>Electronics</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked /> <span>Home</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">DISTANCE</label>
              <input type="range" min="10" max="50" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">TIMEFRAME</label>
              <select className="w-full bg-gray-800 p-2 rounded-md">
                <option>1 week</option>
                <option>2 weeks</option>
                <option>1 month</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">RISK LEVEL</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 bg-green-800 bg-opacity-30 px-3 py-1 rounded-md">
                  <input type="checkbox" />
                  <span className="text-green-400 font-semibold">Low</span>
                </label>
                <label className="flex items-center space-x-2 bg-yellow-700 bg-opacity-30 px-3 py-1 rounded-md">
                  <input type="checkbox" />
                  <span className="text-yellow-400 font-semibold">Medium</span>
                </label>
                <label className="flex items-center space-x-2 bg-red-800 bg-opacity-30 px-3 py-1 rounded-md">
                  <input type="checkbox" />
                  <span className="text-red-400 font-semibold">High</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* PAGES TAB */}
        {tab === 'pages' && (
          <div className=" h-6/12 flex  flex-col justify-around space-y-4 px-6 pt-4 text-sm font-medium">
            <button onClick={()=>{
              setShowRoadmap(false);
              setShowSettings(false);
              setShowScroll(false)
            }}  className={`w-full text-xl text-left flex ${!showRoadmap&&!showScroll&&!showSettings ?'text-cyan-400':""}  items-center gap-2 hover:text-cyan-400`}>
              <FaHome /> Home
            </button>
            <button onClick={()=>{
              setShowRoadmap(false);
              setShowSettings(false);
              setShowScroll((prev)=>!prev)
            }}  className={`w-full text-xl text-left ${!showRoadmap&&showScroll&&!showSettings ?'text-cyan-400':""}  flex items-center gap-2 hover:text-cyan-400`}>
              <FaMapMarkedAlt /> Scroll
            </button>
            <button onClick={()=>{ 
              setShowRoadmap(false);
              setShowScroll(false)
              setShowSettings((prev)=>!prev)
        }} className={`w-full text-xl text-left ${!showRoadmap&&!showScroll&&showSettings ?'text-cyan-400':""}  flex items-center gap-2 hover:text-cyan-400`}>
              <FaCog /> Settings
            </button>
            {/* <button onClick={(prev)=>{
              setShowSettings(false);
              setShowScroll(false)
              setShowRoadmap(!prev)
              }} className="w-full text-xl text-left flex items-center gap-2 hover:text-cyan-400">
              <FaListUl /> Roadmap
            </button> */}
            
          </div>
        )}
      </aside>
    </>
  )};
};

export default SidebarFilters;
