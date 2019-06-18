import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { fetchDoctorProfile } from '../../actions/doctors';

import ReadMoreAndLess from 'react-read-more-less';
import Iframe from 'react-iframe';

export class DoctorProfile extends Component {

  async displayDoctorProfile(id) {
    await this.props.fetchDoctorProfile(id);

    this.props.history.push(`/profile/${id}`);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section>
        <article className="doctor-profile">
          <div className="doctor-profile__info info">
            <img
              className="info__img"
              src={`https://frontendchallenge2019.azurewebsites.net${ this.props.profile.PictureURL }`}
              width="130" height="130"
              alt={`Picture of ${ this.props.profile.Name }`}
            />
            <div className="info__name">{ this.props.profile.Name }</div>
            <div className="info__title">{ this.props.profile.Title }</div>
            <div className="info__btn">
              <Link className="btn" to='/booking'>Book an Appointment</Link>
            </div>
            <div className="info__description">
              <ReadMoreAndLess
                charLimit={200}
                readMoreText="Read more..."
                readLessText="Read less"
              >
                { this.props.profile.Description }
              </ReadMoreAndLess>
            </div>
          </div>

          <div className="doctor-profile__lang lang">
            <div className="lang__title">Languages spoken</div>
            <div className="lang__list">
              {
                this.props.profile.Languages.map((lang, index) => (
                  <div key={index}>{lang}</div>
                ))
              }
            </div>
          </div>

          <div className="doctor-profile__educ educ">
            <div className="educ__title">Languages spoken</div>
            <div className="educ__list">
              {
                this.props.profile.Degrees.map((deg, index) => (
                  <div key={index}>- {deg}</div>
                ))
              }
            </div>
          </div>

          <div className="doctor-profile__address address">
            <div className="address__title address__title--blue">Vensa Health Doctors</div>
            <div className="address__text">
              <img src="../img/icons/icon--pin.svg" alt="Pin icon"/>
              459 Great South Road, Penrose, Auckla…
            </div>
            <div className="address__map">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.445956178146!2d174.80548621540095!3d-36.903600490282976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48e70eeb143d%3A0x1d14688308f9b073!2s459+Great+South+Rd%2C+Penrose%2C+Auckland+1061!5e0!3m2!1sen!2snz!4v1560770332914!5m2!1sen!2snz"
                width="100%"
                height="288px"
                id="map"
                className="map"
                display="initial"
                position="relative"/>
            </div>
          </div>

          <div className="doctor-profile__doctors doctors">
            <div className="doctors__title">Vensa Health Doctors</div>
            <div className="doctors__list">
              {
                this.props.doctors.length > 0 &&
                this.props.doctors.map((doctor, index) =>
                  doctor.Id !== this.props.profile.Id && (
                    <div key={index} className="doctors__item">
                      <div>
                        <img
                          src={`https://frontendchallenge2019.azurewebsites.net${doctor.PictureURL}`}
                          width="101"
                          height="101"
                          alt={`Picture of ${doctor.Name}`}
                        />
                      </div>
                      <div>
                        {doctor.Name}
                      </div>
                      <div>
                        <div
                          className="btn btn---book-now pointer"
                          onClick={() => this.displayDoctorProfile(doctor.Id)}
                        >
                        Book now
                        </div>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>

          <div className="doctor-profile__footer">
            <div>&copy;2018 Vensa Health</div>
          </div>
        </article>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDoctorProfile: (id) => dispatch(fetchDoctorProfile(id))
  };
};

export default withRouter(
  connect (undefined, mapDispatchToProps)(DoctorProfile)
);
