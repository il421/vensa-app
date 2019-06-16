import React from 'react';
import moment from 'moment';

const DaySelector = ({ interval, handleDayChange }) => (
  <>
    {
      interval.length > 0 &&
      interval.map((d, index) => (
        <div key={ index } className="date-selector">
          <input
            id={`day-${index}`}
            type="radio"
            name="day"
            value={ d }
            checked={ moment(interval[2]).format('DD') === moment(d).format('DD') }
            onChange={ handleDayChange }
          />
          <label htmlFor={ `day-${index}` } className="pointer">
            <div>{moment(d).format('DD')}</div>
            <div>{moment(d).format('ddd')}</div>
          </label>
        </div>
      ))
    }
  </>
);

export default DaySelector;
