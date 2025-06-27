import React from 'react';

import Image from 'next/image';
// import { Container } from './styles';


function RoadmapVertical({ plan }) {
    return (
      <div className="w-72 shrink-0 flex flex-col gap-4 overflow-y-auto max-h-screen scrollbar-hide">
        <h2 className="text-lg font-bold text-cyan-500">🛣️ Roadmap</h2>
        {plan.slice(0, 4).map((item, i) => (
          <div key={i} className="bg-gray-800 text-white p-3 rounded-lg shadow-md space-y-2">
            <Image src={item.images[0]} alt={item.title} className="w-full h-32 object-cover rounded-md" />
            <h4 className="text-sm font-semibold line-clamp-2">{item.title}</h4>
            <p className="text-xs text-gray-400">{item.details}</p>
            <div className="flex justify-between text-xs">
              <span className="text-green-400">Profit: +${Math.floor(Math.random() * 150)}</span>
              <span className="text-purple-300">XP: +{Math.floor(Math.random() * 20 + 5)}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default RoadmapVertical;