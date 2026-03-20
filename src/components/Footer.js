import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <p>Developed by and Copyright 2025 <NavLink to="/" className='footer-nav-link'>Wanda McCrae</NavLink>. </p>
    </footer>
  );
};

export default Footer;
