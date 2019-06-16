import moment from 'moment';

const filterAvailableTime = (doctors, periods) => {

  if(doctors.length > 0) {
    for (let i = 0; i < doctors.length; i++) {
      const { AvailableSlots} = doctors[i];

      for (let key in AvailableSlots) {
        const hour = moment(AvailableSlots[key]).format('HH');
        if (Number(hour) < periods.daysPart) {
          delete AvailableSlots[key];
        }
      }
    }
  }

  return [...doctors];
};

export default filterAvailableTime;
