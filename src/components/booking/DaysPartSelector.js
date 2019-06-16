import React from 'react';

const DaysPartSelector = ({ handleDaysPartChange }) => {
  const periods = [
    {
      title: 'morning',
      value: 0
    },
    {
      title: 'afternoon',
      value: 12
    },
    {
      title: 'evening',
      value: 18
    }
  ];

  return (
    <>
      {
        periods.map((p, index) => (
          <div key={index} className="period-selector">
            <input
              id={`period-${index}`}
              type="radio"
              name="period"
              value={ p.value }
              defaultChecked={ p.value === periods[0].value }
              onChange={ handleDaysPartChange }
            />
            <label htmlFor={`period-${index}`} className="pointer">
              <div>{ p.title }</div>
            </label>
          </div>
        ))
      }
    </>
  );
};

export default DaysPartSelector;
