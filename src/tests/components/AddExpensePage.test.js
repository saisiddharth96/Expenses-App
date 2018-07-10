import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage.js";
import expenses from '../fixtures/expenses.js'

test("should render add expense page", () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage onsubmit={onSubmit} history={history} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage onsubmit={onSubmit} history={history} buttonName={"Add Expense"} />
  );
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
})
