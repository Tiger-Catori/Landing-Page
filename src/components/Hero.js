import React from 'react';

const Hero = () => {

    const handleButtonClick = () => {
      // Add your logic here. For example, navigating to the app section:
      window.location.href = '#contact';
    };
  
    return (
      <section className="section__hero section" id='home'>
        <div className="container container__hero">
          <HeroText onButtonClick={handleButtonClick} />
          <HeroImage />
        </div>
      </section>
    );
  }
  
  export default Hero;
  

const HeroText = ({ onButtonClick }) => {
  return (
    <div className="hero__text">
      <h2 className="heading hero_head">
        Discover our <span>fasco</span> mobile app
      </h2>
      <p className="hero__p">
        Lorem ipsum dolor sit amet consectetur. Malesuada arcu venenatis placerat natoque in mattis lorem. Mattis vulputate magnis ultricies augue ac tellus auctor quis tristique.
      </p>
      <button className="btn hero__btn" onClick={onButtonClick}>Contact us</button>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="hero__image">
      <div className="container__img">
        <img className="phone" src="/images/phone/phone-hero-1.webp" alt="Phone 1" />
        <img className="phone" src="/images/phone/phone-hero-2.webp" alt="Phone 2" />
      </div>
    </div>
  );
};