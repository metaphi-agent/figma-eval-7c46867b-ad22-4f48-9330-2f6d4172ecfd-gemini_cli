import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CalendarWidget() {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const activeDate = 18;

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-gray-900">October 2025</h4>
        <div className="flex gap-1">
            <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-600"><ChevronLeft size={16} /></button>
            <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-600"><ChevronRight size={16} /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
        {days.map(d => <span key={d} className="text-gray-400 font-medium">{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm flex-1 content-start">
        {/* Empty start days */}
        <span /> <span />
        {dates.map(date => (
            <button
                key={date}
                className={`aspect-square rounded-full flex items-center justify-center transition-all ${
                    date === activeDate
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-200'
                        : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
                {date}
            </button>
        ))}
      </div>
    </div>
  );
}
