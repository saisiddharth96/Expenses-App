import moment from "moment";
import filterReducer from "../../reducers/filters.js";

test("should setup default filter value", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should setup set text filter", () => {
  const state = filterReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "hello"
  });
  expect(state).toEqual({
    text: "hello",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should sort by amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should sort by date", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set start date", () => {
  const state = filterReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment(0)
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: moment().endOf("month")
  });
});

test("should set end date", () => {
  const state = filterReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment(0)
  });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment(0)
  });
});
