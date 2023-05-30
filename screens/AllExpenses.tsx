import React from "react";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import { DUMMY_EXPENSES } from "../constants/dummyData";

const AllExpenses = () => {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total" />;
};

export default AllExpenses;
