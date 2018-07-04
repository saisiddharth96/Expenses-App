import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem.js";
import getVisibleExpenses from "../selectors/expenses.js";

export const ExpenseList = props => (
  <div>
    <h1>Expense List component</h1>
    {props.expenses.length === 0 ? (
      <p>No expenses yet! Please add some</p>
    ) : (
      props.expenses.map(expense => (
        <ExpenseListItem
          key={expense.id}
          description={expense.description}
          amount={expense.amount}
          createdAt={expense.createdAt}
          id={expense.id}
          dispatch
        />
      ))
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
