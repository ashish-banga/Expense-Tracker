import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsediting] = useState(false);
  const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // setIsediting(false);
  };
  // const startEditingHandler = () => {
  //   setIsediting(true);
  // };
  const stopEditingHandler = (childVal) => {
    setIsediting(childVal);
    console.log(childVal);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => stopEditingHandler(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitExpenseData={submitExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
