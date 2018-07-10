import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate
} from "../actions/filters.js";
import { DateRangePicker } from "react-dates";
import uuid from 'uuid'

class ExpenseListFilter extends Component {
  state = {
    calenderFocussed: null,
    endDateId : uuid(),
    startDateId : uuid()
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChanged = calenderFocussed => {
    this.setState(() => ({ calenderFocussed }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            e.target.value === "date"
              ? this.props.dispatch(sortByDate())
              : this.props.dispatch(sortByAmount());
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocussed}
          onFocusChange={this.onFocusChanged}
          numberOfMonths={1} 
          isOutsideRange={() => false}
          startDateId = {this.state.startDateId}
          endDateId = {this.state.endDateId}
          showClearDates = {true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseListFilter);
