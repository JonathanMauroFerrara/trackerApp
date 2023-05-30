
type TSingleExpenses = {
    id: string,
    name: string,
    description: string,
    amount: number,
    iconType: string,
}

type TExpensesList = TSingleExpenses[];


type TGradientContainerProps = {
  firstColorGradient?: string;
  secondColorGradient?: string;
}


export { TSingleExpenses, TExpensesList, TGradientContainerProps };

