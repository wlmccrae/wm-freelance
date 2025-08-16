import '../styles/SpecialOffer.css';

function SpecialOffer() {
  return (
    <div className="special-offer">
      <h1>Special One Time Offer</h1>
      <div className="offer-details">
        <h2>New Mobile-Friendly Website</h2>
        <h2 className='bullet'> - 1 or 2 pages</h2>
        <h2 className='bullet'> - Quick turnaround</h2>
        <h2 className='bullet'> - Includes contact form</h2>
        <h2 className='bullet'> - Includes Google Map with pin</h2>
      </div>
      <h1>Starting at $299USD.</h1>
      <p>Offer expires 30 September 2025.</p>
    </div>
  );
};

export default SpecialOffer;
