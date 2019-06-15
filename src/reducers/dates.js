import moment from 'moment';

const datesDefaultState = {
  day: moment().valueOf(),
  interval: []
};

export default (state = datesDefaultState, action) => {
  switch (action.type) {
  case 'SET_DAY':
    state.day = action.day;
    return state;

  case 'SET_INTERVAL':
    state.interval = action.interval;
    return state;

  default:
    return state;
  }
};
