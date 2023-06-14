import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colorPalette } from "../../constants/colors";
import { CategoryEnum, TSingleExpenses } from "../../types";
import IconButton from "../ui/IconButton";
import Input from "./Input";
import Select from "./Select";

const ExpensesForm = ({ className }: any) => {
  const [inputValues, setInputValue] = useState<TSingleExpenses>({
    id: Math.random().toString(),
    name: "",
    amount: 0,
    date: new Date(),
    category: CategoryEnum.Other,
    iconType: "",
  });

  const handleOnChange = (field: string, value: string) => {
    setInputValue({ ...inputValues, [field]: value });
  };

  return (
    <View style={className}>
      <Input
        label="name"
        onChange={handleOnChange}
        placeholder="Type name of expenses"
        value={inputValues.name}
        inputClassName={styles.input}
        className={styles.inputContainer}
      />
      <Input
        label="amount"
        type="decimal-pad"
        onChange={handleOnChange}
        placeholder="Type the amount"
        value={inputValues.amount.toString()}
        inputClassName={styles.input}
        className={styles.inputContainer}
      />
      <Select
        items={[
          "Entertainment",
          "Food",
          "Groceries",
          "Health",
          "Home",
          "Other",
          "Transportation",
        ]}
        onChange={handleOnChange}
        label="Category"
        value={inputValues.category}
      />

      <IconButton
        btnText="Add Expense"
        onPress={() => {}}
        color="white"
        textColor="white"
        size={20}
        className={styles.button}
      />
    </View>
  );
};

export default ExpensesForm;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: colorPalette.white,
    padding: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: colorPalette.primary700,
    padding: 8,
    marginTop: 25,
    borderRadius: 8,
    alignItems: "flex-end",
  },
});
