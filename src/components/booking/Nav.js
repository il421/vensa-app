import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav className="nav">
    <Link className="nav__back" to="/">
      <img src="./img/icons/icon--back.svg" alt="Go to th option page" />
    </Link>
    <div className="nav__logo">
      <img src="./img/logo.svg" alt="Vensa logo" />
    </div>
    <div className="nav__help">
      HELP
    </div>
  </nav>
);

export default Nav;
