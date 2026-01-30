import React from 'react';

interface WidgetCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3 | 4;
}

export function WidgetCard({ title, children, className = '', colSpan = 1, rowSpan = 1 }: WidgetCardProps) {
  const colSpanClass = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
  }[colSpan];

  const rowSpanClass = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
  }[rowSpan];

  return (
    <div className={`bg-surface rounded-3xl p-6 shadow-lg overflow-hidden flex flex-col ${colSpanClass} ${rowSpanClass} ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <div className="flex-1 w-full h-full">
        {children}
      </div>
    </div>
  );
}
