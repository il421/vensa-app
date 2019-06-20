import React from 'react';
import { shallow } from 'enzyme';
import Time  from '../../../components/booking/Time';
import { list } from '../../fixtures/doctors';

test('should render Time correctly', () => {

  const slot = list[0].AvailableSlots['2a65f9a6-f1a3-4d31-98a1-0092c694543c'];
  const wrapper = shallow(<Time slot={ slot } />);
  wrapper.find('time')
  expect(wrapper.find('.time').text()).toEqual('08:30');
  expect(wrapper).toMatchSnapshot();
});
