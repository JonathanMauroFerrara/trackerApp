import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TExpensesList } from "../../types";

const ExpensesSummary = ({
  periodTitle,
  expenses,
}: {
  periodTitle: string;
  expenses: TExpensesList;
}) => {
  const expensesSum: number = expenses.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text>{periodTitle}</Text>
      <Text>{`$ ${expensesSum.toFixed(2)}`}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
