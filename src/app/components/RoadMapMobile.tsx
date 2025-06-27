
import React from 'react';
import Image from 'next/image';

// import { Container } from './styles';
function calculateProfit(priceStr) {
    const [low, high] = priceStr.replace(/[^0-9$]/g, '').split('$').filter(Boolean).map(Number);
    return high && low ? high - low : 0;
  }


function PlanRoadmapMobile({ plan }) {
    return (
      <div className="overflow-x-auto flex gap-4 py-4 scrollbar-hide">
        {plan.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-gray-800 rounded-xl p-4 shadow-md">
            <Image src={item.images?.[0]}
  alt={item.title}
  width={240} // adjust based on your layout
  height={160} // adjust based on your layout
  className="w-full h-32 object-cover rounded-md" />
            <h3 className="text-white text-sm font-bold">{item.title}</h3>
            <p className="text-green-400 text-sm font-semibold">Profit: ${calculateProfit(item.price)}</p>
          </div>
        ))}
      </div>
    );
  }
  

  export default PlanRoadmapMobile;