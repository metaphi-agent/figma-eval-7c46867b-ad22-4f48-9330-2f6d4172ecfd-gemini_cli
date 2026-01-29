import React from 'react';
import { clsx } from 'clsx';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  className,
  color = 'bg-blue-600',
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={clsx('h-2 w-full overflow-hidden rounded-full bg-gray-100', className)}>
      <div
        className={clsx('h-full transition-all', color)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
