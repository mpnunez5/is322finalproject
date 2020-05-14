import React from 'react';
import { connect } from 'react-redux';
import {newAccount} from '../actions';

class AddNewAccount extends React.Component {
    state = {
        name: '',
        balance: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.newAccount(this.state.name,this.state.balance);
        this.setState({name:'',balance:''})
    };

    render() {
        return(
            <div>
                <h6 style={{color: "white"}}>can i get uhhh some separation</h6>
                <h2>Create a New Account</h2>
                <form className="form-group" onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Enter new account name:</label>
                        <input type="text" className="form-control" id="name" value={this.state.name}
                               onChange={(e) => this.setState({ name: e.target.value })}/>
                        <p></p>
                        <label htmlFor="amount">Enter initial account balance:</label>
                        <input type="text" className="form-control" id="amount" value={this.state.balance}
                               onChange={(e) => this.setState({ balance: e.target.value })}/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add Account</button>

                </form>
            </div>
        )
    }
}
export default connect(null, { newAccount})(AddNewAccount);