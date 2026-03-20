import { NavLink } from 'react-router-dom';
import '../styles/MainPage.css';
import teaShoppeImage from '../assets/tea-shoppe-screenshot.png';
import codeSample from '../assets/codesample2.png';

function MainPage() {
  return (
    <main className="freelance-page">
      <div className="freelance-title-container">
        <h1 className="freelance-page-title">
          Your Business Needs a Website
        </h1>
        <h2 className="freelance-page-title">
          Let's Keep It Simple & Effective
        </h2>
      </div>
      <div className="freelance-content-container">
        <p className="welcome-message">
          No website? Outdated site? You don't need a complicated (or expensive) solution. I specialize in quick, clean, and professional small business websites&mdash;just 2-3 pages to showcase what you do and help customers find you.
        </p>
        <ul className="checklist-container">
          <li className="checklist-item">
            <span aria-hidden="true">✔</span> Fast &amp; Affordable &mdash; No bloated features, just what you need.
          </li>
          <li className="checklist-item">
            <span aria-hidden="true">✔</span> Mobile-Friendly &mdash; Looks great on phones and desktops.
          </li>
          <li className="checklist-item">
            <span aria-hidden="true">✔</span> Zero Stress &mdash; I handle the tech; you focus on your business.
          </li>
        </ul>
        <div className="img-container">
          <img className="main-content-img image1" src={codeSample} alt="Screenshot of clean, professional website code" />
          <img className="main-content-img image2" src={teaShoppeImage} alt="Screenshot of Lotus Blossom Tea Shoppe website" />
        </div>
        <p className="welcome-message">
          <NavLink to='samples' className='welcome-nav-link'>See examples of my work.</NavLink>
        </p>
        <p className="welcome-message">
          Get a simple, effective online presence without the agency price tag. <NavLink to='contact' className='welcome-nav-link'>Message me</NavLink> to get started!
        </p>
      </div>
    </main>
  );
};

export default MainPage;
