import ExpensesDate from "./ExpensesDate";
import { useState } from "react";
import "./ExpensesItem.css";
import Card from "../UI/Card";
const ExpensesItem = ({ title, date, price }) => {
  const [name, setName] = useState(title);
  const clickHandler = () => {
    setName("Updated!!!");
    console.log(name);
  };

  return (
    <Card className="expense-item">
      <ExpensesDate dateOb={date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price" onClick={clickHandler}>
          ${price}
        </div>
      </div>
    </Card>
  );
};

export default ExpensesItem;
