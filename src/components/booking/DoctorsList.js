import React from 'react';
import { connect } from 'react-redux';
import Doctor from './Doctor';

export const DoctorsList = ({ doctors }) => (
  <main className="doctor-list">
    <section>
      {
        doctors.length > 0 &&
          doctors.map((doctor, index) => (
            <Doctor
              key={ index }
              { ...doctor }
            />
          ))
      }
    </section>
  </main>
);

const mapStateToProps = (state) => {
  return {
    doctors: state.doctors.list,
  };
};

export default connect(mapStateToProps)(DoctorsList);
