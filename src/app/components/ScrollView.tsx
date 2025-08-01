'use client';
import { useRouter } from 'next/navigation';
import { useListingStore } from '../store/useListings';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot,
} from 'recharts';

let lastScrollTime = 0;

const ScrollViewPage = () => {
  const { listings } = useListingStore();
  const { setListing } = useListingStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleScroll = (e: WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime < 400) return;
    lastScrollTime = now;

    if (e.deltaY > 30 && currentIndex < listings.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < -30 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  useEffect(() => {
    console.log(`Scrolled to listing #${currentIndex + 1}`);
  }, [currentIndex]);



  return (
    <div
      className="absolute  top-16  bottom-0 left-0 right-0
                 overflow-y-auto  bg-gray-900 text-white z-40"
    >
      <div className="max-w-2xl  w-full mx-auto p-4 pb-32">
        <div className="space-y-10 pt-20 py-10">
          {listings.map((listing, index) => {
            const chartData = Array.from({ length: 7 }, (_, i) => ({
              name: `D${i + 1}`,
              demand: Math.floor(Math.random() * 100 + 20),
            }));
            const max = chartData.reduce((a, b) => (a.demand > b.demand ? a : b));
            const min = chartData.reduce((a, b) => (a.demand < b.demand ? a : b));

            return (
              <div
              key={index}
              onClick={() => {
                setListing(listing);
                router.push('/product');
              }}
              className="w-full"
            >
              <div  className="bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="relative w-full h-64 rounded-xl overflow-hidden">
                  <Image
                    src={listing?.images?.[0] || '/placeholder.png'}
                    alt="product"
                    layout="fill"
                    className="object-cover rounded-xl"
                    unoptimized
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-1">{listing.title}</h2>
                  <p className="text-sm text-gray-400 mb-2">{listing.details}</p>
                  <p className="text-lg font-bold text-green-400">{listing.price}</p>
                </div>

                <div className="bg-gray-900 p-4 rounded-xl">
                  <h3 className="text-cyan-400 font-semibold text-sm mb-2">📈 Demand Chart</h3>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <XAxis dataKey="name" stroke="#ccc" fontSize={10} />
                        <YAxis stroke="#ccc" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#22d3ee' }} />
                        <Line type="monotone" dataKey="demand" stroke="#22d3ee" strokeWidth={2} dot={false} />
                        <ReferenceDot x={max.name} y={max.demand} r={4} fill="lime" stroke="white" />
                        <ReferenceDot x={min.name} y={min.demand} r={4} fill="red" stroke="white" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white flex items-center gap-2">
                    <FaPlus /> Add to Roadmap
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
                    Analyze in DealMine
                  </button>
                </div>
              </div>
              </div>
            );
          
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollViewPage;
