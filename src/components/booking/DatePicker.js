import React, { Component } from 'react';
import { connect } from 'react-redux';
import DaySelector from './DaySelector';
import PeriodSelector from './PeriodSelector';
import { setSelectedDay } from '../../actions/dates';
import moment from 'moment';

export class DatePicker extends Component {

  handleInputChange = (evt) => {
    const day = evt.target.value;
    this.props.setSelectedDay(Number(day));
  }


  render() {
    return (
      <div className="date-picker">
        <div className="date-picker__months">
          <div className="pointer"> { moment(this.props.day).format('MMMM') }</div>
          <div className="pointer">
            <img src="./img/icons/icon--bag.svg" alt="Bag icon!" />
          </div>
        </div>

        <div className="date-picker__days">
          <DaySelector
            interval={ this.props.interval }
            day={ this.props.day }
            handleInputChange={ this.handleInputChange }
          />
        </div>

        <div className="date-picker__periods">
          <PeriodSelector />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    day: state.dates.day,
    interval: state.dates.interval
  };
};


const mapDispatchToProps = (dispatch) => ({
    setSelectedDay: (day) => dispatch(setSelectedDay(day))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
