import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from '../reducers/doctors';
import periodsReducer from '../reducers/periods';
import formReducer from '../reducers/form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creating
export default () => {
  const store = createStore(
    combineReducers({
      doctors: doctorsReducer,
      periods: periodsReducer,
      form: formReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
