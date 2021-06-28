import './App.css';
import { FC } from 'react';
import ExpenseItem from 'components/ExpenseItem/index';

const App: FC = () => {

  const expenses = [
    { id: 1, title: 'Car Insurance', amount: 260.56, date: new Date("2021-06-16") },
    { id: 2, title: 'McDonalds', amount: 2.97, date: new Date("2021-06-18") },
    { id: 3, title: 'Tennis Racquet', amount: 199.99, date: new Date("2021-06-26") },
    { id: 4, title: 'Dinner for Two', amount: 25.36, date: new Date("2021-06-28") },
    { id: 5, title: 'Loan Payment', amount: 237.12, date: new Date("2021-06-30") },
  ];
  return (
    <div className="App">
      <ExpenseItem data={expenses}/>
    </div>
  );
}

export default App;
