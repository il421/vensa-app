import React from 'react';

const PeriodSelector = () => {
  const periods = [
    {
      title: 'morning',
      value: 0
    },
    {
      title: 'afternoon',
      value: 1
    },
    {
      title: 'evening',
      value: 2
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
              defaultChecked={ p.value === periods[1].value }
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

export default PeriodSelector;
