import React from "react";
import { NavLink } from "react-router-dom";

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <NavLink to={"edit/" + id} activeClassName="is-active" exact={true}>
        {description}
      </NavLink>
    </h3>
    <h2>{amount}</h2>
    <h3>{createdAt}</h3>
  </div>
);

export default ExpenseListItem;
