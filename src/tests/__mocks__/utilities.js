// import moment from 'moment';
// const HOURS_FORMAT = 'HH';
//
// import { list } from '../fixtures/doctors';
// import { daysPart } from '../fixtures/periods';
//
// export default class Utilities {
//
//   static filterAvailableTime() {
//     let slots = [];
//     Object.keys(list).forEach((key) => {
//       slots.push(list[key]);
//     });
//
//     return slots.filter((slot) => {
//       const hour = moment(slot).format(HOURS_FORMAT);
//       if (Number(hour) < daysPart) {
//         return false;
//       }
//       return true;
//     } );
//   }
// }

const utilities = jest.genMockFromModule('utilities');
module.exports = utilities;

