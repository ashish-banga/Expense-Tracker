import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const dummy_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 50.85,
    date: new Date(2020, 7, 4),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 25.57,
    date: new Date(2021, 1, 7),
  },
  {
    id: "e3",
    title: "Physique",
    amount: 100.45,
    date: new Date(2020, 1, 1),
  },
  {
    id: "e4",
    title: "Entertainment",
    amount: 250.26,
    date: new Date(2022, 4, 14),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import NewExpense from "./components/NewExpense/NewExpense";
// import Expenses from "./components/Expenses/Expenses";
// const App = () => {
//   const [counter , setCounter] = useState(0);
//   const addCounter = () => {
//     setCounter(counter + 1);
//     console.log(counter);
//   }
//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={addCounter}>Add</button>
//       <button onClick={() => setCounter(0)}>Reset</button>
//       <button onClick={() => setCounter(counter - 1)}>Subtract</button>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0,
//     };
//   }
//   addCounter=()=>{
//     const {counter}=this.state;
//     this.setState({
//       counter : counter + 1
//     })
//   }
//   render() {
//     const {counter}=this.state;
//     return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={this.addCounter}>Add</button>
//       <button onClick={() => this.setState({counter: 0})}>Reset</button>
//       <button onClick={() => this.setState({counter : counter -1})}>Subtract</button>{" "}
//     </div>
//     );
//   }
// }
// export default App;
