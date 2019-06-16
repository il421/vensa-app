import React from 'react';
import Time from './Time';

const Doctor = ({ Name, Title, PictureURL, AvailableSlots }) => (
  <article className="doctor">
    <div className="doctor__info">
      <div className="doctor__img">
        <img src={`https://frontendchallenge2019.azurewebsites.net${ PictureURL }`} />
      </div>
      <div className="doctor__title">
        <div>{ Name }</div>
        <div>{ Title }</div>
      </div>
    </div>

    <div className="doctor__time">
      {
        Object.keys(AvailableSlots).length > 0 ?
          Object.keys(AvailableSlots).map((key, index) => (
            <Time
              key={ index }
              slot={ AvailableSlots[key] }
            />
          )) :
          (
            <div className="time time--no">No appointment available for this date</div>
          )
      }
    </div>
  </article>
);

export default Doctor;
