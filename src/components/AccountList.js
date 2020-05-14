import React from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from "../actions";

class AccountList extends React.Component {
    renderList () {
        let accountArr = this.props['accounts'];

        return accountArr.map(account => {
            return (
                <div className="card" style={{width: '100%', textAlign : "center"}} key={account.id}>
                    <div className="card-body">
                        <h5 className="card-subtitle mb-2">Name: {account.name}</h5>
                        <h6 className="card-title">Account ID: { account._id}</h6>
                        <h6 className="card-subtitle">Balance: ${account.balance}</h6>
                        <h6></h6>

                        <button type='button'
                                onClick={() => {this.props.deleteAccount(account._id)}}
                                className="btn btn-danger">
                            Delete Account
                        </button>
                    </div>
                </div>
            );
        });
    }


    render() {
        let accountList = this.renderList();
        return <div className="card">
            <div className="card-header">
                <h3 style={{textAlign: "center"}}>Account Database</h3>
            </div>
            <ul className="list-group list-group-flush">
                {accountList}
            </ul>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    }
};

export default connect(mapStateToProps, {deleteAccount}) (AccountList);
