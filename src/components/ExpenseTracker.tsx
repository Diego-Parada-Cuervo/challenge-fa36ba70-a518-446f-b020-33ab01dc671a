import React from 'react';
import { useExpenseContext } from '../context/ExpenseContext';
import { errorHandler } from '../utils/errorHandler';

const ExpenseTracker: React.FC = () => {
  const { expenses, addExpense } = useExpenseContext();

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const expenseInput = document.getElementById('expense') as HTMLInputElement;
    const expense = parseFloat(expenseInput.value);
    if (isNaN(expense)) {
      errorHandler('Invalid expense amount');
      return;
    }
    addExpense(expense);
    expenseInput.value = '';
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleAddExpense}>
        <input type="number" id="expense" placeholder="Enter expense" required />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;