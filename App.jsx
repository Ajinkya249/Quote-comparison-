import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SolarHome from './pages/SolarHome';
import QuoteComparison from './pages/QuoteComparison';
import AIResults from './pages/AIResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SolarHome />} />
      <Route path="/quote-comparison" element={<QuoteComparison />} />
      <Route path="/ai-results" element={<AIResults />} />
    </Routes>
  );
}

export default App;
