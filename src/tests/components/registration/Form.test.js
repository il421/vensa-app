import React from 'react';
import { shallow } from 'enzyme';
import {Form} from '../../../components/registration/Form';
// import {DatePicker} from "../../../components/booking/DatePicker";
// import {interval} from "../../fixtures/periods";

let wrapper;

beforeEach(() => {
  const form = [
    {
      id: 'name',
      type: 'text',
      filledOut: false,
      autofocus: true,
      hasLabel: false,
      hidden: false
    },
    {
      id: 'surname',
      type: 'text',
      filledOut: false,
      autofocus: false,
      hasLabel: true,
      hidden: false
    }
  ];

  const filterFocusedInputs = jest.fn();
  const setUserDetails = jest.fn();
  const history = { push: jest.fn() };
  wrapper = shallow(
    <Form
      form={ form }
      filterFocusedInputs={filterFocusedInputs}
      setUserDetails={setUserDetails}
      histor={history}
    />
  );
});

test('should render Form correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
