import React from 'react';
import { Button } from '../ui/Button';

export default function UserCart() {
  return (
    <div className="flex flex-col h-full justify-center px-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div>
          <div className="font-bold text-gray-800">Caitlyn King</div>
          <div className="text-xs text-gray-400">caitlyn.king@mail.com</div>
        </div>
      </div>
      <div className="border-t border-gray-100 my-2" />
      <div className="flex gap-2 mt-2">
        <Button size=\"sm\" variant=\"secondary\" className=\"flex-1\">Profile</Button>
        <Button size=\"sm\" className=\"flex-1\">Logout</Button>
      </div>
    </div>
  );
}
