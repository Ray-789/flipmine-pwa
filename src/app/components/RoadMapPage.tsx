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
    <div className="pt-36 pb-12 flex flex-col justify-center items-center   absolute top-16 bottom-16 left-0 right-0 bg-gray-900 text-white z-40 overflow-y-auto scrollbar-hide">
      <RoadmapVertical plan={plan} />
    </div>
  );
}
