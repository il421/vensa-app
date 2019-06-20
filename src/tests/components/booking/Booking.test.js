import React from 'react';
import { shallow } from 'enzyme';
import Booking from '../../../components/booking/Booking';


test('should render Booking correctly', () => {

  const wrapper = shallow(<Booking />);
  expect(wrapper).toMatchSnapshot();
});
