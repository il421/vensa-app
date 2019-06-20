import React from 'react';
import { shallow } from 'enzyme';
import DaySelector from '../../../components/booking/DaySelector';
import { interval } from '../../fixtures/periods';


test('should render DaySelector correctly', () => {
  const handleDayChange = jest.fn();
  const wrapper = shallow(<DaySelector interval={ interval } handleDayChange = { handleDayChange } />);
  expect(wrapper).toMatchSnapshot();
});
