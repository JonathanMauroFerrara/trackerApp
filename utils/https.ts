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

async function deleteExpense(id: string){
    try{
        const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/expenses/${id}.json`)
    }catch(e){
        console.log("delete error", e)
    }
}

async function updateExpense(data: TSingleExpenses){
    try{
        const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/expenses/${data.id}.json`, {...data})
    }catch(e){
        console.log("edit error", e)
    }
}


export { getExpenses, storeExpense, deleteExpense, updateExpense };
