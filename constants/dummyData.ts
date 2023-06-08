import { CategoryEnum, TSingleExpenses } from "../types";


export const DUMMY_EXPENSES: TSingleExpenses[] = [
  {
    id: "1",
    name: "Movie tickets",
    amount: 20,
    iconType: "film",
    category: CategoryEnum.Entertainment,
    date: new Date('2023-01-19'),
  },
  {
    id: "2",
    name: "Restaurant dinner",
    amount: 50,
    iconType: "utensils",
    category: CategoryEnum.Food,
    date: new Date('2023-06-19'),
  },
  {
    id: "3",
    name: "Grocery shopping",
    amount: 80,
    iconType: "shopping-cart",
    category: CategoryEnum.Groceries,
    date: new Date('2023-06-5'), 
  },
  {
    id: "4",
    name: "Doctor's appointment",
    amount: 60,
    iconType: "heartbeat",
    category: CategoryEnum.Health,
    date:  new Date('2023-04-5'), 
  },
  {
    id: "5",
    name: "Home decor",
    amount: 100,
    iconType: "home",
    category: CategoryEnum.Home,
    date:  new Date('2023-02-5'), 
  },
  {
    id: "6",
    name: "Online shopping",
    amount: 120,
    iconType: "shopping-bag",
    category: CategoryEnum.Other,
    date:  new Date('2023-06-10'), 
  },
  {
    id: "7",
    name: "Public transportation",
    amount: 15,
    iconType: "bus",
    category: CategoryEnum.Transportation,
    date:  new Date('2023-06-12'), 
  },
];
