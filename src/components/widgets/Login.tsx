import React from 'react';
import { Input } from '../ui/Input';

export default function Login() {
  return (
    <div className="flex flex-col h-full justify-center px-6 gap-4">
      <div className="flex justify-end">
        <span className="text-blue-400 text-xs font-medium cursor-pointer">Reset</span>
      </div>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
    </div>
  );
}
