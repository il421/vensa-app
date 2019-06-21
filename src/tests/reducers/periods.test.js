import { interval, daysPart } from '../fixtures/periods';
import periodsReducer from '../../reducers/periods';

const MORNING = 0;
const periodsDefaultState = {
  interval: [],
  daysPart: MORNING
};

test('should set default intervals', () => {

  const state = periodsReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual(periodsDefaultState);
});

test('should set daysPart', () => {
  const action = {
    type: 'SET_DAYS_PART',
    daysPart
  };

  const state = periodsReducer(daysPart, action);

  expect(state).toEqual({daysPart: 12});
})

test('should set interval', () => {
  const action = {
    type: 'SET_DATES_INTERVAL',
    interval
  };

  const state = periodsReducer({interval}, action);

  expect(state).toEqual({interval});
})
