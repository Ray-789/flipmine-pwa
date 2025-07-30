'use client';
import React from 'react';
import {FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

interface SidebarFiltersProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  showSidebar,
  toggleSidebar,
}) => {
  return (
    <>
      {/* Floating Toggle Arrow for Mobile (when sidebar is closed) */}
      {!showSidebar ?(
  <button
    onClick={toggleSidebar}
    className=" z-50 fixed top-1/2 left-2 -translate-y-1/2 z-30 lg:hidden  bg-opacity-30 text-white p-2 rounded-r-full shadow-sm backdrop-blur-sm transition-all hover:bg-opacity-60"
  >
    <FaArrowRight className="text-lg" />
  </button>
): <button
onClick={toggleSidebar}
className=" z-50 fixed top-1/2 left-66 -translate-y-1/2 z-30 lg:hidden  bg-opacity-30 text-white p-2 rounded-r-full shadow-sm backdrop-blur-sm transition-all hover:bg-opacity-60"
>
<FaArrowLeft className="text-lg" />
</button>}


      {/* Sidebar */}
      <aside
        className={`
          ${showSidebar ? 'block' : 'hidden'}
          fixed lg:static 
          pt-5.5
          top-0 left-0 
          h-screen w-64 
          bg-gray-800 text-white p-6 space-y-6 overflow-y-auto scrollbar-hide
          z-[60] lg:z-60
          lg:flex lg:flex-col
        `}
      >
        {/* Close Button for Mobile */}
        <div className="lg:hidden flex justify-end mb-4">
          <button
            onClick={toggleSidebar}
            className="bg-gray-800 p-2 rounded-full text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4  ">
          <div>
  <label className="block font-bold mb-2">LOCATION</label>
  <input
    type="text"
    placeholder="Enter city or ZIP"
    className="w-full p-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
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
      </aside>
    </>
  );
};

export default SidebarFilters;

