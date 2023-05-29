import React from "react";
import { StyleSheet, View } from "react-native";
import { colorPalette } from "../../constants/colors";
import { TExpensesList } from "../../types";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({
  expenses,
  expensesPeriod,
}: {
  expenses: TExpensesList;
  expensesPeriod: string;
}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodTitle={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.primary200,
  },
});
