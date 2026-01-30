import React from 'react';

export function FormWidget() {
  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">First Name</label>
            <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900" defaultValue="John" />
        </div>
        <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Name</label>
            <input type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900" defaultValue="Doe" />
        </div>
      </div>
      <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
          <input type="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900" defaultValue="john@example.com" />
      </div>
       <div className="space-y-1 flex-1">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</label>
          <textarea className="w-full h-full min-h-[80px] px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-900" defaultValue="Hello, I would like to inquire about..." />
      </div>
      <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition-colors shadow-lg cursor-pointer">
        Send Message
      </button>
    </div>
  );
}
