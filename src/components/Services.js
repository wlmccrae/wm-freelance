import '../styles/Services.css';

function Services () {
  return (
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="freelance-page-title">
          Prices and Services
        </div>
      </div>
      <div className="prices-table">
        <div className="service-name">BASIC WEBSITE</div>
        <div className="description">Mobile-first, responsive design in static HTML/CSS. Up to 2 pages (e.g. About and Gallery).</div>
        <div className="price">$298USD</div>
        <div className="service-name">GROWTH WEBSITE</div>
        <div className="description">Mobile-first, responsive design using a modern web framework to allow for future interactivity/growth. Up to 2 pages (e.g. About and Gallery).</div>
        <div className="price">$398USD</div>
        <div className="service-name">EXTRA PAGE (no scripting)</div>
        <div className="description">Need more than two pages? Add as many more as you need. (Your delivery date will include extra time per page.)</div>
        <div className="price">$98USD/page</div>
        <div className="service-name">EXTRA PAGE (scripting)</div>
        <div className="description">Need to add pages that allow interactivity like searching and sorting information? Add as many more as you need. (Your delivery date will include extra time per page.)</div>
        <div className="price">$198USD/page</div>
        <div className="service-name">CONTACT FORM ADD-ON</div>
        <div className="description">Allows people to contact you via a form. Includes setting up a form email service for you.</div>
        <div className="price">$98USD</div>
        <div className="service-name">CUSTOM FOOTER</div>
        <div className="description">All pages include "Developed by Wanda McCrae" in the footer. You can remove that phrase for a small fee.</div>
        <div className="price">$59USD</div>
        <div className="service-name">SITE MAINTENANCE</div>
        <div className="description">For sites we built: content updates (text, images) and minor bug fixes (broken links, mobile responsiveness checks).</div>
        <div className="price">$99USD/year<br></br>$68USD/every six months</div>
      </div>
      <hr className="prices-hr" />
      <div className="freelance-title-container">
        <div className="freelance-page-title">
          Special
        </div>
      </div>
      <div className="prices-table">
        <div className="service-name">GROWTH PACKAGE</div>
        <div className="description">GROWTH WEBSITE that includes scripting. A $100 savings over adding an EXTRA PAGE with scripting.</div>
        <div className="price">$498USD</div>
      </div>
    </div>
  );
};

export default Services;
