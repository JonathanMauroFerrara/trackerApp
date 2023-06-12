import React from "react";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
import { DUMMY_EXPENSES } from "../constants/dummyData";

const AllExpenses = () => {
  return (
    <GradientContainer>
      <Container>
        <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod="Total" />
      </Container>
    </GradientContainer>
  );
};

export default AllExpenses;
