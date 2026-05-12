import React, { createContext, useContext, useState } from 'react';

interface ExpenseContextType {
  expenses: number[];
  addExpense: (expense: number) => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC = ({ children }) => {
  const [expenses, setExpenses] = useState<number[]>([]);

  const addExpense = (expense: number) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseProvider');
  }
  return context;
};