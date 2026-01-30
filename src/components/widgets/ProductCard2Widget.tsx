import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function ProductCard2Widget() {
  return (
    <div className="h-full flex flex-col">
       <div className="flex-1 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden group">
          <img
             src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
             alt="Smart Watch"
             loading="lazy"
             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
           <div className="absolute top-3 left-3 bg-black/20 backdrop-blur-md px-2 py-1 rounded-lg text-white text-xs font-medium">
              New
           </div>
       </div>
       <div className="flex justify-between items-center">
          <div>
             <h4 className="font-bold text-gray-900">Smart Watch</h4>
             <p className="text-gray-500 text-sm">$350.00</p>
          </div>
          <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer">
             <ShoppingCart size={18} />
          </button>
       </div>
    </div>
  );
}
