import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';

import moment from 'moment';
import { fetchDoctorsData } from './actions/doctors';
import { setInterval } from './actions/periods';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const currentDate = moment().format('YYYY-MM-DD');

const store = configStore();

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);
store.dispatch(fetchDoctorsData(currentDate));
store.dispatch(setInterval(moment().valueOf()));

ReactDOM.render(jsx, document.getElementById('app'));
