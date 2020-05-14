import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AccountList from "./AccountList";
import PageTabs from "./PageTab";
import AddNewAccount from "./AddNewAccount";
import Transactions from "./TransactionsList";
import ManageAccounts from "./ManageAccounts";
import { setAccounts, setTransactions } from "../actions";


class App extends React.Component {

    state = {
        view: 'page1',
        accounts: [],
        transactions:[]
    };

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {

        });
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
            .then(response => {
                this.props.setTransactions(response.data);
            });
    }

    onViewChange(view) {
        this.setState({ view });
    }

    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }

    render() {
       const { view } = this.state;

        switch (view) {
            case 'page1':
                return (this.wrapPage(
                    <AccountList />
                ));
            case 'page2':
                return (this.wrapPage(
                    <AddNewAccount />
                ));
            case 'page3':
                return (this.wrapPage(
                    <ManageAccounts />
                ));
            case 'page4':
                return (this.wrapPage(
                    <Transactions />
                ));
            default:
                return (this.wrapPage(
                    <h2>Invalid Tab, choose another</h2>
                ));
        }

    }

}
const mapStateToProps = (state) => {
    return {
        errorMessage: state.errors
    };
};

export default connect(mapStateToProps, { setAccounts, setTransactions })(App);