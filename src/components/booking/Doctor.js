import React from 'react';


const Doctor = ({ doctor }) => (
  <article className="doctor">
    <div className="doctor__info">
      <div className="doctor__img">
        <img src={`https://frontendchallenge2019.azurewebsites.net${ doctor.PictureURL }`} />
      </div>
      <div className="doctor__title">
        <div>{ doctor.Name }</div>
        <div>{ doctor.Title }</div>
      </div>
    </div>

    <div className="doctor__time">

    </div>
  </article>
);

export default Doctor;
