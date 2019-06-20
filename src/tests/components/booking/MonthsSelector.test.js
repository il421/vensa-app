import React from 'react';
import { shallow } from 'enzyme';
import MonthsSelector from '../../../components/booking/MonthsSelector';

test('should render DaySelector correctly', () => {

  const months = [1562587200000, 1565265600000, 1567944000000];
  const displayCalendar = true;
  const populateMonthDates = jest.fn();

  const wrapper = shallow(<MonthsSelector
    months={ months } populateMonthDates={ populateMonthDates } displayCalendar={ displayCalendar }
  />);
  expect(wrapper).toMatchSnapshot();
});
