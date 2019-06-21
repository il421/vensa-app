import { list, profile } from '../fixtures/doctors';
import doctorsReducer from '../../reducers/doctors';


test('should set default state', () => {

  const doctorsDefaultState = {
    profile: {},
    list: []
  };
  const state = doctorsReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual(doctorsDefaultState);
});

test('should set doctors data', () => {
  const action = {
    type: 'SET_DOCTOR_DATE',
    list
  };

  const state = doctorsReducer({list}, action);

  expect(state).toEqual({list});
})

test('should doctor profile', () => {
  const action = {
    type: 'SET_DOCTOR_PROFILE',
    profile
  };

  const state = doctorsReducer({profile}, action);

  expect(state).toEqual({profile});
})
