import React from 'react';
import { shallow } from 'enzyme';
import { Doctor } from '../../../components/booking/Doctor';
import { list } from '../../fixtures/doctors';
import { daysPart } from '../../fixtures/periods';
jest.mock('utilities');

let fetchDoctorProfile, history;

beforeEach(() => {
  fetchDoctorProfile = jest.fn();
  history = { push: jest.fn() };
});

test('should render Doctor correctly', () => {

  const wrapper = shallow(
    <Doctor
      key={ 0 } doctor={ list[0] }
      daysPart={ daysPart } history={ history }
      fetchDoctorProfile={ fetchDoctorProfile }
    />
    );
  expect(wrapper).toMatchSnapshot();
});
