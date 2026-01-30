import React from 'react';
import { Heart } from 'lucide-react';

export function ProductWidget() {
  return (
    <div className="h-full flex flex-col relative group">
      <div className="absolute top-0 right-0 p-2 z-10">
        <button className="p-2 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 transition-colors shadow-sm cursor-pointer">
          <Heart size={18} />
        </button>
      </div>
      <div className="flex-1 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
        <img
           src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
           alt="Nike Shoe"
           loading="lazy"
           className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg">Nike Air Max</h4>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-500 text-sm">Men's Running Shoe</span>
          <span className="font-bold text-blue-600">$180</span>
        </div>
      </div>
    </div>
  );
}
