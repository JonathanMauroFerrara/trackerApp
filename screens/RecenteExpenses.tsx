import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
import { ExpensesContext } from "../context/expense-context";
import { TSingleExpenses } from "../types";
import { getDateMinusDays } from "../utils/getDateMinusDays";

const RecenteExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  const last7daysExpenses = expenses.filter((expenses: TSingleExpenses) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return expenses.date > date7daysAgo;
  });

  return (
    <GradientContainer>
      <Container>
        <ExpensesOutput
          expenses={last7daysExpenses}
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
