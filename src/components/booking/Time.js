import React from 'react';
import moment from 'moment';

const Time = ({ slot }) => (
  <div className="time pointer" >
    { moment(slot).format('HH:mm') }
  </div>
);

export default Time;
