import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { colorPalette } from "../../constants/colors";
import { ExpensesContext } from "../../context/expense-context";
import { CategoryEnum, TSingleExpenses } from "../../types";
import IconButton from "../ui/IconButton";
import Input from "./Input";
import Select from "./Select";

const ExpensesForm = ({ className, handleModal }: any) => {
  const { addExpense } = useContext(ExpensesContext);
  const [inputValues, setInputValue] = useState<TSingleExpenses>({
    id: "",
    name: "",
    amount: 0,
    date: new Date(),
    category: CategoryEnum.Other,
    iconType: "home",
  });

  const handleOnChange = (field: string, value: string) => {
    console.log(typeof field);
    if (field === "amount") {
      return setInputValue({ ...inputValues, [field]: parseInt(value) });
    }
    setInputValue({ ...inputValues, [field]: value });
  };

  const onSubmit = useCallback(() => {
    addExpense(inputValues);
    handleModal(false);
  }, [inputValues]);

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
        value={inputValues.amount}
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
        placeholder="Select a category"
        btnStyle={styles.selectBtn}
        dropDownStyle={styles.dropDown}
        textColor={colorPalette.white}
      />

      <IconButton
        btnText="Add Expense"
        onPress={onSubmit}
        color="white"
        textColor={colorPalette.primary500}
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
    backgroundColor: colorPalette.white,
    padding: 15,
    marginTop: 230,
    borderRadius: 10,
    alignItems: "flex-end",
    borderWidth: 2,
    borderColor: colorPalette.primary500,
  },
  selectBtn: {
    backgroundColor: colorPalette.primary700,
    padding: 8,
    height: 50,
    marginTop: 25,
    borderRadius: 8,
    width: "100%",
    color: colorPalette.white,
  },
  dropDown: {
    backgroundColor: colorPalette.primary700,
    padding: 8,
    marginTop: 25,
    borderRadius: 8,
    color: colorPalette.white,
  },
});
