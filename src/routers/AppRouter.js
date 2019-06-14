import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavigatePage from '../components/NavigatePage';
import Booking from '../components/Booking';
import Registration from '../components/Registration';
import NotFoundPage from '../components/NotFoundPage';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={ history }>
    <main>
      <Switch>
        <Route path="/" component={ NavigatePage } exact={ true } />
        <Route path="/booking" component={ Booking } />
        <Route path="/registration" component={ Registration } />
        <Route component={ NotFoundPage } />
      </Switch>
    </main>
  </Router>
);

export default AppRouter;
