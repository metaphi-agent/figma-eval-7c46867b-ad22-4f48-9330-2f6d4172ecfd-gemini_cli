import React from 'react';

export default function Sizes() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="flex flex-col h-full justify-center px-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400 font-medium">Measurements</span>
        <span className="text-blue-400 text-sm font-medium cursor-pointer">Size Guide</span>
      </div>
      <div className="flex gap-2">
        {sizes.map((s) => (
          <button
            key={s}
            className={`h-8 w-10 flex items-center justify-center rounded text-sm font-medium ${
              s === 'M' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
