const MORNING = 0;
const periodsDefaultState = {
  interval: [],
  daysPart: MORNING
};

export default (state = periodsDefaultState, action) => {
  switch (action.type) {
  case 'SET_DAYS_PART':
    return {
      ...state,
      daysPart: action.daysPart
    }

  case 'SET_DATES_INTERVAL':
    return {
      ...state,
      interval: action.interval
    }

  default:
    return state;
  }
};
