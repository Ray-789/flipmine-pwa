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
    <div className="fixed inset-0 bg-gray-900 text-white z-40 pt-22 pb-20 overflow-y-auto scrollbar-hide">
      <div className="flex flex-col items-center">
      <RoadmapVertical plan={plan} />
    </div>
    </div>
  );
}
