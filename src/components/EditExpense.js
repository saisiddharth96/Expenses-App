import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import { connect } from "react-redux";
import { removeExpense, editExpense } from "../actions/expenses.js";

const EditExpense = props => {
  // console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        buttonName="Edit Expense"
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
          // console.log("updated", expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpense);
