import React from "react";
import Container from "../components/Container/Container";
import ExpensesOutput from "../components/ExpensesOut/ExpensesOutput";
import GradientContainer from "../components/GradientContainer/GradientContainer";
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
