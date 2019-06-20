import React from 'react';
import { shallow } from 'enzyme';
import DaysPartSelector from '../../../components/booking/DaysPartSelector';

test('should render DaysPartSelector correctly', () => {
  const handleDaysPartChange = jest.fn();
  const wrapper = shallow(<DaysPartSelector  handleDaysPartChange = { handleDaysPartChange } />);
  expect(wrapper).toMatchSnapshot();
});
