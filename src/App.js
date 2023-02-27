import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2022, 1, 25) },
    { title: "Toilet Paper", amount: 12.67, date: new Date(2022, 2, 25) },
    { title: "New TV", amount: 656.67, date: new Date(2022, 1, 22) },
    { title: "New Phone", amount: 1294.67, date: new Date(2022, 4, 27) },
  ];

  return (
    <div>
      <h1>My Todos</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

<ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>

<ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

<ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>

      
    </div>
  );
}

export default App;
