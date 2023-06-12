import { PropsWithChildren, createContext, useReducer } from "react";
import { CategoryEnum, TSingleExpenses } from "../types";

export const DUMMY_EXPENSES: TSingleExpenses[] = [
  {
    id: "1",
    name: "Movie tickets",
    amount: 20,
    iconType: "film",
    category: CategoryEnum.Entertainment,
    date: new Date("2023-01-19"),
  },
  {
    id: "2",
    name: "Restaurant dinner",
    amount: 50,
    iconType: "utensils",
    category: CategoryEnum.Food,
    date: new Date("2023-06-19"),
  },
  {
    id: "3",
    name: "Grocery shopping",
    amount: 80,
    iconType: "shopping-cart",
    category: CategoryEnum.Groceries,
    date: new Date("2023-06-5"),
  },
  {
    id: "4",
    name: "Doctor's appointment",
    amount: 60,
    iconType: "heartbeat",
    category: CategoryEnum.Health,
    date: new Date("2023-04-5"),
  },
  {
    id: "5",
    name: "Home decor",
    amount: 100,
    iconType: "home",
    category: CategoryEnum.Home,
    date: new Date("2023-02-5"),
  },
  {
    id: "6",
    name: "Online shopping",
    amount: 120,
    iconType: "shopping-bag",
    category: CategoryEnum.Other,
    date: new Date("2023-06-10"),
  },
  {
    id: "7",
    name: "Public transportation",
    amount: 15,
    iconType: "bus",
    category: CategoryEnum.Transportation,
    date: new Date("2023-06-12"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({
    name,
    amount,
    date,
    category,
    iconType,
  }: TSingleExpenses) => {},
  deleteExpense: (id: string) => {},
  updateExpense: ({
    id,
    name,
    amount,
    date,
    category,
    iconType,
  }: TSingleExpenses) => {},
});

function expensesReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];

    case "UPDATE":
      //salvo l'index dell'elemento da modificare
      const updatableExpensesIndex = state.findIndex(
        (expense: TSingleExpenses) => expense.id === action.payload.id
      );
      const newArray = [...state];
      newArray[updatableExpensesIndex] = {
        ...newArray[updatableExpensesIndex],
        ...action.payload,
      };

      return newArray;

    case "DELETE":
      console.log(action);
      return state.filter(
        (expenses: TSingleExpenses) => expenses.id !== action.payload
      );
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: PropsWithChildren) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expensesData: TSingleExpenses) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(expenseData: TSingleExpenses) {
    dispatch({ type: "UPDATE", payload: expenseData });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
