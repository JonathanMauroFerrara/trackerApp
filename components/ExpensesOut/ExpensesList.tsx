import React from "react";
import { FlatList } from "react-native";
import { TExpensesList, TSingleExpenses } from "../../types";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }: { expenses: TExpensesList }) => {
  const renderSingleExpenses = (props: TSingleExpenses) => (
    <ExpenseItem {...props} />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={expenses}
      renderItem={({ item }) => renderSingleExpenses(item)}
      style={{ marginTop: 20, height: "85%" }}
    />
  );
};

export default ExpensesList;
