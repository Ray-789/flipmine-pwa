'use client';
import React from 'react';
import Image from 'next/image';

interface Listing {
  title: string;
  price: string;
  details: string;
  images: string[];
  location?: string;
  website?: string;
  url?: string;
  seller?: string;
  seller_rating?: string;
}

interface RoadmapVerticalProps {
  plan: Listing[];
}

const RoadmapVertical: React.FC<RoadmapVerticalProps> = ({ plan }) => {
  return (
    <div className="relative w-72 shrink-0 flex flex-col items-center gap-10 overflow-y-auto max-h-screen pb-4 scrollbar-hide">
      <h2 className="text-lg font-bold text-cyan-500  ">🛣️ Roadmap</h2>
      <div className='-mt-8 flex flex-col gap-10'>
      {plan.slice(0, 4).map((item, i) => (
        <div key={i} className="relative flex flex-col items-center">
          {i !== 0 && (
            <div className="absolute -top-10 h-10 w-1 bg-cyan-500 z-0" />
          )}
          <div className="bg-gray-800 text-white p-3 rounded-xl shadow-md w-64 relative z-10">
            <Image
              src={item.images?.[0] || '/fallback.jpg'}
              alt={item.title}
              width={240}
              height={160}
              unoptimized
              className="w-full h-32 object-cover rounded-md"
            />
            <h4 className="text-sm font-semibold mt-2 line-clamp-2">{item.title}</h4>
            <p className="text-xs text-gray-400">{item.details}</p>
            <div className="flex justify-between text-xs mt-2">
              <span className="text-green-400">
                Profit: +${Math.floor(Math.random() * 150)}
              </span>
              <span className="text-purple-300">
                XP: +{Math.floor(Math.random() * 20 + 5)}
              </span>
            </div>
            <div className="flex justify-between mt-3 space-x-2">
              <button className="flex-1 py-1 rounded bg-red-600 text-white text-xs hover:bg-red-700 transition">
                Delete
              </button>
              <button className="flex-1 py-1 rounded bg-green-600 text-white text-xs hover:bg-green-700 transition">
                Sold
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default RoadmapVertical;

