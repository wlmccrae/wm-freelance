import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import wmLogo from '../assets/wm-logo.png';

function Header({ dyslexiaMode, toggleDyslexiaMode }) {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header-center">
        <img className="my-logo" src={wmLogo} alt="Wanda McCrae Freelance Web Developer Logo" />
        <div className="header-text">
          <p className="my-name">Wanda McCrae</p>
          <p className="my-title">Freelance Web Developer</p>
          <nav className="main-navigation" aria-label="Main navigation">
            <NavLink to="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</NavLink>
            <NavLink to="samples" aria-current={pathname === '/samples' ? 'page' : undefined}>Sample Sites</NavLink>
            <NavLink to="services" aria-current={pathname === '/services' ? 'page' : undefined}>Pricing</NavLink>
            <NavLink to="contact" aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</NavLink>
          </nav>
        </div>
      </div>
      <label className="dyslexia-toggle">
        <input
          type="checkbox"
          checked={dyslexiaMode}
          onChange={toggleDyslexiaMode}
        />
        <span className="toggle-track" aria-hidden="true">
          <span className="toggle-thumb" />
        </span>
        Dyslexia-Friendly
      </label>
    </header>
  );
};

export default Header;
