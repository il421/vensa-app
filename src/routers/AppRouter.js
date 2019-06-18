import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { createBrowserHistory } from 'history';
import OptionsPage from '../components/views/OptionsPage';
import Booking from '../components/booking/Booking';
import DoctorProfile from '../components/booking/DoctorProfile';
import Registration from '../components/registration/Registration';
import NotFoundPage from '../components/views/NotFoundPage';
import { isEmpty } from 'lodash';

export const history = createBrowserHistory();

const AppRouter = (props) => (
  <Router history={ history } >
    <Route render={({ location }) => (
    <>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={ 500 }>
          <Switch location={ location }>
            <Route path="/" component={ OptionsPage } exact={ true } />
            <Route path="/booking" component={ Booking } />
            <Route path="/profile/:id" render={ () => (
              isEmpty(props.profile) ? (
                <Redirect to="/booking" />
              ) : (
                <DoctorProfile profile={props.profile} doctors={props.doctors} onUpdate={() => window.scrollTo(0, 0)} />
              )
            )} />

            <Route path="/registration" component={ Registration } />
            <Route component={ NotFoundPage } />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
    )}/>
  </Router>
);

const mapStateToProps = (state) => ({
  profile: state.doctors.profile,
  doctors: state.doctors.list
});

export default connect(mapStateToProps)(AppRouter);
