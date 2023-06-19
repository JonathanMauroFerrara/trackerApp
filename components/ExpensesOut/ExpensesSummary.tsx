import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TExpensesList } from "../../types";
import ExpensesList from "./ExpensesList";

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
        <Text style={styles.title}>{periodTitle}</Text>
        <Text style={styles.value}>{`$ ${expensesSum.toFixed(2)}`}</Text>
      </View>
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            There aren't expenses in the last 7 days
          </Text>
        </View>
      )}
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
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
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  message: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
