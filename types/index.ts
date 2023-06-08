type TSingleExpenses = {
    id: string,
    name: string,
    amount: number,
    iconType: string,
    category: CategoryEnum,
    date: Date,
}

type TExpensesList = TSingleExpenses[];

type TGradientContainerProps = {
  firstColorGradient?: string;
  secondColorGradient?: string;
}

enum CategoryEnum {
  Entertainment = "Entertainment",
  Food = "Food",
  Groceries = "Groceries",
  Health = "Health",
  Home = "Home",
  Other = "Other",
  Transportation = "Transportation",
}



export { TSingleExpenses, TExpensesList, TGradientContainerProps, CategoryEnum };

