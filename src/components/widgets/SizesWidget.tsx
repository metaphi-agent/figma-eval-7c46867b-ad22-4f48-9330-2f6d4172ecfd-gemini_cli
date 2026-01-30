import React, { useState } from 'react';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export function SizesWidget() {
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex justify-between items-center bg-gray-100 rounded-full p-1.5">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              selectedSize === size
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
