import React from 'react';
import { shallow } from 'enzyme';
import { NavigatePage } from '../../components/NavigatePage';

test('should render NavigatePage correctly', () => {

  const wrapper = shallow(<NavigatePage />);
  expect(wrapper).toMatchSnapshot();
});


test('should call startLogin on btn click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<NavigatePage startLogin={ startLogin } />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
