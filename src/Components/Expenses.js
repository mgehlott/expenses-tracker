import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import { useState } from "react/cjs/react.development";
import { logDOM } from "@testing-library/react";
import ExpenseChart from "../NewExpense/ExpenseChart.";

const Expenses = ({ items }) => {
  const [selectedFilter, setSelectedFilter] = useState("2021");

  const filterChangeHandler = (filter) => {
    setSelectedFilter(filter);
  };

  const filterData = items.filter((item) => {
    //  console.log(item.date.getFullYear().toString());
    return item.date.getFullYear().toString() === selectedFilter;
  });

  //  console.log(filterData);

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilter}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseChart data={filterData} />
        {console.log("data   " + filterData)}
        <ExpenseList data={filterData} />

        {/*  <ExpensesItem
        title={items[0].title}
        price={items[0].price}
        date={items[0].date}
      />
      <ExpensesItem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
      <ExpensesItem
        title={items[2].title}
        price={items[2].price}
        date={items[2].date}
      />
      <ExpensesItem
        title={items[3].title}
        price={items[3].price}
        date={items[3].date}
      /> */}
      </Card>
    </li>
  );
};

export default Expenses;
