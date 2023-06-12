import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
import { ExpensesContext } from "../context/expense-context";

const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  return (
    <GradientContainer>
      <Container>
        <ExpensesOutput expenses={expenses} expensesPeriod="Total" />
      </Container>
    </GradientContainer>
  );
};

export default AllExpenses;
