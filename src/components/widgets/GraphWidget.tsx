import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { value: 40 }, { value: 30 }, { value: 60 }, { value: 45 }, { value: 80 }, { value: 55 }, { value: 70 }
];

export function GraphWidget() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-end mb-4">
        <div>
          <span className="text-sm text-gray-400">Total Views</span>
          <h4 className="text-3xl font-bold text-gray-900">84.2K</h4>
        </div>
        <span className="text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded-lg">+12.5%</span>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{ background: '#1e1e1e', border: 'none', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
              cursor={{ stroke: '#e5e7eb' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
