import Utilities from '../../libs/utilities';
import { list } from '../fixtures/doctors';
import { daysPart } from '../fixtures/periods';


test('should return [] if not available time', () => {

  const result = Utilities.filterAvailableTime(list, daysPart);
  expect(result).toEqual([]);
});

test('should return slots if not available time', () => {

  const result = Utilities.filterAvailableTime(list, 0);
  expect(result).toEqual(list);
});
