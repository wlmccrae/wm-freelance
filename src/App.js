import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Services from './components/Services';
import Footer from './components/Footer';
import Samples from './components/Samples';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import SpecialOffer from './components/SpecialOffer';
import './App.css';
import './styles/global.css';

function App() {
  const [dyslexiaMode, setDyslexiaMode] = useState(
    () => localStorage.getItem('dyslexiaMode') === 'true'
  );

  useEffect(() => {
    document.documentElement.style.setProperty('--page-bg', dyslexiaMode ? '#fdf0d5' : '#ffffff');
    document.body.classList.toggle('dyslexia-mode', dyslexiaMode);
  }, [dyslexiaMode]);

  function toggleDyslexiaMode() {
    setDyslexiaMode(prev => {
      const next = !prev;
      localStorage.setItem('dyslexiaMode', next);
      return next;
    });
  }

  return (
    <div className={`app-container${dyslexiaMode ? ' dyslexia-mode' : ''}`} style={dyslexiaMode ? { backgroundColor: '#f8f5f0' } : {}}>
      <BrowserRouter>
        <Header dyslexiaMode={dyslexiaMode} toggleDyslexiaMode={toggleDyslexiaMode} />
        <div className="main-content" style={dyslexiaMode ? { backgroundColor: '#f8f5f0' } : {}}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="services" element={<Services />} />
            <Route path="samples" element={<Samples />} />
            <Route path="contact" element={<Contact />} />
            <Route path="thanks" element={<Thanks />} />
            <Route path="specialoffer" element={<SpecialOffer />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
