import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

<<<<<<< HEAD
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
=======
  const addExpenseHandler = expense => {
    console.log('In App.js');
>>>>>>> 15a467853a7e630899d613c377901292f6f5f124
    console.log(expense);
  };

  return (
    <div>
<<<<<<< HEAD
      <NewExpense onAddExpense={addExpenseHandler} />
=======
      <NewExpense  onAddExpense={addExpenseHandler}/>
>>>>>>> 15a467853a7e630899d613c377901292f6f5f124
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
