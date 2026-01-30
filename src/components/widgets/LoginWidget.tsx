import React from 'react';

export function LoginWidget() {
  return (
    <div className="flex flex-col h-full justify-center space-y-3">
      <input
        type="email"
        placeholder="Email address"
        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
      />
      <button className="w-full py-2 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors shadow-blue-200 shadow-lg">
        Sign In
      </button>
    </div>
  );
}
