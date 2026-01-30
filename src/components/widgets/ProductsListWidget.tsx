import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Minimal Chair', price: '$240', category: 'Furniture' },
  { id: 2, name: 'Modern Lamp', price: '$120', category: 'Lighting' },
  { id: 3, name: 'Ceramic Vase', price: '$45', category: 'Decor' },
  { id: 4, name: 'Wool Rug', price: '$320', category: 'Textile' },
];

export function ProductsListWidget() {
  return (
    <div className="flex flex-col h-full">
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                <ShoppingBag size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</p>
                <p className="text-xs text-gray-400">{product.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">{product.price}</span>
              <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500" />
            </div>
          </div>
        ))}
      </div>
      <button className="mt-auto w-full py-2 text-sm text-blue-500 font-medium hover:text-blue-600">
        View all products
      </button>
    </div>
  );
}
