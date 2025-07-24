'use client';
import React, { useEffect } from 'react';
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
  // Lock background scroll when Roadmap is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    
      <div className="flex justify-center w-full bg-gray-900">
        <RoadmapVertical plan={plan} />
      </div>
  );
}

