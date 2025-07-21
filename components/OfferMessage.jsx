import React, { useState } from 'react';

const OfferMessage = () => {
  const [showOffer, setShowOffer] = useState(false);

  const handleClick = () => {
    setShowOffer(!showOffer);
  };

  return (
    <div className="offer-section">
      <button onClick={handleClick} className="offer-button">
        {showOffer ? 'Hide Offer' : "See Today's Offer"}
      </button>

      {showOffer && (
        <p className="offer-text">
          🔥 Get 2 Big Macs for $6! Limited time only.
        </p>
      )}
    </div>
  );
};

export default OfferMessage;
