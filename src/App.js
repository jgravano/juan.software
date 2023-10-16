import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/home';
import NotFoundPage from './pages/404';

import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
