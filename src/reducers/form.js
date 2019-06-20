const formDefaultState = {
  agree: false,
  name: '',
  surname: '',
  birth: '',
  phone: '',
  email: '',
  password: ''
};

export default (state = formDefaultState, action) => {
  switch (action.type) {
  case 'SET_USER_DETAILS':
    return  action.form;

  default:
    return state;
  }
};
