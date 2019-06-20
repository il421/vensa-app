import React from 'react';
import { shallow } from 'enzyme';
import { OptionsPage } from '../../../components/views/OptionsPage';

test('should render OptionsPage correctly', () => {

  const wrapper = shallow(<OptionsPage />);
  expect(wrapper).toMatchSnapshot();
});
