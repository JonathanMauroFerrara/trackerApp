import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import ExpensesForm from "../components/ExpenseForm/ExpensesForm";
import Container from "../components/ui/Container/Container";
import GradientContainer from "../components/ui/GradientContainer/GradientContainer";
import IconButton from "../components/ui/IconButton";
import { colorPalette } from "../constants/colors";
import { ExpensesContext } from "../context/expense-context";

const ManageExpenses = ({ route, navigation }: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState(route.params ?? "");

  useLayoutEffect(() => {
    if (data.id) {
      setIsEdit(true);
    }
  }, [data]);

  const { deleteExpense, updateExpense, addExpense } =
    useContext(ExpensesContext);

  const goBackHistory = useCallback(() => {
    return navigation.goBack();
  }, [navigation]);

  return (
    <GradientContainer
      firstColorGradient={colorPalette.primary300}
      secondColorGradient={colorPalette.primary500}
    >
      <Container>
        <IconButton
          iconName="close-circle-outline"
          color={colorPalette.white}
          onPress={() => goBackHistory()}
          className={{ alignSelf: "flex-end" }}
          size={45}
        />
        <ExpensesForm data={data} isEdit={isEdit} />
      </Container>
    </GradientContainer>
  );
};

export default ManageExpenses;
