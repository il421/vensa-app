import React from 'react';
import { shallow } from 'enzyme';
import Booking from '../../components/Booking';

test('should render Booking', () => {
  const wrapper = shallow(<Booking />);
  expect(wrapper).toMatchSnapshot();
});
