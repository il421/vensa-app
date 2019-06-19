import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchDoctorProfile } from '../../actions/doctors';
import { Media } from '../../libs/media-config';

import Time from './Time';
import Utilities from '../../libs/utilities';

export const Doctor = ({ Id, Name, Title, PictureURL, AvailableSlots, daysPart, fetchDoctorProfile, history }) => {

  const displayDoctorProfile = async (id) => {
    await fetchDoctorProfile(id);

    history.push(`/profile/${id}`);
  };

  return (
    <article className="doctor">
      <div
        className="doctor__info pointer"
        onClick={ () => displayDoctorProfile(Id) }
      >

        <div className="doctor__img">
          <img src={ Media.getUrl().DoctorImg + PictureURL } width="81" height="81" />
        </div>
        <div className="doctor__title">
          <div>{Name}</div>
          <div>{Title}</div>
        </div>
      </div>

      <div className="doctor__time">
        {
          Utilities.filterAvailableTime(AvailableSlots, daysPart).length > 0 ?
            Utilities.filterAvailableTime(AvailableSlots, daysPart).map((slot, index) => (
              <Time
                key={index}
                slot={slot}
              />
            )) :
            (
              <div className="time time--no">No appointment available for this date</div>
            )
        }
      </div>
    </article>
  );};

const mapStateToProps = (state) => {
  return {
    daysPart: state.periods.daysPart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDoctorProfile: (id) => dispatch(fetchDoctorProfile(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Doctor)
);
