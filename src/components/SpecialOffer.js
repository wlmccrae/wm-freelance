import '../styles/SpecialOffer.css';

function SpecialOffer() {
  return (
    <div className="special-offer">
      <h1>Special One Time Offer</h1>
      <div className="offer-container">
        <div className="offer-details">
          <h2>NEW MOBILE-FRIENDLY WEBSITE</h2>
          <br />
          <h2 className='bullet'> - 1 or 2 pages</h2>
          <h2 className='bullet'> - Quick turnaround</h2>
          <h2 className='bullet'> - Includes contact form</h2>
          <h2 className='bullet'> - Includes Google Map with pin</h2>
        </div>
      </div>
      <h1>Starting at $299USD.</h1>
      <h2>$100 savings over a BASIC SITE with CONTACT PAGE add-on!</h2>
      <p>Offer expires 31 December 2025.</p>
    </div>
  );
};

export default SpecialOffer;
