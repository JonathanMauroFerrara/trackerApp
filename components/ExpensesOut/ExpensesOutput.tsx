import React from "react";
import { StyleSheet, View } from "react-native";
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
    <View style={styles.container}>
      <View>
        <ExpensesSummary periodTitle={expensesPeriod} expenses={expenses} />
      </View>
      {/* <View>
        <ExpensesList expenses={expenses} />
      </View> */}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {},
});
