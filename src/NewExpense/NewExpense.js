import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ onAddExpense }) => {
  const saveExpenseHandler = (newEx) => {
    const newexpenss = { ...newEx };
    onAddExpense(newexpenss);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
