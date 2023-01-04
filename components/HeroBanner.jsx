import React from 'react';


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <h1>{heroBanner.largeText1}</h1>
      <h3>{heroBanner.midText}</h3>
      <p className="beats-solo">{heroBanner.smallText}</p>
    </div>
  )
}

export default HeroBanner