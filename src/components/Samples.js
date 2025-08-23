import { NavLink } from 'react-router-dom';
import '../styles/Samples.css';

function Samples() {
  return (
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="freelance-page-title">Sample Sites</div>
      </div>
      <div className="sample-sites">
        <div className="sample">
          <a
            className="sample-project-link"
            href="/projects/tea-shoppe/index.html" target="_blank" rel="noopener noreferrer">
            - Lotus Blossom Tea Shoppe
          </a>
          <p>BASIC WEBSITE for a local tea shoppe.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="/projects/ronni-davis/index.html" target="_blank" rel="noopener noreferrer">- Ronni Davis</a>
          <p>BASIC WEBSITE with more than one EXTRA PAGE (no scripting) and a CONTACT PAGE.</p>
        </div>
        <div className="sample">
          <NavLink className="sample-project-link" to="/">
            - Wanda McCrae &mdash; Freelance Web Developer
          </NavLink>
          <p>This very site you are on is an example of a GROWTH WEBSITE with an EXTRA PAGE (no scripting) and a CONTACT PAGE.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://itstheweather.netlify.app/" target="_blank" rel="noopener noreferrer">- Simple Weather: Local Time & Weather for Any U.S. City</a>
          <p>GROWTH PACKAGE: GROWTH WEBSITE that includes scripting.</p>
        </div>
        <div className="sample">
          <a className="sample-project-link" href="https://wlmccrae.github.io/headline-editor-ghpage/" target="_blank" rel="noopener noreferrer">- Headline Editor: Play with NY Times Headlines from the Archives</a>
          <p>GROWTH PACKAGE: GROWTH WEBSITE with advanced scripting.</p>
        </div>
      </div>
    </div>
  );
};

export default Samples;
