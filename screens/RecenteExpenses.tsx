import React from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
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
