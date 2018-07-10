import React from "react";
import moment from 'moment'
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm.js";

import expenses from "../fixtures/expenses.js";

test("should render expense form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expense form with expense data", () => {
  const wrapper = shallow(
    <ExpenseForm
      description={expenses[0].description}
      note={expenses[0].note}
      amount={expenses[0].amount}
      createdAt={expenses[0].createdAt}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should  set description", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value }
    });

  expect(wrapper.state("description")).toBe(value);
});

test("should add note", () => {
  const value = "some note text";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });

  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
  const value = "20.1";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if valid input is not passed", () => {
  const value = "216.155";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe("");
});

test("should call on submit form on submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date onDateChange', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test('should set onFocussedChanged on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find("SingleDatePicker").prop("onFocusChange")({focused})
  expect(wrapper.state("calenderFocused")).toBe(focused);
})
