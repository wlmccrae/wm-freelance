import '../styles/Services.css';

function Services () {
  return (
    <main className="freelance-page">
      <div className="freelance-title-container">
        <h1 className="freelance-page-title">
          Web Development and Maintenance
        </h1>
        <p className="page-description">
          Depending on the complexity of your site, <span className="emphasis">flat-rate pricing through a web design agency can start at $2,500USD!</span> Additionally, having the agency on retainer for regular updates can cost an extra few thousand dollars a year. Save thousands of dollars by working with me to build and maintain your site. Compare that hefty price tag to my prices:
        </p>
      </div>
      <table className="prices-table">
        <caption className="sr-only">Web Development and Maintenance pricing</caption>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="service-name">BASIC WEBSITE</td>
            <td className="description">Mobile-first, responsive design in static HTML/CSS. Up to 2 pages (e.g. About and Gallery).</td>
            <td className="price">$298USD</td>
          </tr>
          <tr>
            <td className="service-name">GROWTH WEBSITE</td>
            <td className="description">Mobile-first, responsive design using a modern web framework to allow for future interactivity/growth. Up to 2 pages (e.g. About and Gallery).</td>
            <td className="price">$398USD</td>
          </tr>
          <tr>
            <td className="service-name">EXTRA PAGE (no scripting)</td>
            <td className="description">Need more than two pages? Add as many more as you need. (Your delivery date will include extra time per page.)</td>
            <td className="price">$98USD/page</td>
          </tr>
          <tr>
            <td className="service-name">EXTRA PAGE (scripting)</td>
            <td className="description">Need to add pages that allow interactivity like searching and sorting information? Add as many more as you need. (Your delivery date will include extra time per page.)</td>
            <td className="price">$198USD/page</td>
          </tr>
          <tr>
            <td className="service-name">CONTACT FORM ADD-ON</td>
            <td className="description">Allows people to contact you via a form. Includes setting up a form email service for you.</td>
            <td className="price">$98USD</td>
          </tr>
          <tr>
            <td className="service-name">CUSTOM FOOTER</td>
            <td className="description">All pages include "Developed by Wanda McCrae" in the footer. You can remove that phrase for a small fee.</td>
            <td className="price">$59USD</td>
          </tr>
          <tr>
            <td className="service-name">SITE MAINTENANCE</td>
            <td className="description">For sites we built: content updates (text, images) and minor bug fixes (broken links, mobile responsiveness checks).</td>
            <td className="price">$399USD/year<br></br>$249USD/six months</td>
          </tr>
          <tr>
            <td className="service-name">SITE MAINTENANCE TRAINING</td>
            <td className="description">Prefer to take a hands-on approach? I will give you a one-time training session to teach you how to access and maintain your own site.</td>
            <td className="price">$199USD</td>
          </tr>
        </tbody>
      </table>
      <hr className="prices-hr" />
      <div className="freelance-title-container">
        <h2 className="freelance-page-title">
          Business Name Registration
        </h2>
        <p className="page-description">
          If you are a brand new business and still need a business name registered in your city, I can help you acquire and register a business name.
        </p>
      </div>
      <table className="prices-table">
        <caption className="sr-only">Business Name Registration pricing</caption>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="service-name">BUSINESS NAME SEARCH</td>
            <td className="description">If you do not already have a business name, I can see if the name you want is available for you.</td>
            <td className="price">$99USD</td>
          </tr>
          <tr>
            <td className="service-name">REGISTER BUSINESS NAME</td>
            <td className="description">Register your business name with your city.</td>
            <td className="price">$199USD</td>
          </tr>
        </tbody>
      </table>
      <hr className="prices-hr" />
      <div className="freelance-title-container">
        <h2 className="freelance-page-title">
          Domain Hosting Setup (Bluehost)
        </h2>
        <p className="page-description">
          If you do not already have a domain and hosting setup for your website, I can do that for you. For ease of setup and maintenance, I recommend Bluehost.
        </p>
      </div>
      <table className="prices-table">
        <caption className="sr-only">Domain Hosting Setup pricing</caption>
        <thead>
          <tr>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="service-name">DOMAIN NAME REGISTRATION</td>
            <td className="description">This is for the most basic domain name registration. Fees are paid directly to Bluehost.</td>
            <td className="price">$0USD first year<br></br>$14.99USD annually</td>
          </tr>
          <tr>
            <td className="service-name">1 YEAR OF BASIC WEB HOSTING</td>
            <td className="description">For a basic one year hosting plan. Multi-year and other hosting plans are also available. Fees are paid directly to Bluehost.</td>
            <td className="price">$59.88USD first year<br></br>$144USD annually</td>
          </tr>
          <tr>
            <td className="service-name">PROFESSIONAL SETUP FEE</td>
            <td className="description">I will set up your domain and web hosting account for you, with the domain name and/or hosting fees paid directly to Bluehost.</td>
            <td className="price">$149USD</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Services;
