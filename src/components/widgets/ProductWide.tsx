import React from 'react';
import { Button } from '../ui/Button';

export default function ProductWide() {
  return (
    <div className="flex h-full">
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-2">City backpacks</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">Gazelle Super x Alltimers Backpack</h2>
        <div className="text-2xl font-bold text-gray-800 mb-6">$85</div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
          <div>Fit: <span className="text-gray-800 font-medium">Perfect</span></div>
          <div>Length: <span className="text-gray-800 font-medium">Regular</span></div>
          <div>Comfort: <span className="text-gray-800 font-medium">Comfortable</span></div>
          <div>Quality: <span className="text-gray-800 font-medium">Excellent</span></div>
        </div>
        <div className="flex gap-2">
          <Button size="icon" variant="secondary">
            <img src="./assets/icons/1-610.svg" className="w-4 h-4" alt="Like" />
          </Button>
          <Button size="icon" variant="secondary">
            <img src="./assets/icons/1-611.svg" className="w-4 h-4" alt="Expand" />
          </Button>
        </div>
      </div>
      <div className="w-1/2 relative">
         <img 
            src="./assets/images/1-605.png" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Product"
          />
      </div>
    </div>
  );
}
