import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';

import moment from 'moment';
import { fetchDoctorsData } from './actions/doctors';
import { setInterval } from './actions/periods';

import 'normalize.css/normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';
import {toast} from 'react-toastify';

// toast config
toast.configure({
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  className: 'form__toast',
  bodyClassName: 'form__toast-body'
});

const store = configStore();

// set initial days interval, and fetch doctors data
const currentDate = moment().format('YYYY-MM-DD');

store.dispatch(fetchDoctorsData(currentDate));
store.dispatch(setInterval(moment().valueOf()));

const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
