import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
import { ExpensesContext } from "../context/expense-context";
import { TSingleExpenses } from "../types";
import { getDateMinusDays } from "../utils/getDateMinusDays";
import { getExpenses } from "../utils/https";

const RecenteExpenses = () => {
  const [filteredData, setFilteredData] = useState<TSingleExpenses[]>([]);
  const { expenses } = useContext(ExpensesContext);

  async function fetchExpenses() {
    if (expenses) {
      const filteredExpenses: TSingleExpenses[] = expenses.filter(
        (expenses: TSingleExpenses) => {
          const today = new Date();
          const date7daysAgo = getDateMinusDays(today, 7);
          return expenses.date > date7daysAgo;
        }
      );
      setFilteredData(filteredExpenses);
    }
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <GradientContainer>
      <Container>
        <ExpensesOutput
          expenses={filteredData ?? []}
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
