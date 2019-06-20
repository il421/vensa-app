import React from 'react';
import { shallow } from 'enzyme';
import { DoctorProfile } from '../../../components/booking/DoctorProfile';
import { list, profile } from '../../fixtures/doctors';


test('should render DoctorProfile correctly', () => {

  const wrapper = shallow(<DoctorProfile doctors={ list } profile={ profile } />);
  expect(wrapper).toMatchSnapshot();
});
