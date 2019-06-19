import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReadMoreAndLess from 'react-read-more-less';
import Iframe from 'react-iframe';

import { Media } from '../../libs/media-config';

export class DoctorProfile extends Component {

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
              src={ Media.getUrl().DoctorImg + this.props.profile.PictureURL }
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
                width="100%"
                url={ Media.getUrl().GoogleMap }
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
                          src={ Media.getUrl().DoctorImg + doctor.PictureURL}
                          width="101"
                          height="101"
                          alt={`Picture of ${doctor.Name}`}
                        />
                      </div>
                      <div>
                        {doctor.Name}
                      </div>
                      <div>
                        <Link
                          className="btn btn---book-now pointer"
                          to="/booking"
                        >
                        Book now
                        </Link>
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

export default DoctorProfile;
