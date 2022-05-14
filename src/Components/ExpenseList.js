import ExpensesItem from "./ExpensesItem";
import "./ExpenseList.css";

const ExpenseList = ({ data }) => {
  // let content = <p>No Expenses Found !!</p>;
  if (data.length === 0)
    return <p className="no-found">No Expenses Found !!!</p>;

  return (
    <ul className="list">
      {data.map((i) => (
        <ExpensesItem
          key={i.id}
          title={i.title}
          price={i.price}
          date={i.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
