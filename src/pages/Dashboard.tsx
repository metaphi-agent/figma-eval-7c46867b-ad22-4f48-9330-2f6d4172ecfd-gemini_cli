import React from 'react';
import { WidgetCard } from '../components/WidgetCard';
import { ColorsWidget } from '../components/widgets/ColorsWidget';
import { ProductsListWidget } from '../components/widgets/ProductsListWidget';
import { SizesWidget } from '../components/widgets/SizesWidget';
import { LoginWidget } from '../components/widgets/LoginWidget';
import { ProductWidget } from '../components/widgets/ProductWidget';
import { GraphWidget } from '../components/widgets/GraphWidget';
import { FormWidget } from '../components/widgets/FormWidget';
import { CalendarWidget } from '../components/widgets/CalendarWidget';
import { PieWidget } from '../components/widgets/PieWidget';
import { ProductCard2Widget } from '../components/widgets/ProductCard2Widget';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 flex justify-center bg-background text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full auto-rows-[180px] grid-flow-row-dense">
        
        {/* Row 1 */}
        <WidgetCard title="Colors" colSpan={1} rowSpan={2} className="bg-white text-black">
          <ColorsWidget />
        </WidgetCard>
        
        <WidgetCard title="Products" colSpan={1} rowSpan={2} className="bg-white text-black">
            <ProductsListWidget />
        </WidgetCard>

        <WidgetCard title="Sizes" colSpan={1} rowSpan={1} className="bg-white text-black">
             <SizesWidget />
        </WidgetCard>

         <WidgetCard title="Login" colSpan={1} rowSpan={1} className="bg-white text-black">
             <LoginWidget />
        </WidgetCard>
        
        {/* Row 2 */}
         <WidgetCard title="Total Views" colSpan={1} rowSpan={2} className="bg-white text-black">
             <GraphWidget />
        </WidgetCard>

         <WidgetCard title="Featured" colSpan={1} rowSpan={2} className="bg-white text-black">
             <ProductWidget />
        </WidgetCard>

        {/* Row 3 - Big Form */}
        <WidgetCard title="Contact Us" colSpan={2} rowSpan={2} className="bg-white text-black">
             <FormWidget />
        </WidgetCard>

        <WidgetCard title="Calendar" colSpan={1} rowSpan={2} className="bg-white text-black">
            <CalendarWidget />
        </WidgetCard>
        
        <WidgetCard title="Traffic" colSpan={1} rowSpan={2} className="bg-white text-black">
             <PieWidget />
        </WidgetCard>

        <WidgetCard title="New Arrival" colSpan={1} rowSpan={2} className="bg-white text-black">
             <ProductCard2Widget />
        </WidgetCard>

      </div>
    </div>
  );
}