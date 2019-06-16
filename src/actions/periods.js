import moment from 'moment';

export const setDaysPart = (daysPart) => ({
  type: 'SET_DAYS_PART',
  daysPart
});

export const setInterval = (day) => {
  let interval = [];
  interval.push(day);

  let d = moment(day).subtract(1, 'day').valueOf();
  interval.unshift(d);

  d = moment(d).subtract(1, 'day').valueOf();
  interval.unshift(d);

  d = moment(day).add(1, 'day').valueOf();
  interval.push(d);

  d = moment(d).add(1, 'day').valueOf();
  interval.push(d);

  return {
    type: 'SET_DATES_INTERVAL',
    interval
  };
};
