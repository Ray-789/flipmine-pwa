
// src/app/components/ScrollViewPage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useListingStore } from '../store/useListings';
// import SidebarFilters from './Sidebar';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';
import {
  FaChevronLeft,
  FaSearch,
  FaHeart,
  FaBookmark,
  FaShareAlt,
  FaPlus,
} from 'react-icons/fa';
// import { useDeviceType } from '../hooks/useDeviceType';

interface ScrollViewPageProps {
  setShowScroll: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSidebar:React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollViewPage: React.FC<ScrollViewPageProps> = ({ setShowScroll }) => {
  const { listings, setListing } = useListingStore();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(listings);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [searchOpen, setSearchOpen] = useState(false);
  
  // 1️⃣ filter whenever searchTerm changes
  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    setFiltered(
      listings.filter(
        (li) =>
          li.title.toLowerCase().includes(lower) ||
          li.details.toLowerCase().includes(lower)
      )
    );
    setCurrentIndex(0);
  }, [searchTerm, listings]);

  // 2️⃣ snap into view when index changes
  useEffect(() => {
    const el = document.getElementById(`slide-${currentIndex}`);
    el?.scrollIntoView({ behavior: 'smooth' });
  }, [currentIndex]);

  // 3️⃣ wheel to change slide
  useEffect(() => {
    let last = 0;
    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - last < 300) return;
      last = now;
      if (e.deltaY > 30 && currentIndex < filtered.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else if (e.deltaY < -30 && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      }
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [currentIndex, filtered.length]);

  return (
    <div className="absolute inset-0 flex  flex-col bg-gray-900 text-white z-450">
      {/* ─── TOP BAR ───────────────────────────────────────────── */}
      <div className="h-16  flex items-center px-4 border-b border-gray-700">
        <button
          onClick={() => setShowScroll(false)}
          className="text-white text-2xl p-2 hover:bg-gray-700 rounded"
          aria-label="Back"
        >
          <FaChevronLeft />
        </button>

        
          <div className="relative flex-1 mx-4">
            <input
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search listings…"
              className="w-full h-10 pl-10 pr-10 rounded-full bg-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        
      </div>

      {/* ─── BODY ──────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ← Sidebar (1/5) */}
        <div className="w-1/5 overflow-auto scrollbar-hide">
          {/* <SidebarFilters showSidebar={true} toggleSidebar={setShowSidebar} /> */}
        </div>

        {/* ← Snap-scroll feed (3/5) */}
        <div className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-hide gap-2">
          {filtered.map((item, idx) => {
            const data = Array.from({ length: 7 }, (_, i) => ({
              name: `D${i + 1}`,
              demand: Math.floor(Math.random() * 100 + 20),
            }));
            const max = data.reduce((a, b) => (a.demand > b.demand ? a : b));
            const min = data.reduce((a, b) => (a.demand < b.demand ? a : b));

            return (
              <div
                key={idx}
                id={`slide-${idx}`}
                className="snap-start h-[calc(100vh-4rem)] flex items-center justify-center px-4"
              >
                <div className="relative w-full max-w-md h-152 flex flex-col justify-between">
                  {/* CARD */}
                  <div
                    onClick={() => {
                      setListing(item);
                      router.push('/product');
                    }}
                    className="  rounded-xl p-4 h-full overflow-hidden bg-center
            bg-cover
            bg-no-repeat "
                    style={{ backgroundImage: `url(${item.images[0]})` }}
                  >
                    <div className="relative w-full h-2/3 rounded-lg overflow-hidden">
                      {/* <Image
                        src={item.images[0] || '/fallback.jpg'}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      /> */}
                    </div>
                    <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.details}</p>
                    <p className="mt-1 text-green-400 font-bold">{item.price}</p>

                    {/* mini‐chart */}
                    <div className="mt-3 h-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis dataKey="name" hide />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1e293b',
                              borderColor: '#22d3ee',
                            }}
                            itemStyle={{ color: '#22d3ee' }}
                          />
                          <Line
                            type="monotone"
                            dataKey="demand"
                            stroke="#22d3ee"
                            dot={false}
                          />
                          <ReferenceDot
                            x={max.name}
                            y={max.demand}
                            r={4}
                            fill="lime"
                            stroke="white"
                          />
                          <ReferenceDot
                            x={min.name}
                            y={min.demand}
                            r={4}
                            fill="red"
                            stroke="white"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* SIDE BUTTONS */}
                
                </div>
              </div>
            );
          })}
        </div>

        {/* → Action icons (1/5) */}
          <div className="w-1/5 flex  flex-col justify-around items-center py-8 space-y-6 scrollbar-hide">
          <FaHeart className="text-2xl hover:text-red-500 transition" />
          <FaBookmark className="text-2xl hover:text-yellow-500 transition" />
          <FaShareAlt className="text-2xl hover:text-blue-500 transition" />
          <FaPlus className="text-2xl text-cyan-400 hover:text-cyan-200 transition" />
        </div>
      </div>
    </div>
  );
};

export default ScrollViewPage;
