import moment from 'moment';

const HOURS_FORMAT = 'HH';

export default class Utilities {

  static filterAvailableTime(availableSlots, daysPart) {

    let slots = [];
    Object.keys(availableSlots).forEach((key) => {
      slots.push(availableSlots[key]);
    });

    return slots.filter((slot) => {
      const hour = moment(slot).format(HOURS_FORMAT);
      if (Number(hour) < daysPart) {
        return false;
      }
      return true;
    } );
  }
}
