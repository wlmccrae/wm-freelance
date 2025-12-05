import '../styles/Services.css';

function Services () {
  return (
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="freelance-page-title">
          Web Development and Maintenance
        </div>
        <div className="page-description">
          Depending on the complexity of your site, <span className="emphasis">flat-rate pricing through a web design agency can start at $2,500USD!</span> Additionally, having the agency on retainer for regular updates can cost an extra few thousand dollars a year. Save thousands of dollars by working with me to build and maintain your site. Compare that hefty price tag to my prices:
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
        <div className="price">$399USD/year<br></br>$249USD/six months</div>
        <div className="service-name">SITE MAINTENANCE TRAINING</div>
        <div className="description">Prefer to take a hands-on approach? I will give you a one-time training session to teach you how to access and maintain your own site.</div>
        <div className="price">$199USD</div>
      </div>
      <hr className="prices-hr" />
      <div className="freelance-title-container">
        <div className="freelance-page-title">
          Business Name Registration
        </div>
        <div className="page-description">
          If you are a brand new business and still need a business name registered in your city, I can help you acquire and register a business name.
        </div>
      </div>
      <div className="prices-table">
        <div className="service-name">BUSINESS NAME SEARCH</div>
        <div className="description">If you do not already have a business name, I can see if the name you want is available for you.</div>
        <div className="price">$99USD</div>
        <div className="service-name">REGISTER BUSINESS NAME</div>
        <div className="description">Register your business name with your city.</div>
        <div className="price">$199USD</div>
      </div>
      <hr className="prices-hr" />
      <div className="freelance-title-container">
        <div className="freelance-page-title">
          Domain Hosting Setup (Bluehost)
        </div>
        <div className="page-description">
          If you do not already have a domain and hosting setup for your website, I can do that for you. For ease of setup and maintenance, I recommend Bluehost.
        </div>
      </div>
      <div className="prices-table">
        <div className="service-name">DOMAIN NAME REGISTRATION</div>
        <div className="description">This is for the most basic domain name registration. Fees are paid directly to Bluehost.</div>
        <div className="price">$0USD first year<br></br>$14.99USD annually</div>
        <div className="service-name">1 YEAR OF BASIC WEB HOSTING</div>
        <div className="description">For a basic one year hosting plan. Multi-year and other hosting plans are also available. Fees are paid directly to Bluehost.</div>
        <div className="price">$59.88USD first year<br></br>$144USD annually</div>
        <div className="service-name">PROFESSIONAL SETUP FEE</div>
        <div className="description">I will set up your domain and web hosting account for you, with the domain name and/or hosting fees paid directly to Bluehost.</div>
        <div className="price">$149USD</div>
      </div>
    </div>
  );
};

export default Services;
