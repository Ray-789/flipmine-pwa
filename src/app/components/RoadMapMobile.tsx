// components/PlanRoadmapMobile.tsx
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

const PlanRoadmapMobile: React.FC<PlanRoadmapMobileProps> = ({ plan }) => {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 pb-4">
      {plan.map((item, idx) => (
        <div
          key={idx}
          className="
           
            snap-start
            flex-shrink-0
            w-1/2    /* 2 per view on small/medium */
            lg:w-1/3 /* 3 per view on large+ */
            pt-2 pb-2 pr-2
          "
        >
          <div className="bg-gray-800 w-full h-full rounded-xl p-4 shadow-md">
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
        </div>
      ))}
    </div>
  );
};

export default PlanRoadmapMobile;


