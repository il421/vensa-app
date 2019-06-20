import React from 'react';
import { shallow } from 'enzyme';
import {DoctorsList} from '../../../components/booking/DoctorsList';
import { list } from '../../fixtures/doctors';


test('should render DoctorsList correctly', () => {

  const wrapper = shallow(<DoctorsList doctors={ list } />);
  expect(wrapper).toMatchSnapshot();
});
