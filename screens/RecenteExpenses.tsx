import React from "react";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import { DUMMY_EXPENSES } from "../constants/dummyData";

const RecenteExpenses = () => {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Now" />;
};

export default RecenteExpenses;
