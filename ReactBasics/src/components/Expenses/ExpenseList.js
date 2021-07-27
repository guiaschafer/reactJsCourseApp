import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = props => {

    if (props.items.length === 0) {
        return <h2 className="exenpenses-list__fallback">Found no expenses.</h2>
    }

    return (<ul className="expenses-list">
        {props.items.map(item =>
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date} F
            />)
        }
    </ul>)
}

export default ExpenseList;