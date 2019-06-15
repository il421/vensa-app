import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import OptionsPage from '../components/views/OptionsPage';
import Booking from '../components/booking/Booking';
import Registration from '../components/registration/Registration';
import NotFoundPage from '../components/views/NotFoundPage';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={ history }>
    <>
      <Switch>
        <Route path="/" component={ OptionsPage } exact={ true } />
        <Route path="/booking" component={ Booking } />
        <Route path="/registration" component={ Registration } />
        <Route component={ NotFoundPage } />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
