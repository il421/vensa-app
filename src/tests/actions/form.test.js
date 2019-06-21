import { setUserDetails }  from '../../actions/form';

test('should setup set form action object with data', () => {
  const form = {
    agree: true,
    name: 'Ilya',
    surname: 'Suglobov',
    birth: '09.07.1985',
    phone: '0224576834',
    email: 'il.suglobov@gmail.com',
    password: '123'
  };

  const action = setUserDetails(form);
  expect(action).toEqual({
    type: 'SET_USER_DETAILS',
    form
  });
});
