import React from 'react';

export default function MapData() {
  return (
    <div className="relative h-full w-full">
      <img 
        src="./assets/images/1-600.png" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
        alt="Map"
      />
      <div className="absolute inset-0 flex flex-col justify-center px-6">
        <div className="text-3xl font-bold text-blue-600">1.25 kk</div>
        <div className="text-gray-500">Washington, D.C.</div>
      </div>
    </div>
  );
}
