import React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from '../../../components/booking/DatePicker';
import { list } from '../../fixtures/doctors';
import { daysPart, interval } from '../../fixtures/periods';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <DatePicker interval={interval[2]}
    />
  );
});

test('should render DatePicker correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should initMonths correctly, and set months', () => {
  const inst = wrapper.instance();
  inst.initMonths(interval[2]);

  const result = [1560976121817, 1563568121817, 1566246521817]

  expect(wrapper.state('months')).toEqual(result);
});

test('should toggle calendar correctly', () => {
  const inst = wrapper.instance();
  inst.toggleDisplayCalendar();

  expect(wrapper.state('displayCalendar')).toBe(true);
});
