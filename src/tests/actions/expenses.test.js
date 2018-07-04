import {
  addExpense,
  removeExpense,
  editExpense
} from "../../actions/expenses.js";


test("Should setup removeExpense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should setup editExpense action object", () => {
  const action = editExpense("123abc", { note: "new note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new note"
    }
  });
});

test("Should setup addExpense action object", () => {
  const descriptionData = {
    description: "some description",
    note: "some note",
    amount: 100,
    createdAt: 1000
  };
  const action = addExpense(descriptionData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "some description",
      note: "some note",
      amount: 100,
      createdAt: 1000
    }
  });
});

test("Should setup addExpense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id : expect.any(String)
    }
  });
});
