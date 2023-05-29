type TSingleExpenses = {
    id: string,
    name: string,
    description: string,
    amount: number,
    iconType: string,
}

type TExpensesList = TSingleExpenses[];


export { TSingleExpenses, TExpensesList };

