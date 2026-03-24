import { NavLink } from 'react-router-dom';
import '../styles/Samples.css';

function Samples() {
  return (
    <main className="freelance-page">
      <div className="freelance-title-container">
        <h1 className="freelance-page-title">Sample Sites</h1>
      </div>
      <div className="sample-sites">
        <div className="sample">
          <a
            className="sample-project-link"
            href="https://wandamccrae.com" target="_blank" rel="noopener noreferrer"
            aria-label="Wanda McCrae (opens in new tab)">
            <span aria-hidden="true">- </span>Wanda McCrae
          </a>
          <p>My portfolio is a one-page BASIC WEBSITE.</p>
        </div>
        <div className="sample">
          <a
            className="sample-project-link"
            href="/projects/tea-shoppe/index.html" target="_blank" rel="noopener noreferrer"
            aria-label="Lotus Blossom Tea Shoppe (opens in new tab)">
            <span aria-hidden="true">- </span>Lotus Blossom Tea Shoppe
          </a>
          <p>BASIC WEBSITE for a local tea shoppe.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="/projects/ronni-davis/index.html" target="_blank" rel="noopener noreferrer" aria-label="Ronni Davis (opens in new tab)"><span aria-hidden="true">- </span>Ronni Davis</a>
          <p>BASIC WEBSITE with more than one EXTRA PAGE (no scripting) and a CONTACT PAGE.</p>
        </div>
        <div className="sample">
          <NavLink className="sample-project-link" to="/">
            <span aria-hidden="true">- </span>Wanda McCrae &mdash; Freelance Web Developer
          </NavLink>
          <p>This site is a GROWTH WEBSITE with an EXTRA PAGE (no scripting) and a CONTACT PAGE.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://itstheweather.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Simple Weather: Local Time and Weather for Any U.S. City (opens in new tab)"><span aria-hidden="true">- </span>Simple Weather: Local Time &amp; Weather for Any U.S. City</a>
          <p>GROWTH PACKAGE: GROWTH WEBSITE that includes scripting.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://wlmccrae.github.io/headline-editor-ghpage/" target="_blank" rel="noopener noreferrer" aria-label="Headline Editor: Play with NY Times Headlines from the Archives (opens in new tab)"><span aria-hidden="true">- </span>Headline Editor: Play with NY Times Headlines from the Archives</a>
          <p>GROWTH PACKAGE: GROWTH WEBSITE with advanced scripting.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://scam-job-reporter.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Scam Job Reporter: Report scam job postings and recruiters anonymously (opens in new tab)"><span aria-hidden="true">- </span>Scam Job Reporter</a>
          <p>Custom website with advanced scripting, Python backend, and SQL database. Prices will vary depending on the complexity of the project.</p>
        </div>
      </div>
    </main>
  );
};

export default Samples;
