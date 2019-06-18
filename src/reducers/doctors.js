const doctorsDefaultState = {
  profile: {},
  list: []
};

export default (state = doctorsDefaultState, action) => {
  switch (action.type) {
  case 'SET_DOCTORS_DATA':
    return {
      ...state,
      list: action.list
    };

  case 'SET_DOCTOR_PROFILE':
    return {
      ...state,
      profile: action.profile
    };

  default:
    return state;
  }
};
