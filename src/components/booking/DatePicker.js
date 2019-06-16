import React, { Component } from 'react';
import { connect } from 'react-redux';

import DaySelector from './DaySelector';
import PeriodSelector from './DaysPartSelector';
import Calendar from 'react-calendar/dist/entry.nostyle';

import { setInterval, setDaysPart } from '../../actions/periods';
import { fetchDoctorsData } from '../../actions/doctors';

import moment from 'moment';

export class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCalendar: false
    };
  }

  handleDayChange = (evt) => {
    const day = evt.target.value;
    const formatedDate = moment(Number(day)).format('YYYY-MM-DD');

    this.props.setInterval(Number(day));
    this.props.fetchDoctorsData(formatedDate);
  }

  handleDaysPartChange = (evt) => {
    const data = evt.target.value;
    this.props.setDaysPart(Number(data));
  };

  toggleDisplayCalendar = () => {
    this.setState((prevState) => ({
      displayCalendar: !prevState.displayCalendar
    }));
  }

  render() {
    return (
      <div className="date-picker">
        <div className="date-picker__months">
          <div className="pointer"> { moment(this.props.interval[2]).format('MMMM') }</div>
          <div
            className="pointer"
            onClick={ this.toggleDisplayCalendar }
          >
            <img src="./img/icons/icon--calendar.svg" alt="Display calendar icon." />
          </div>
        </div>

        {
          this.state.displayCalendar ? (
            <Calendar
              calendarType="Hebrew"
            />
          ) : (
            <div>
              <div className="date-picker__days">
                <DaySelector
                  interval={ this.props.interval }
                  day={ this.props.interval[2] }
                  handleDayChange={ this.handleDayChange }
                />
              </div>

              <div className="date-picker__periods">
                <PeriodSelector
                  handleDaysPartChange={ this.handleDaysPartChange }
                />
              </div>
            </div>
          )
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    interval: state.periods.interval
  };
};

const mapDispatchToProps = (dispatch) => ({
  setInterval: (day) => dispatch(setInterval(day)),
  setDaysPart: (part) => dispatch(setDaysPart(part)),
  fetchDoctorsData: (day) => dispatch(fetchDoctorsData(day)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
