import { interval, daysPart } from '../fixtures/periods';
import { setDaysPart, setInterval } from '../../actions/periods';

test('should setup set days part with data', () => {

  const action = setDaysPart(daysPart);
  expect(action).toEqual({
    type: 'SET_DAYS_PART',
    daysPart
  });
});


test('should setup set interval with data', () => {

  const action = setInterval(interval[2]);
  expect(action).toEqual({
    type: 'SET_DATES_INTERVAL',
    interval
  });
});

