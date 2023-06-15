import React from "react";
import { View } from "react-native";
import { TExpensesList } from "../../types";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
}: {
  expenses: TExpensesList;
  expensesPeriod: string;
}) => {
  return (
    <View>
      <ExpensesSummary periodTitle={expensesPeriod} expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
