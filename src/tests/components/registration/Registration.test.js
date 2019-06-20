import React from 'react';
import { shallow } from 'enzyme';
import Registration from '../../../components/registration/Registration';

test('should render Registration correctly', () => {
  const wrapper = shallow(<Registration />);
  expect(wrapper).toMatchSnapshot();
});
