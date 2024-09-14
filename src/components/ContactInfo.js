import React from 'react';


const ContactInfo = () => {
    return (
      <div className="contact__container">
        <ContactHeading text="Contact Us" className="heading" />
        <ContactDetails />
        <ContactHeading text="Social media" className="heading social__head" />
        <SocialMediaLinks />
        {/* <h1>Our Location</h1> */}
      </div>
    );
  };
  
  export default ContactInfo;

const ContactHeading = ({ text, className }) => {
  return (
    <div className="heading__container">
      <h1 className={className}>{text}</h1>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <ul className="detail-info">
      <li>
        <a href="#"><ion-icon name="location-outline"></ion-icon> 115 Fellows Court. London, E2 8LW</a>
      </li>
      <li>
        <a href="mailto:fasco@gmx.com"><ion-icon name="mail-outline"></ion-icon> fasco@gmx.com</a>
      </li>
      <li>
        <a href="tel:07788194089"><ion-icon name="call-outline"></ion-icon> 07788194089</a>
      </li>
    </ul>
  );
};

const SocialMediaLinks = () => {
  return (
    <ul className="social-media">
      <li>
        <a href="https://www.facebook.com" target="_blank"><ion-icon name="logo-facebook"></ion-icon> Facebook</a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank"><ion-icon name="logo-instagram"></ion-icon> Instagram</a>
      </li>
      <li>
        <a href="https://www.twitter.com" target="_blank"><ion-icon name="logo-twitter"></ion-icon> Twitter</a>
      </li>
      <li>
        <a href="https://web.telegram.org/a/" target="_blank"><ion-icon name="navigate-circle-outline"></ion-icon> Telegram</a>
      </li>
    </ul>
  );
};

