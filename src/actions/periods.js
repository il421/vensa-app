import moment from 'moment';

export const setDaysPart = (daysPart) => ({
  type: 'SET_DAYS_PART',
  daysPart
});

export const setInterval = (day) => {
  let interval = [];
  interval.push(day);

  // set interval of yesterday, today, and tomorrow
  for(let i = 1; i < 3; i++) {
    let d = moment(day).subtract(i, 'day').valueOf();
    interval.unshift(d);
  }

  for(let i = 1; i < 3; i++) {
    let d = moment(day).add(i, 'day').valueOf();
    interval.push(d);
  }

  return {
    type: 'SET_DATES_INTERVAL',
    interval
  };
};
