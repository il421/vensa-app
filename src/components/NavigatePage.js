import React from 'react';
import { Link } from 'react-router-dom';

export const NavigatePage = () => (
  <>
    <section className="nav content-container">
      <div className="nav__btn">
        <Link className="btn btn--nav" to="/booking">Book an appointment</Link>
      </div>
      <div className="nav__logo">
        <img src="./img/logo.svg" alt="Vensa logo" />
      </div>
      <div className="nav__btn">
        <Link className="btn btn--nav" to="/registration">Registration</Link>
      </div>
    </section>
  </>
);

export default NavigatePage;
