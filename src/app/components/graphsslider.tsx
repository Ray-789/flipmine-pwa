'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from 'recharts';

function CategoryChartsSlider() {
  const data = ['Electronics', 'Tools', 'Home'].map(category => {
    const chartData = Array.from({ length: 7 }, (_, i) => ({
      name: `D${i + 1}`,
      demand: Math.floor(Math.random() * 100 + 20),
    }));

    const max = chartData.reduce((a, b) => (a.demand > b.demand ? a : b));
    const min = chartData.reduce((a, b) => (a.demand < b.demand ? a : b));

    return {
      category,
      data: chartData,
      max,
      min,
    };
  });

  return (
    <div className="pb-4 w-full z-[900] relative">
      <h2 className="text-lg font-semibold text-cyan-500 mb-2 px-4 md:px-0">📊 Demand Trends</h2>
      
      {/* Scroll hint */}
      <div className="md:hidden text-xs text-cyan-400 text-center -mt-2 mb-2">← Scroll to explore →</div>

      <div
        className={`
          flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-0
          snap-x snap-mandatory scroll-smooth
        `}
      >
        {data.map((cat, idx) => (
          <div
            key={idx}
            className={`
              bg-[#0f172a] rounded-xl p-4 flex-shrink-0 
              w-[88vw] sm:w-[80vw] md:w-60
              border border-cyan-600
              shadow-lg shadow-cyan-500/10
              hover:shadow-cyan-400/30 transition-shadow duration-300
              snap-start
            `}
          >
            <h3 className="text-white font-semibold text-sm mb-2">{cat.category}</h3>
            <div className="h-32 bg-[#0f172a] p-1 rounded-md">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cat.data}>
                  <defs>
                    <linearGradient id={`demandGradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
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
                    fill={`url(#demandGradient-${idx})`}
                    isAnimationActive={true}
                    animationDuration={800}
                    dot={false}
                  />
                  <ReferenceDot x={cat.max.name} y={cat.max.demand} r={5} fill="lime" stroke="white" />
                  <ReferenceDot x={cat.min.name} y={cat.min.demand} r={5} fill="red" stroke="white" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-cyan-400 mt-1 text-center">
              🔼 High: {cat.max.demand} | 🔽 Low: {cat.min.demand}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryChartsSlider;
