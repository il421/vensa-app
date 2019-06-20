import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="content-container not-found">
    <img src="./img/logo.svg" alt="Vensa logo" />
    <div>We are sorry, but the page you requested was not found!</div>
    <Link className="btn btn--options" to="/">Dashboard</Link>
  </div>
);

export default NotFoundPage;
