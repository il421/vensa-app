import React from 'react';
import { shallow } from 'enzyme';
import { Doctor } from '../../../components/booking/Doctor';
import { list } from '../../fixtures/doctors';
import { daysPart } from '../../fixtures/periods';

import Utilities from '../../../libs/utilities';
jest.mock('../../../libs/utilities');

let fetchDoctorProfile, history;

beforeEach(() => {
  fetchDoctorProfile = jest.fn();
  history = { push: jest.fn() };
});

test('should render Doctor correctly', () => {
  Utilities.filterAvailableTime.mockReturnValueOnce([]);
  const wrapper = shallow(
    <Doctor
      key={ 0 } doctor={ list[0] }
      daysPart={ daysPart } history={ history }
      fetchDoctorProfile={ fetchDoctorProfile }
    />
  );
  expect(wrapper).toMatchSnapshot();
});
