import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatedPage } from './pages/home';
import NotFoundPage from './pages/404';
import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimatedPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
  }

export default App;
