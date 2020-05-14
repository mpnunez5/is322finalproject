import React from 'react';

const TransactionItem = props => {
    return (
        <div className="card" style={{ width: '100%', textAlign: "center"}}>
            <div className = "card-body">
            <li className="list-group-item cardStyle" style={{ textAlign: 'center' }}>

                <h5>Transaction #{props.transaction._id}</h5>

                <strong>Account ID:</strong> {props.transaction.accountId}
                &emsp;|&emsp;
                <strong>Description:</strong> {props.transaction.name}
                &emsp;|&emsp;
                <strong>Type:</strong> {props.transaction.type}
                &emsp;|&emsp;
                <strong>Amount:</strong> ${ props.transaction.amount}
            </li>
            </div>
        </div>
    )
};

export default TransactionItem;