import { NavLink } from 'react-router-dom';
import '../styles/Samples.css';
import profileSite from '../assets/wandamccrae.png'
import teaShoppe from '../assets/tea-shoppe-screenshot.png'
import ronniDavis from '../assets/ronni-davis-home.png'
import simpleWeather from '../assets/simple-weather.jpg'
import headlineEditor from '../assets/headline-editor-20260313.png'
import sjr from '../assets/scam-job-reporter.png'

function Samples() {
  return (
    <main className="freelance-page">
      <div className="freelance-title-container">
        <h1 className="freelance-page-title">
          Sample Sites
        </h1>
      </div>
      <div className="sample-sites">
        <div className="sample">
          <a
            className="sample-project-link"
            href="https://wandamccrae.com" target="_blank" rel="noopener noreferrer"
            aria-label="Wanda McCrae (opens in new tab)">
            <img className="sampleImg" src={profileSite} alt="profile site of Wanda McCrae" />
          </a>
          <p>
            <a
            className="sample-project-link"
            href="https://wandamccrae.com" target="_blank" rel="noopener noreferrer"
            aria-label="Wanda McCrae (opens in new tab)">
            Wanda McCrae
          </a>
          </p>
          <p>
            One-page BASIC WEBSITE
          </p>
        </div>
        <div className="sample">
          <a
            className="sample-project-link"
            href="/projects/tea-shoppe/index.html" target="_blank" rel="noopener noreferrer"
            aria-label="Lotus Blossom Tea Shoppe (opens in new tab)">
            <img className="sampleImg" src={teaShoppe} alt="tea shoppe web site" />
          </a>
          <p>
            <a
              className="sample-project-link"
              href="/projects/tea-shoppe/index.html" target="_blank" rel="noopener noreferrer"
              aria-label="Lotus Blossom Tea Shoppe (opens in new tab)">
              Lotus Blossom Tea Shoppe
            </a>
          </p>
          <p>
            Two-page BASIC WEBSITE
          </p>
        </div>
        <div className="sample">
          <a
            className="sample-project-link"
            href="/projects/ronni-davis/index.html" target="_blank" rel="noopener noreferrer"
            aria-label="Ronni Davis (opens in new tab)">
            <img className="sampleImg" src={ronniDavis} alt="Ronni Davis web site" />
          </a>
          <p>
            <a className="sample-project-link" href="/projects/ronni-davis/index.html" target="_blank" rel="noopener noreferrer" aria-label="Ronni Davis (opens in new tab)">
              Ronni Davis
            </a>
          </p>
          <p>
            BASIC WEBSITE with more than one EXTRA PAGE (no scripting) and a CONTACT PAGE
          </p>
        </div>
        <div className="sample">
          <a
            className="sample-project-link"
            href="https://itstheweather.netlify.app/" target="_blank" rel="noopener noreferrer"
            aria-label="Simple Weather (opens in new tab)">
            <img className="sampleImg" src={simpleWeather} alt="Weather web site" />
          </a>
          <p>
            <a className="sample-project-link" href="https://itstheweather.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Simple Weather: Local Time and Weather for Any U.S. City (opens in new tab)">
              Simple Weather: Local Time &amp; Weather for Any U.S. City
            </a>
          </p>
          <p>
            GROWTH PACKAGE (GROWTH WEBSITE with scripting)
          </p>
        </div>
        <div className="sample">
          <a
            className="sample-project-link"
            href="https://wlmccrae.github.io/headline-editor-ghpage/" target="_blank" rel="noopener noreferrer"
            aria-label="Headline Editor (opens in new tab)">
            <img className="sampleImg" src={headlineEditor} alt="Headline Editor" />
          </a>
          <p>
            <a className="sample-project-link" href="https://wlmccrae.github.io/headline-editor-ghpage/" target="_blank" rel="noopener noreferrer" aria-label="Headline Editor: Play with NY Times Headlines from the Archives (opens in new tab)">
              Headline Editor: Play with NY Times Headlines from the Archives
            </a>
          </p>
          <p>
            GROWTH PACKAGE (GROWTH WEBSITE with advanced scripting)
          </p>
        </div>
        <div className="sample">
          <a
            className="sample-project-link"
            href="https://scam-job-reporter.netlify.app/" target="_blank" rel="noopener noreferrer"
            aria-label="Scam Job Reporter (opens in new tab)">
            <img className="sampleImg" src={sjr} alt="Scam Job Reporter" />
          </a>
          <p>
            <a className="sample-project-link" href="https://scam-job-reporter.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Scam Job Reporter: Report scam job postings and recruiters anonymously (opens in new tab)">
              Scam Job Reporter
            </a>
          </p>
          <p>
            Multi-page site with advanced scripting, Python backend, and SQL database. Prices will vary depending on the complexity of the project.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Samples;
