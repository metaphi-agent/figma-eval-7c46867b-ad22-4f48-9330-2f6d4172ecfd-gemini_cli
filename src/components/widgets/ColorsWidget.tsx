import React, { useState } from 'react';
import { Check } from 'lucide-react';

const colors = [
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Lime', value: '#84cc16' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Sky', value: '#0ea5e9' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Indigo', value: '#6366f1' },
];

export function ColorsWidget() {
  const [selected, setSelected] = useState(colors[10].value); // Blue default

  return (
    <div className="grid grid-cols-4 gap-4 h-full content-center">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => setSelected(color.value)}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
          style={{ backgroundColor: color.value }}
          aria-label={`Select ${color.name}`}
        >
          {selected === color.value && <Check className="text-white w-6 h-6 drop-shadow-md" />}
        </button>
      ))}
    </div>
  );
}
