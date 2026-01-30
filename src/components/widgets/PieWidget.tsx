import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Direct', value: 400 },
  { name: 'Organic', value: 300 },
  { name: 'Referral', value: 300 },
  { name: 'Social', value: 200 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export function PieWidget() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-gray-900">Traffic Source</h4>
      </div>
      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
                <span className="block text-3xl font-bold text-gray-900">1.2k</span>
                <span className="text-xs text-gray-400">Total Visits</span>
            </div>
        </div>
      </div>
       <div className="flex justify-center gap-3 mt-2">
        {data.slice(0, 3).map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-xs text-gray-500">{entry.name}</span>
            </div>
        ))}
       </div>
    </div>
  );
}
