import { REACT_APP_BASE_URL } from '@env';
import axios from "axios";
import { TSingleExpenses } from "../types";

async function storeExpense(data: TSingleExpenses) {
    const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/expenses.json`, data)
    const id = res.data.name;
    return id;
}

async function getExpenses(){
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/expenses.json`)

    const expenses = []

    for(const key in res.data as TSingleExpenses){
        const expenseObj = {
            id: key,
            amount: res.data[key].amount,
            date: new Date (res.data[key].date),
            name: res.data[key].name,
            iconType: res.data[key].iconType,
            category: res.data[key].category
        }
        expenses.push(expenseObj)
    }
    return expenses.reverse();
}


export { getExpenses, storeExpense };
