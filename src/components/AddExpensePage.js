import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm.js";
import { addExpense } from "../actions/expenses.js";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <p>This is from Expense Page</p>
        <ExpenseForm buttonName="Add Expense" onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(addExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
