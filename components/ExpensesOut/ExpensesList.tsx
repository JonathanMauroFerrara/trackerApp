import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TExpensesList, TSingleExpenses } from "../../types";

const ExpensesList = ({ expenses }: { expenses: TExpensesList }) => {
  const singleExpenses = ({
    name,
    amount,
    description,
    id,
    iconType,
  }: TSingleExpenses) => (
    <View style={styles.container}>
      {/* <Text>{id}</Text> */}
      <Text>{name}</Text>
      <Text>{amount}</Text>
      {/* <Text>{description}</Text> */}
    </View>
  );

  return (
    <FlatList
      id={expenses[0].id}
      data={expenses}
      renderItem={({ item }) => singleExpenses(item)}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
});
