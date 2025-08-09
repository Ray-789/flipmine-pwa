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
    <div className="pb-4 w-full z-0">

      <div className="w-full  flex justify-start">
        <div
          className={`
            flex w-full  gap-7 overflow-x-auto scrollbar-hide 
            snap-x snap-mandatory scroll-smooth
            sm:max-w-full md:max-w-[90%] 
          `}
        >
          {plan.map((item,idx) => (
             <div
              key={idx}
              className={`
                bg-[#0f172a] rounded-xl   flex-shrink-0
                 sm:w-[70vw] md:w-[45vw] lg:w-[16vw]
                hover:shadow-cyan-400/30 transition-shadow duration-300
                snap-start
              `}
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
        </div>))}
        </div>
      </div>
    </div>
  );
};

export default PlanRoadmapMobile;



