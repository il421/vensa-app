import React, { Component } from 'react';
import { connect } from 'react-redux';

import DaySelector from './DaySelector';
import MonthsSelector from './MonthsSelector';
import PeriodSelector from './DaysPartSelector';
import Calendar from 'react-calendar/dist/entry.nostyle';

import { setInterval, setDaysPart } from '../../actions/periods';
import { fetchDoctorsData } from '../../actions/doctors';

import moment from 'moment';

export class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCalendar: false,
      months: [],
      activeStartDay: new Date(),
    };
  }

  componentDidMount() {
    this.initMonths(this.props.interval[2]);
  }

  handleDayChange = (evt) => {
    const day = evt.target.value;
    const formatedDate = moment(Number(day)).format('YYYY-MM-DD');

    this.props.setInterval(Number(day));
    this.props.fetchDoctorsData(formatedDate);
  }

  handleDaysPartChange = (evt) => {
    // set days part
    const data = evt.target.value;
    this.props.setDaysPart(Number(data));
  };

  toggleDisplayCalendar = () => {
    this.setState((prevState) => ({
      displayCalendar: !prevState.displayCalendar
    }));
  }

  initMonths = (day) => {
    // getting current and two next months
    let months = [];
    months.push(moment(day).valueOf());
    months.push(moment(day).add(1, 'month').valueOf());
    months.push(moment(day).add(2, 'month').valueOf());

    this.setState(() => ({ months }));
  }

  setSelectedDay = (day) => {
    // set selected date and fetch new timetable
    const formatedDate = moment(Number(day)).format('YYYY-MM-DD');

    this.props.setInterval(Number(day));
    this.props.fetchDoctorsData(formatedDate);
  }

  populateMonthDates = (month) => {
    const activeStartDay = moment(month).toDate();
    this.setState(() => ({ activeStartDay }));
  }

  render() {
    return (
      <div className="date-picker">
        <div className="date-picker__months">

          <MonthsSelector
            months={ this.state.months }
            displayCalendar={ this.state.displayCalendar }
            populateMonthDates={ this.populateMonthDates }
          />

          <div
            className="date-picker__btn pointer"
            onClick={ this.toggleDisplayCalendar }
          >
            <img src="./img/icons/icon--calendar.svg" alt="Display calendar icon." />
          </div>
        </div>

        <Calendar
          className={ !this.state.displayCalendar ? 'react-calendar--toggle' : '' }
          calendarType="Hebrew"
          formatShortWeekday={ (locale, date) => moment(date).format('dd').slice(0,1) }
          showFixedNumberOfWeeks={ true }
          showNavigation={ false }
          onClickDay={ (day) => this.setSelectedDay(moment(day).valueOf()) }
          activeStartDate={ this.state.activeStartDay }
        />
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
