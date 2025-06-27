'use client';
import React from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

function SidebarFilters({ view, setView, showSidebar, toggleSidebar }) {
  return (
    <>
      {/* Floating Toggle Arrow for Mobile (when sidebar is closed) */}
      {!showSidebar && (
        <button
          onClick={toggleSidebar}
          className="fixed bottom-6 left-4 z-50 lg:hidden bg-cyan-600 text-white p-3 rounded-full shadow-lg"
        >
          <FaArrowRight />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${showSidebar ? 'block' : 'hidden'}
          fixed lg:static 
          top-0 left-0 
          h-screen w-64 
          bg-gray-900 text-white p-6 space-y-6 overflow-y-auto scrollbar-hide
          z-[60] lg:z-30 
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

        <div className="space-y-4 pt-2 lg:pt-10">
          <button className="w-full bg-gray-800 py-2 px-4 rounded-md text-left">Search</button>

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
}

export default SidebarFilters;
