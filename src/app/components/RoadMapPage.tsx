'use client';
import React from 'react';
import RoadmapVertical from './Roadmap';

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

export default function RoadmapPage({ plan }: { plan: Listing[] }) {
  return (
    <div className=" 
    fixed
        top-16    /* push down below 64px header */
        bottom-0
        left-0
        right-0
        bg-gray-900
        text-white
        z-40
        overflow-y-auto
        scrollbar-hide">
      <div className="flex flex-col items-center">
      <RoadmapVertical plan={plan} />
    </div>
    </div>
  );
}
