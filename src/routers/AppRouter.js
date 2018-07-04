import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import  ExpenseDashboardPage  from "../components/ExpenseDashboardPage.js";
import  AddExpensePage  from "../components/AddExpensePage.js";
import  HelpPage  from "../components/HelpPage.js";
import EditExpense from '../components/EditExpense.js'
import  NotFoundPage  from "../components/NotFoundPage.js";
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header/>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component = {EditExpense}/>
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
