import '../styles/SpecialOffer.css';

function SpecialOffer() {
  return (
    <main className="special-offer">
      <h1>Special One Time Offer</h1>
      <div className="offer-container">
        <div className="offer-details">
          <h2>NEW MOBILE-FRIENDLY WEBSITE</h2>
          <ul className="offer-list">
            <li className="bullet">1 or 2 pages</li>
            <li className="bullet">Quick turnaround</li>
            <li className="bullet">Includes contact form</li>
            <li className="bullet">Includes Google Map with pin</li>
          </ul>
        </div>
      </div>
      <p className="offer-price">Starting at $299USD.</p>
      <p className="offer-savings">$100 savings over a BASIC SITE with CONTACT PAGE add-on!</p>
      <p>Offer expires 31 December 2025.</p>
    </main>
  );
};

export default SpecialOffer;
