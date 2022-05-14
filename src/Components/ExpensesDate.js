import "./ExpensesDate.css";

const ExpensesDate = ({ dateOb }) => {
  const month = dateOb.toLocaleString("in-US", { month: "long" });
  const day = dateOb.toLocaleString("in-US", { day: "2-digit" });
  const year = dateOb.getFullYear();

  return (
    <div className="expense-date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
};

export default ExpensesDate;
