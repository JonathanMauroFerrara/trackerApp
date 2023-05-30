import React from "react";
import { StyleSheet } from "react-native";
import Container from "../components/Container/Container";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import GradientContainer from "../components/GradientContainer/GradientContainer";
import { DUMMY_EXPENSES } from "../constants/dummyData";

const RecenteExpenses = () => {
  return (
    <GradientContainer>
      <Container>
        <ExpensesOutput
          expenses={DUMMY_EXPENSES}
          expensesPeriod="Last 7 days"
        />
      </Container>
    </GradientContainer>
  );
};

export default RecenteExpenses;

const styles = StyleSheet.create({
  tabBarContainer: {
    paddingTop: 100,
  },
});
