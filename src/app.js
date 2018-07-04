import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configurestore.js";
import { addExpense } from "./actions/expenses.js";
import { setTextFilter } from "./actions/filters.js";
import getVisibleExpenses from "./selectors/expenses.js";


const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

store.dispatch(
  addExpense({
    description: "Water bill for this month",
    amount: 200,
    createdAt: 1500
  })
);
store.dispatch(
  addExpense({
    description: "Gas bill for this month",
    amount: 500,
    createdAt: 1700
  })
);
store.dispatch(
  addExpense({
    description: "Rent for this month",
    amount: 20210,
    createdAt: 1500
  })
);


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
