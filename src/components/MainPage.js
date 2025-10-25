import { NavLink } from 'react-router-dom';
import '../styles/MainPage.css';
import teaShoppeImage from '../assets/tea-shoppe-screenshot.png';
import codeSample from '../assets/codesample2.png';

function MainPage() {
  return (
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="freelance-page-title">
          Your Business Needs a Website
        </div>
        <div className="freelance-page-title">
          Let's Keep It Simple & Effective
        </div>
      </div>
      <div className="freelance-content-container">
        <div className="welcome-message">
          No website? Outdated site? You don't need a complicated (or expensive) solution. I specialize in quick, clean, and professional small business websites&mdash;just 2-3 pages to showcase what you do and help customers find you.
        </div>
        <div className="checklist-container">
          <div className="checklist-item">
            <div className="checklist">
              ✔ Fast & Affordable &mdash; No bloated features, just what you need.
            </div>
            <div className="checklist">
              ✔ Mobile-Friendly &mdash; Looks great on phones and desktops.
            </div>
            <div className="checklist">
              ✔ Zero Stress &mdash; I handle the tech; you focus on your business.
            </div>
          </div>
        </div>
        <div className="img-container">
          <img className="main-content-img image1" src={codeSample} alt="code screenshot" />
          <img className="main-content-img image2" src={teaShoppeImage} alt="Tea Shoppe Screenshot" />
        </div>
        <div className="welcome-message">
          <NavLink to='samples' className='welcome-nav-link'>See examples of my work.</NavLink>
        </div>
        <div className="welcome-message">
          Get a simple, effective online presence without the agency price tag. <NavLink to='contact' className='welcome-nav-link'>Message me</NavLink> to get started!
        </div>
      </div>
    </div>
  );
};

export default MainPage;
