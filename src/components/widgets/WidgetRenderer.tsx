import React, { Suspense } from 'react';
import { Card } from '../ui/Card';

// Lazy load widgets
const Colors = React.lazy(() => import('./Colors'));
const ProductsList = React.lazy(() => import('./ProductsList'));
const Progressbars = React.lazy(() => import('./Progressbars'));
const Sizes = React.lazy(() => import('./Sizes'));
const Login = React.lazy(() => import('./Login'));
const UserCart = React.lazy(() => import('./UserCart'));
const MapData = React.lazy(() => import('./MapData'));
const ProductWide = React.lazy(() => import('./ProductWide'));

interface WidgetRendererProps {
  type: string;
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ type }) => {
  const renderWidget = () => {
    switch (type) {
      case 'Colors':
        return <Colors />;
      case 'ProductsList':
        return <ProductsList />;
      case 'Progressbars':
        return <Progressbars />;
      case 'Sizes':
        return <Sizes />;
      case 'Login':
        return <Login />;
      case 'UserCart':
        return <UserCart />;
      case 'MapData':
        return <MapData />;
      case 'ProductWide':
        return <ProductWide />;\n      default:
        return (
          <div className=\"flex h-full w-full items-center justify-center p-4 text-center text-gray-400\">
            <div className=\"flex flex-col items-center gap-2\">
              <span className=\"text-xs font-mono\">{type}</span>
              <span className=\"text-xs\">Not Implemented</span>
            </div>
          </div>
        );
    }
  };

  return (
    <Suspense fallback={<div className=\"h-full w-full animate-pulse bg-gray-50\" />}>
      {renderWidget()}
    </Suspense>
  );
};
