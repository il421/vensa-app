import React from 'react';
import moment from 'moment';

const MonthsSelector = ({ months, displayCalendar, populateMonthDates }) => {

  const handleInputChange = (evt) => {
    const month = evt.target.value;
    populateMonthDates(Number(month));
  }

  return (
    <>
      <div className="months">
        {
          displayCalendar ?

            months.map((m, index) => (
              <div key={index} className="months__month">
                <input
                  id={`month-${index}`}
                  type="radio"
                  name="month"
                  value={m}
                  onChange={ handleInputChange }
                  defaultChecked={m === months[0]}
                />
                <label htmlFor={`month-${index}`} className="pointer">{moment(m).format('MMMM')}</label>
              </div>
            )) : (
              <div>{moment(months[0]).format('MMMM')}</div>
            )
        }
      </div>
    </>
  );
};

export default MonthsSelector;
