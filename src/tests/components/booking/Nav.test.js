import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../../components/booking/Nav';

test('should render Nav correctly', () => {

  const wrapper = shallow(<Nav />);
  expect(wrapper).toMatchSnapshot();
});
