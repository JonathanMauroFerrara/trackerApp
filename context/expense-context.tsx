import {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { TSingleExpenses } from "../types";
import { getExpenses, storeExpense } from "../utils/https";

export const ExpensesContext = createContext({
  expenses: [] as TSingleExpenses[],
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
      return [
        { ...action.payload, iconType: "home", date: new Date() },
        ...state,
      ];

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
      return state.filter(
        (expenses: TSingleExpenses) => expenses.id !== action.payload
      );

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<TSingleExpenses[]>([]);
  const [expensesState, dispatch] = useReducer(expensesReducer, data);

  async function fetchExpenses() {
    const res = await getExpenses();
    setData(res);
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  function addExpense(expensesData: TSingleExpenses) {
    dispatch({ type: "ADD", payload: expensesData });
    fetchExpenses();
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
    fetchExpenses();
  }

  function updateExpense(expenseData: TSingleExpenses) {
    dispatch({ type: "UPDATE", payload: expenseData });
    fetchExpenses();
  }

  const value = {
    expenses: data,
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
