import React from 'react';

export default function ProductsList() {
  const products = [
    { name: 'Small product', price: '$20' },
    { name: 'Hover Product', price: '$45', active: true },
    { name: 'Small product', price: '$20' },
    { name: 'Small product', price: '$20' },
  ];

  return (
    <div className="flex flex-col h-full py-6">
      {products.map((p, i) => (
        <div 
          key={i} 
          className={`flex items-center px-6 py-3 cursor-pointer ${p.active ? 'bg-white shadow-lg scale-105 z-10 rounded-xl my-2' : 'border-b border-gray-100 last:border-0'}`}
        >
          <div className="w-10 h-10 bg-gray-100 rounded-lg mr-4" />
          <div className="flex-1">
            <div className="h-2 w-24 bg-gray-200 rounded mb-1" />
            <div className="h-2 w-16 bg-gray-100 rounded" />
          </div>
          <div className="h-4 w-8 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}
