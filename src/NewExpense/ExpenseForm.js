import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpense }) => {
  const [newtitle, setNewTitle] = useState("");
  const [newamount, setNewAmount] = useState("");
  const [newdate, setNewDate] = useState("");

  const titleChangedHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setNewDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newdata = {
      title: newtitle,
      price: newamount,
      date: new Date(newdate),
      id: Math.random().toString(),
    };
    onSaveExpense(newdata);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newtitle} onChange={titleChangedHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            setp="0.1"
            value={newamount}
            onChange={amountChangedHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newdate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
