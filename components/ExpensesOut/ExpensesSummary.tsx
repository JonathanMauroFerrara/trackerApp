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
      <View style={styles.textContainer}>
        <Text style={styles.title}>Period</Text>
        <Text style={styles.value}>{periodTitle}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.value}>{`$ ${expensesSum.toFixed(2)}`}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  textContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 3,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  value: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
  },
});
