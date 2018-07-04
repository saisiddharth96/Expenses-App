import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList.js";
import expenses from "../fixtures/expenses.js";

test("should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList without expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
