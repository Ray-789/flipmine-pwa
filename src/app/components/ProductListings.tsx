import React from 'react';
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// import { Container } from './styles';
function generateChartData() {
    const data = [];
    for (let i = 1; i <= 7; i++) {
      data.push({ name: `D${i}`, demand: Math.floor(Math.random() * 100 + 20) });
    }
    return data;
  }

function ProductListing({ listings }) {
  return (
    <div className="flex flex-col gap-6 w-full overflow-y-auto max-h-[calc(100vh-80px)] pr-4 scrollbar-hide">

      {listings.map((item, i) => (
        <div key={i} className="flex bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all min-h-[280px]">
          <div className="w-52 min-h-[280px] overflow-hidden z-30">
            <Image src={item.images[0]} alt={item.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 z-50" />
          </div>
          <div className="p-4 flex flex-col justify-between w-full space-y-2">
            <div>
              <h3 className="text-lg font-bold line-clamp-1 mb-1">{item.title}</h3>
              <p className="text-xs text-gray-600 mb-1">{item.details}</p>
              <p className="text-sm font-semibold text-cyan-600">{item.price}</p>
              <div className="mt-2 flex gap-4 text-xs flex-wrap">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Electronics</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">AI Confidence: {Math.floor(Math.random()*40)+60}%</span>
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">Risk: Medium</span>
              </div>
              <div className="h-20 w-full mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={generateChartData()}>
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="demand" stroke="#22d3ee" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs">
              <p className="text-green-500">Profit: +${Math.floor(Math.random() * 150)}</p>
              <button className="bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-full shadow-xl transition-transform hover:scale-105">Add to Roadmap</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;