import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { colorPalette } from "../../constants/colors";
import { ExpensesContext } from "../../context/expense-context";
import { CategoryEnum, TSingleExpenses } from "../../types";
import IconButton from "../ui/IconButton";
import Input from "./Input";
import Select from "./Select";
import { storeExpense } from "../../utils/https";

const ExpensesForm = ({ className, isEdit, data }: any) => {
  const navigation = useNavigation();
  const { addExpense, deleteExpense, updateExpense } =
    useContext(ExpensesContext);
  const [inputValues, setInputValue] = useState<TSingleExpenses>(
    data || {
      id: "",
      name: "",
      amount: 0,
      date: new Date(),
      category: CategoryEnum.Other,
      iconType: "home",
    }
  );

  console.log("values", inputValues);

  const handleOnChange = (field: string, value: string | number) => {
    setInputValue({ ...inputValues, [field]: value });
  };

  const handleDelete = useCallback(
    (id: string) => {
      deleteExpense(inputValues.id);
      goBackHistory();
    },
    [inputValues]
  );

  const handleEdit = useCallback(() => {
    updateExpense({ ...inputValues });
    goBackHistory();
  }, [inputValues]);

  const goBackHistory = useCallback(() => {
    return navigation.goBack();
  }, [navigation]);

  const onSubmit = async () => {
    try {
      const newId = await storeExpense({ ...inputValues });
      addExpense({ ...inputValues, date: new Date(), id: newId });
      goBackHistory();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.wrapper}>
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
          value={inputValues.amount ? inputValues.amount.toString() : ""}
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
      </View>

      <View style={styles.buttonSection}>
        <IconButton
          size={25}
          onPress={() => {
            isEdit ? handleEdit() : onSubmit();
          }}
          btnText={isEdit ? "Edit" : "Add"}
          textColor={colorPalette.primary700}
          className={[styles.buttonContainer, styles.editBtn]}
        />
        <IconButton
          size={25}
          onPress={() => {
            isEdit ? handleDelete(inputValues?.id) : goBackHistory();
          }}
          btnText={isEdit ? "Delete" : "Cancel"}
          textColor={colorPalette.white}
          className={[styles.buttonContainer, styles.deleteBtn]}
        />
      </View>
    </View>
  );
};

export default ExpensesForm;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    flex: 1,
  },
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
  buttonSection: {
    position: "absolute",
    bottom: 100,
    width: "100%",
  },
  buttonContainer: {
    borderRadius: 10,
    marginTop: 5,
  },
  editBtn: {
    backgroundColor: colorPalette.white,
    marginBottom: 15,
  },
  deleteBtn: {
    backgroundColor: colorPalette.red,
  },
});
