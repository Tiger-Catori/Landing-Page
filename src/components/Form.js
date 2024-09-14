import React from 'react';

const Form = () => {
    return (
      <div className="form__section" id="form2__box">
        <form action="" method="POST" className="web__form">
          <FormHeading />
          <div className="input__box">
            <FormInput type="text" name="name" placeholder="Name" required />
            <FormInput type="email" name="email" placeholder="Email address" required />
            <FormInput type="tel" name="phone" placeholder="Phone number" required />
            <FormTextarea />
          </div>
          <FormButton />
        </form>
      </div>
    );
  };
  
  export default Form;

const FormHeading = () => {
  return (
    <div className="heading__container">
      <h1 className="form__heading">
        Let us Know!
      </h1>
      {/* <p>
        Let us know about your and your goals
      </p> */}
    </div>
  );
};

const FormInput = ({ type, name, placeholder, required }) => {
  return (
    <input type={type} className="input" name={name} placeholder={placeholder} required={required} />
  );
};

const FormTextarea = () => {
  return (
    <textarea id="message" name="message" className="textarea" placeholder="Message..." autoComplete="off"></textarea>
  );
};

const FormButton = () => {
  return (
    <button className="button red-button btn__form">
      <div className="button-content">
        <span className="text">Get In Touch</span>
      </div>
    </button>
  );
};


