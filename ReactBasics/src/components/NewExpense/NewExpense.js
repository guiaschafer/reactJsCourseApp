import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [adding, setAdding] = useState(false);


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setAdding(false);
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {adding ?
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelAdding={setAdding} />
        :
        <button type='submit' onClick={() => setAdding(true)}>Add New Expense</button>

      }
    </div>
  );
};

export default NewExpense;
