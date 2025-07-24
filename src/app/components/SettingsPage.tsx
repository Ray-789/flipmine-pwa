'use client';
import { useState } from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-gray-800 rounded-xl mb-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-bold text-cyan-400 text-sm border-b border-gray-700"
      >
        {title}
      </button>
      {open && <div className="p-4 space-y-4 max-h-[300px] overflow-y-auto scrollbar-hide">{children}</div>}
    </div>
  );
};

export default function SettingsPage() {
  return (
<div className="absolute top-16 bottom-16 left-0 right-0 bg-gray-900 text-white z-40 overflow-y-auto scrollbar-hide">
      <div className="max-w-2xl w-full mx-auto p-4 pb-32">
        <h1 className="text-2xl font-bold mb-6 text-cyan-400">⚙️ Settings</h1>
        <Section   title="Account">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input className="bg-gray-700 rounded px-3 py-2 w-full" defaultValue="flipmaster" />
        
            <label className="block text-sm mb-1">Email</label>
            <input className="bg-gray-700 rounded px-3 py-2 w-full" defaultValue="user@email.com" />
         
            <label className="block text-sm mb-1">New Password</label>
            <input className="bg-gray-700 rounded px-3 py-2 w-full" type="password" />
          </div>
          <button className="bg-red-500 px-4 py-2 rounded mt-2 text-sm">Logout</button>
        </Section>

        <Section title="Marketplace Filters">
          <div>
            <label className="block text-sm mb-1">Max Budget ($)</label>
            <input type="number" className="bg-gray-700 rounded px-3 py-2 w-full" placeholder="300" />
          </div>
          <div>
            <label className="block text-sm mb-1">Distance Range (km)</label>
            <input type="range" min={0} max={100} className="w-full" />
          </div>
          <div>
            <label className="block text-sm mb-1">Categories</label>
            <select className="bg-gray-700 rounded px-3 py-2 w-full">
              <option>Phones</option>
              <option>Consoles</option>
              <option>Laptops</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Condition</label>
            <select className="bg-gray-700 rounded px-3 py-2 w-full">
              <option>Any</option>
              <option>New</option>
              <option>Used (Working)</option>
              <option>Damaged (Repairable)</option>
            </select>
          </div>
          <div className="flex gap-3 flex-wrap">
            {['Facebook', 'Kijiji', 'Craigslist', 'eBay'].map((site) => (
              <label key={site} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-cyan-500" defaultChecked={site !== 'eBay'} />
                {site}
              </label>
            ))}
          </div>
        </Section>

        <Section title="Notifications">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-cyan-500" /> New high-opportunity deals
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-cyan-500" /> Saved item updates
          </label>
          <div>
            <label className="block text-sm mb-1">Frequency</label>
            <select className="bg-gray-700 rounded px-3 py-2 w-full">
              <option>ASAP</option>
              <option>Daily</option>
              <option>Weekly Digest</option>
            </select>
          </div>
        </Section>

        <Section title="AI Preferences">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-cyan-500" defaultChecked /> Enable AI Opinion
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-cyan-500" defaultChecked /> Enable Demand Analysis
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-cyan-500" /> Show Risk Level
          </label>
        </Section>

        <Section title="Flipping Goal">
          <div>
            <label className="block text-sm mb-1">Monthly Profit Target ($)</label>
            <input type="number" className="bg-gray-700 rounded px-3 py-2 w-full" placeholder="500" />
          </div>
          <div>
            <label className="block text-sm mb-1">Risk Tolerance</label>
            <select className="bg-gray-700 rounded px-3 py-2 w-full">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Flipping Frequency</label>
            <select className="bg-gray-700 rounded px-3 py-2 w-full">
              <option>Occasionally</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
        </Section>

        <Section title="Advanced">
          <button className="bg-gray-700 px-4 py-2 rounded text-sm w-full">Reset Preferences</button>
          <button className="bg-gray-700 px-4 py-2 rounded text-sm w-full">Clear Saved Items</button>
          <label className="flex items-center gap-2 text-sm mt-2">
            <input type="checkbox" className="accent-cyan-500" /> Dark Mode
          </label>
        </Section>

        <Section title="Support">
          <a href="#" className="text-cyan-400 underline text-sm">Contact Support</a>
          <a href="#" className="text-cyan-400 underline text-sm">FAQ / Guide</a>
        </Section>
      </div>
    </div>
  );
}

