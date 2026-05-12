import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ExpenseProvider } from '../src/context/ExpenseContext';
import ExpenseTracker from '../src/components/ExpenseTracker';

describe('ExpenseContext', () => {
  test('adds an expense to the list', () => {
    render(
      <ExpenseProvider>
        <ExpenseTracker />
      </ExpenseProvider>
    );
    const expenseInput = screen.getByPlaceholderText('Enter expense');
    fireEvent.change(expenseInput, { target: { value: '100' } });
    fireEvent.click(screen.getByText('Add Expense'));
    expect(screen.getByText('100')).toBeInTheDocument();
  });
});