import React from 'react';

function SidebarFilters({ view, setView }) {
    return (
      <aside className="w-64 hidden lg:flex flex-col bg-gray-900 text-white p-6 space-y-6 max-h-screen overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          <button className="w-full bg-gray-800 py-2 px-4 rounded-md text-left">Search</button>
          <div>
            <label className="block text-sm font-bold mb-2">BUDGET RANGE</label>
            <input type="range" min="50" max="500" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">CATEGORIES</label>
            <div className="space-y-1">
              <label className="flex items-center space-x-2"><input type="checkbox" checked /> <span>Tools</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" checked /> <span>Electronics</span></label>
              <label className="flex items-center space-x-2"><input type="checkbox" checked /> <span>Home</span></label>
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
            <label className="flex items-center space-x-2"><input type="checkbox" /> <span>Medium</span></label>
          </div>
        </div>
      </aside>
    );
  }
  
 
  
export default SidebarFilters;