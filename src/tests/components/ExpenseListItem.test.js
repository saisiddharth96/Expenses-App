import React from "react";
import { shallow } from "enzyme";
import  expenses  from "../fixtures/expenses.js";
import { ExpenseListItem } from "../../components/ExpenseListItem";

const data = expenses[1];

test("should render a single", () => {
  const wrapper = shallow(
    <ExpenseListItem
      id={data.id}
      description={data.description}
      amount={data.amount}
      createdAt = {data.createdAt}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
