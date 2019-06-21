import formReducer from '../../reducers/form';

test('should set default form', () => {
  const formDefaultState = {
    agree: false,
    name: '',
    surname: '',
    birth: '',
    phone: '',
    email: '',
    password: ''
  };

  const state = formReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual(formDefaultState);
});

test('should set form', () => {

  const form = {
    agree: true,
    name: 'Ilya',
    surname: 'Suglobov',
    birth: '09.07.1985',
    phone: '0224576834',
    email: 'il.suglobov@gmail.com',
    password: '123'
  };
  const action = {
    type: 'SET_USER_DETAILS',
    form: form
  };

  const state = formReducer(form, action);

  expect(state).toEqual(form);
})
