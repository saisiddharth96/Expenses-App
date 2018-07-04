import expensesReducer from "../../reducers/expenses.js";
import expenses from "../fixtures/expenses.js";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    id: "4",
    description: "Power bill",
    note: "",
    amount: 900,
    createdAt: moment(0)
      .add(8, "days")
      .valueOf()
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
});

test("should remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should edit expense with id", () => {
    const description = "New Power bill"
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test("should not edit expense with id", () => {
    const description = "New Power bill"
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
