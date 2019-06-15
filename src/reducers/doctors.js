const doctorsDefaultState = [];

export default (state = doctorsDefaultState, action) => {
  switch (action.type) {
  case 'SET_DOCTORS_DATA':
    return action.doctors;

  default:
    return state;
  }
};
