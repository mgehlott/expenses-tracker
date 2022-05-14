import { useState } from "react/cjs/react.development";
import Expenses from "./Components/Expenses";
import ExpensesItem from "./Components/ExpensesItem";
import NewExpense from "./NewExpense/NewExpense";

const INTIAL_DATA = [
  {
    id: 1,
    title: "Car Insurance",
    price: 435.45,
    date: new Date(2020, 7, 14),
  },
  {
    id: 2,
    title: "New TV",
    price: 779,
    date: new Date(2021, 2, 12),
  },
  {
    id: 3,
    title: "Car Insurance",
    price: 444.44,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "New Desk(Wooden)",
    price: 349,
    date: new Date(2021, 11, 12),
  },
];

const App = () => {
  const [expensedata, setExpenseData] = useState(INTIAL_DATA);

  const addExpensHandler = (expenss) => {
    const ndata = { ...expenss };
    console.log("in app js");
    console.log(ndata);

    setExpenseData((predata) => {
      return [ndata, ...predata];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpensHandler} />
      <Expenses items={expensedata} />
    </>
  );
};

export default App;
