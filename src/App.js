import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Services from './components/Services';
import Footer from './components/Footer';
import Samples from './components/Samples';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import './App.css';
import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter basename="/freelance">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="services" element={<Services />} />
            <Route path="samples" element={<Samples />} />
            <Route path="contact" element={<Contact />} />
            <Route path="thanks" element={<Thanks />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
