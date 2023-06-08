import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colorPalette } from "../../constants/colors";
import { TSingleExpenses } from "../../types";
import { formatDate } from "../../utils/dateFormatter";

const ExpenseItem = ({ name, amount, date }: TSingleExpenses) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate()}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{formatDate(date)}</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    margin: 8,
    backgroundColor: colorPalette.white,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: colorPalette.primary700,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
    maxWidth: 150,
  },
  amount: {
    backgroundColor: colorPalette.primary500,
    color: "white",
    borderRadius: 5,
    width: 60,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
    alignItems: "center",
  },
  amountText: {
    color: colorPalette.white,
  },
});
