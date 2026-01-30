import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-background text-white">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
