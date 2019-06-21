import { list, profile } from '../fixtures/doctors';
import { interval } from '../fixtures/periods';
import { setDoctorsData, setDoctorProfile, fetchDoctorsData, fetchDoctorProfile } from '../../actions/doctors';
import axiosMock  from '../__mocks__/axios';


import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

test('should setup set doctors data', () => {

  const action = setDoctorsData(list);
  expect(action).toEqual({
    type: 'SET_DOCTORS_DATA',
    list
  });
});


test('should setup set doctor profile data', () => {

  const action = setDoctorProfile(profile);
  expect(action).toEqual({
    type: 'SET_DOCTOR_PROFILE',
    profile
  });
});

// @todo need to finish two tests
// const SCHEDULE = 'https://frontendchallenge2019.azurewebsites.net/api/Schedule/undefined';
//
// test('should fetch doctors data', (done) => {
//   const store = createMockStore();
//
//   store.dispatch(fetchDoctorsData({list})).then(() => {
//     const actions = store.getActions();
//
//     axiosMock.get.mockImplementation((SCHEDULE) => {
//       if (SCHEDULE) {
//         return Promise.resolve({ data: { results: list} });
//       }
//     });
//
//     expect(actions[0]).toEqual({
//       type: 'SET_DOCTORS_DATA',
//       list
//     });
//
//     // expect(axiosMock.get).toHaveBeenCalledTimes(1);
//     // expect(axiosMock.get).toHaveBeenCalledWith(SCHEDULE)
//     done();
//   });
// });

