import React from 'react';
import { Link } from 'react-router-dom';

export const OptionsPage = () => (
  <main>
    <section className="options content-container">
      <div className="options__btn">
        <Link className="btn btn--options" to="/booking">Book an appointment</Link>
      </div>
      <div className="options__logo">
        <img src="./img/logo.svg" alt="Vensa logo" />
      </div>
      <div className="options__btn">
        <Link className="btn btn--options" to="/registration">Registration</Link>
      </div>
    </section>
  </main>
);

export default OptionsPage;
