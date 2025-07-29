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

interface PlanRoadmapMobileProps {
  plan: Listing[];
}

function calculateProfit(priceStr: string): number {
  const [low, high] = priceStr
    .replace(/[^0-9$]/g, '')
    .split('$')
    .filter(Boolean)
    .map(Number);
  return high && low ? high - low : 0;
}

// Utility to chunk an array into sub-arrays of given size
function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const PlanRoadmapMobile: React.FC<PlanRoadmapMobileProps> = ({ plan }) => {
  const pages = chunkArray(plan, 3);

  return (
    <div className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory flex">
      {pages.map((page, pageIndex) => (
        <div
          key={pageIndex}
          className="snap-start flex-shrink-0 w-full flex justify-start gap-4 pt-4 "
        >
          {page.map((item, idx) => (
            <div
              key={idx}
              className="w-64 bg-gray-800 rounded-xl p-4 shadow-md flex-shrink-0"
            >
              <Image
                src={item.images?.[0] || '/fallback.jpg'}
                alt={item.title}
                width={240}
                height={160}
                unoptimized
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-white text-sm font-bold mt-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-green-400 text-sm font-semibold">
                Profit: ${calculateProfit(item.price)}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlanRoadmapMobile;
