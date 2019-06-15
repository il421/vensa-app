import React from 'react';
import moment from 'moment';

const DaySelector = ({ day, interval, handleInputChange }) => (
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
            defaultChecked={ moment(day).format('DD') === moment(d).format('DD') }
            disabled={ moment(day).format('DD') > moment(d).format('DD') }
            onChange={ handleInputChange }
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
