import React from 'react';
import { ProgressBar } from '../ui/ProgressBar';

export default function Progressbars() {
  return (
    <div className="flex flex-col h-full justify-center px-8 gap-6">
      <ProgressBar value={30} color="bg-red-500" />
      <ProgressBar value={50} color="bg-orange-400" />
      <ProgressBar value={70} color="bg-yellow-400" />
      <ProgressBar value={60} color="bg-green-400" />
      <ProgressBar value={80} color="bg-blue-500" />
      <ProgressBar value={40} color="bg-purple-500" />
    </div>
  );
}
