import React from 'react';

export default function Colors() {
  const colors = [
    // Row 1
    { bg: 'bg-[#E4EAEE]', rounded: true }, // Gray
    { bg: 'bg-[#2662F0]', rounded: true }, // Blue
    { bg: 'bg-[#E9F7FB]', rounded: true }, // Light Blue
    { bg: 'bg-[#414D55]', rounded: true }, // Dark Gray
    { bg: 'bg-[#7ED321]', rounded: true }, // Green
    
    // Row 2
    { bg: 'bg-[#E4EAEE]', rounded: true },
    { bg: 'bg-[#04E762]', rounded: true },
    { bg: 'bg-[#F17105]', rounded: true },
    { bg: 'bg-[#FF715B]', rounded: true },
    { bg: 'bg-[#DE0D92]', rounded: true },

    // Row 3 (Active/Split)
    { bg: 'bg-[#7500C2]', rounded: true }, // Purple
    { bg: 'bg-[#ED0423]', rounded: true }, // Red
    { bg: 'bg-[#87BFFF]', rounded: true }, // Blue
    { bg: 'bg-[#FF715B]', rounded: true }, // Pink/Red?
    { bg: 'bg-[#FDBD40]', rounded: true }, // Yellow

    // Row 4
    { bg: 'bg-[#FF71A4]', rounded: true }, // Pink
    { bg: 'bg-[#6B0E0E]/70', rounded: true }, // Dark Red
    { bg: 'bg-[#6EA478]', rounded: true }, // Greenish
    { bg: 'bg-[#DEB8CD]', rounded: true }, // Pale Pink
    { bg: 'bg-[#BC7EF6]', rounded: true }, // Purple

    // Row 5
    { bg: 'bg-[#D3DEB8]', rounded: true }, // Pale Green
    { bg: 'bg-[#ED0423]', rounded: true }, // Red
    { bg: 'bg-[#FF4343]', rounded: true }, // Red
    { bg: 'bg-[#0026FF]', rounded: true }, // Blue
    { bg: 'bg-[#1D2481]', rounded: true }, // Dark Blue
    
    // Row 6
    { bg: 'bg-[#E4EAEE]', rounded: true },
    { bg: 'bg-[#04E762]', rounded: true },
    { bg: 'bg-[#F17105]', rounded: true },
    { bg: 'bg-[#FFDFEF]', rounded: true }, // Light Pink
    { bg: 'bg-[#DE0D92]', rounded: true },
  ];

  return (
    <div className="p-6 h-full flex flex-col justify-center">
      <div className="grid grid-cols-5 gap-4">
        {colors.map((c, i) => (
          <div
            key={i}
            className={`w-8 h-8 ${c.bg} rounded-lg cursor-pointer hover:ring-2 ring-offset-2 ring-blue-500 transition-all`}
          />
        ))}
      </div>
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
