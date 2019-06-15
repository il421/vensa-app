import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from '../reducers/doctors';
import datesReducer from '../reducers/dates';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creating
export default () => {
  const store = createStore(
    combineReducers({
      doctors: doctorsReducer,
      dates: datesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
