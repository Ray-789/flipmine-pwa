'use client';
import Image from 'next/image';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';

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

interface ProductListingProps {
  listings: Listing[];
}

function generateChartData(): { name: string; demand: number }[] {
  return Array.from({ length: 7 }, (_, i) => ({
    name: `D${i + 1}`,
    demand: Math.floor(Math.random() * 100 + 20),
  }));
}

const ProductListing: React.FC<ProductListingProps> = ({ listings }) => {
  return (
    <div className="flex pb-24 inset-0 flex-col gap-6 w-full overflow-y-auto max-h-[calc(100vh-80px)] pr-4 scrollbar-hide">
      <h2 className="text-lg font-bold text-amber-50">💼 Listings</h2>
      {listings.map((item, i) => {
        const chartData = generateChartData();
        const max = chartData.reduce((a, b) => (a.demand > b.demand ? a : b));
        const min = chartData.reduce((a, b) => (a.demand < b.demand ? a : b));

        return (
          <div
            key={i}
            className="flex bg-gray-900 text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all min-h-[320px] "
          >
            <div className="w-52 min-h-[280px] overflow-hidden z-30">
              <Image
                src={item.images?.[0] || '/fallback.jpg'}
                alt={item.title}
                width={240}
                height={160}
                unoptimized
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="p-4 flex flex-col justify-between w-full space-y-2">
              <div>
                <h3 className="text-lg font-bold line-clamp-1 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 mb-1">{item.details}</p>
                <p className="text-sm font-semibold text-cyan-400">{item.price}</p>
                <div className="mt-2 flex gap-4 text-xs flex-wrap">
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    Electronics
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                    AI Confidence: {Math.floor(Math.random() * 40) + 60}%
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded">
                    Risk: Medium
                  </span>
                </div>

                {/* CHART */}
                <div className="h-20 w-full mt-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <defs>
                        <linearGradient id={`demandGradient-${i}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.6} />
                          <stop offset="100%" stopColor="#0f172a" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" hide />
                      <YAxis hide />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#22d3ee' }}
                        labelStyle={{ color: '#e5e7eb' }}
                        itemStyle={{ color: '#22d3ee' }}
                        formatter={(value) => [`${value} 🔥`, 'Demand']}
                      />
                      <Line
                        type="monotone"
                        dataKey="demand"
                        stroke="#22d3ee"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill={`url(#demandGradient-${i})`}
                        isAnimationActive={true}
                        animationDuration={800}
                        dot={false}
                      />
                      <ReferenceDot x={max.name} y={max.demand} r={4} fill="lime" stroke="white" />
                      <ReferenceDot x={min.name} y={min.demand} r={4} fill="red" stroke="white" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs">
                <p className="text-green-400">
                  Profit: +${Math.floor(Math.random() * 150)}
                </p>
                <button className="bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-full shadow-xl transition-transform hover:scale-105">
                  Add to Roadmap
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListing;
