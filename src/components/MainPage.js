import { NavLink } from 'react-router-dom';
import '../styles/MainPage.css';
import teaShoppeImage from '../assets/tea-shoppe-screenshot.png';

function MainPage() {
  return (
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="main-page-title">
          Your Business Needs a Website
        </div>
        <div className="main-page-title">
          Let's Keep It Simple & Effective
        </div>
      </div>
      <div>
        <p className="welcome-message">
          No website? Outdated site? You don't need a complicated (or expensive) solution. I specialize in quick, clean, and professional small business websites&mdash;just 2-3 pages to showcase what you do and help customers find you.
        </p>
        <div className="checklist">
          ✔ Fast & Affordable &mdash; No bloated features, just what you need.
        </div>
        <div className="checklist">
          ✔ Mobile-Friendly &mdash; Looks great on phones and desktops.
        </div>
        <div className="checklist">
          ✔ Zero Stress &mdash; I handle the tech; you focus on your business.
        </div>
        <p className="welcome-message">
          See examples of my work here: <NavLink to='samples' className='welcome-nav-link'>Sample Sites</NavLink>
        </p>
        <p className="welcome-message">
          Get a simple, effective online presence without the agency price tag. Message me to get started!
        </p>
      </div>
      <img className="main-content-img" src={teaShoppeImage} alt="Tea Shoppe Screenshot" />
    </div>
  );
};

export default MainPage;
