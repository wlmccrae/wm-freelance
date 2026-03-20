import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import wmLogo from '../assets/wm-logo.png';

function Header() {
  return (
    <header className="header">
      <img className="my-logo" src={wmLogo} alt="Wanda McCrae Freelance Web Developer Logo" />
      <div className="header-text">
        <h1 className="my-name">Wanda McCrae</h1>
        <h2 className="my-title">Freelance Web Developer</h2>
        <nav className="contact">
          <NavLink to="/">Home</NavLink>
          <NavLink to="samples">Sample Sites</NavLink>
          <NavLink to="services">Pricing</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
