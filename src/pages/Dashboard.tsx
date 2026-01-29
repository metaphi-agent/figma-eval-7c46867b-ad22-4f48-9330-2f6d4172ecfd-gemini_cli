import React from 'react';
import widgetsData from '../data/widgets.json';
import { WidgetRenderer } from '../components/widgets/WidgetRenderer';
import { Card } from '../components/ui/Card';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] overflow-auto"> 
      {/* Background color r:0.117 -> #1E1E1E */}
      <div 
        className="relative mx-auto origin-top-left"
        style={{ 
          width: '3617px', 
          height: '2275px',
          // Optional: Scale down for easier viewing if needed, 
          // but keeping 1:1 for fidelity as requested.
        }}
      >
        {/* Background Rectangle 1 - Color r:0.704 -> #B3B3B3 */}
        <div className="absolute inset-0 bg-[#B3B3B3]/10 pointer-events-none" /> {/* Actually it's probably just the canvas bg */}

        {widgetsData.map((widget) => (
          <div
            key={widget.id}
            style={{
              position: 'absolute',
              left: `${widget.x}px`,
              top: `${widget.y}px`,
              width: `${widget.w}px`,
              height: `${widget.h}px`,
            }}
          >
            <Card className="h-full w-full">
              <WidgetRenderer type={widget.type} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
