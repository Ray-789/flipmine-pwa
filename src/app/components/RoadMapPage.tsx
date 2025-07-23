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
    <div className="bg-gray-900  fixed inset-0 z-50 pt-4 pb-18 flex justify-center overflow-y-auto">
      <RoadmapVertical plan={plan} />
    </div>
  );
}
