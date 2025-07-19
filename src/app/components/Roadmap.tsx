'use client';
import React, { useState } from 'react';
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

interface RoadmapVerticalProps {
  plan: Listing[];
}

const RoadmapVertical: React.FC<RoadmapVerticalProps> = ({ plan }) => {
  const [modalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedItem, setSelectedItem] = useState<Listing | null>(null);

  const openModal = (item: Listing) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <div className="relative w-72 shrink-0 flex flex-col items-center gap-10 overflow-y-auto max-h-screen pb-4 scrollbar-hide">
      <h2 className="text-lg font-bold text-cyan-500">🛣️ Roadmap</h2>
      <div className="-mt-8 flex flex-col gap-10">
        {plan.slice(0, 4).map((item, i) => (
          <div key={i} className="relative flex flex-col items-center">
            {i !== 0 ? (
              <div className="absolute -top-10 h-10 w-1 bg-cyan-500 z-0" />
            ):<div className='flex flex-col justify-center items-center ' >       
              <h2 className="text-lg font-bold text-cyan-500">500💸</h2>
              <div className="h-10 w-1 bg-cyan-500" />
              </div>}
            <div className="bg-gray-800 text-white p-3 rounded-xl shadow-md w-64 relative z-10">
              <Image
                src={item.images?.[0] || '/fallback.jpg'}
                alt={item.title}
                width={240}
                height={160}
                unoptimized
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-sm font-semibold mt-2 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400">{item.details}</p>
              <div className="flex justify-between text-xs mt-2">
                <span className="text-green-400">
                  Profit: +${Math.floor(Math.random() * 150)}
                </span>
                <span className="text-purple-300">
                  XP: +{Math.floor(Math.random() * 20 + 5)}
                </span>
              </div>
              <div className="flex justify-between mt-3 space-x-2">
                <button className="flex-1 py-1 rounded bg-red-600 text-white text-xs hover:bg-red-700 transition">
                  Delete
                </button>
                <button
                  className="flex-1 py-1 rounded bg-green-600 text-white text-xs hover:bg-green-700 transition"
                  onClick={() => openModal(item)}
                >
                  Sold
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className='flex flex-col-reverse justify-center items-center ' >       
              <h1 className="text-2xl  font-bold text-amber-300">1500🏆</h1>
              <div className="-mt-10 h-10 w-1 bg-cyan-500" />
              </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-amber-50 rounded-lg p-6 w-[90%] max-w-md max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Confirm Sale</h3>
              <button onClick={closeModal} className="text-gray-600 text-xl hover:text-black">×</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Price Bought</label>
                <input type="number" className="w-full border p-2 rounded mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium">Price Sold</label>
                <input type="number" className="w-full border p-2 rounded mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium">Details for other users</label>
                <textarea className="w-full border p-2 rounded mt-1" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium">Upload Photos</label>
                <input type="file" accept="image/*" multiple className="mt-1" />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapVertical;


