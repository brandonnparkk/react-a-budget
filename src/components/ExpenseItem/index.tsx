import {
  FC,
  Fragment
} from 'react';
import './style.css';

const ExpenseItem: FC<{ data: { id: number, title: string, amount: Number, date: Date }[] }> = ({ data }) => (
  <Fragment>
    {data.map(({ id, title, amount, date }) => (
      <div className="expense-item" key={id}>
        <div>{date.toString()}</div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </div>
    ))}
  </Fragment>
)

export default ExpenseItem;