import React from 'react';
import { connect } from 'react-redux';
import TransactionItem from './TransactionItem';

class TransactionList extends React.Component {

  render() {
      let transactionList = this.props.transactions.map(transaction => {
          return <TransactionItem transaction={transaction}/>
      });
      return (

      <div class="card">
        <div class="card-header"><h3 style={{ textAlign: "center" }}>All Transactions</h3></div>
        <ul class="list-group list-group-flush">
          {transactionList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
}

export default connect(mapStateToProps)(TransactionList);