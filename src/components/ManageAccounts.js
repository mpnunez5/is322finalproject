import React from 'react';
import { connect } from 'react-redux';
import {deposit} from '../actions';
import {editAccount} from "../actions";
import {withdraw} from '../actions';

class ManageAccounts extends React.Component {
    state = {_id: '', amount: '', depositID:'', depositAmount:'', editName:"", editID:''}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.withdraw(this.state._id,this.state.amount);
        this.setState({_id:'',amount:''})
    };
    onDepositFormSubmit = (event) => {
        event.preventDefault();
        this.props.deposit(this.state.depositID,this.state.depositAmount);
        this.setState({depositID:'', depositAmount:''})

    };
    onEditSubmit = (event) => {
        event.preventDefault();
        this.props.editAccount(this.state.editName, this.state.editID);
        this.setState({editName:'', editID:''})
    }


    render() {
        return(
            <div>
                <h6><h6 style={{color: "white"}}>can i get uhhhh separation</h6></h6>
               <div class="row">
                 <div class="col-sm-6">
                     <div class="card bg-light mb-3" style={{width: "100%", padding: 10}}>
                        <h2 className = "card-title" style={{width: '100%', textAlign:'center'}}>Withdraw Money</h2>
                        <form className="form-group" onSubmit={this.onFormSubmit}>
                            <div className="card-body" style={{width: '100%', textAlign:'center'}}>
                                <label>Account ID</label>
                                <input type="text" className="form-control" value={this.state._id}
                                       onChange={(e) => this.setState({ _id: e.target.value })}/>
                                <p></p>
                               <label>Withdraw Amount</label>
                                <input type="text" className="form-control" value={this.state.amount}
                                       onChange={(e) => this.setState({ amount: e.target.value })}/>
                                   <p></p>
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                            </div>
                        </form>
                     </div>
                    </div>

                   <div class="col-sm-6">
                    <div class="card bg-light mb-3">
                        <h2 className="card-title " style={{width: '100%', textAlign:'center', padding: 10}}>Deposit Money</h2>
                        <form onSubmit={this.onDepositFormSubmit}>
                            <div className="card-body" style={{width: '100%', textAlign:'center'}}>
                                <label>Account ID</label>
                                <input type="text" className="form-control" value={this.state.depositID}
                                       onChange={(e) => this.setState({ depositID: e.target.value })}/>
                                <p></p>
                               <label>Deposit Amount</label>
                                <input type="text" className="form-control" value={this.state.depositAmount}
                                       onChange={(e) => this.setState({ depositAmount: e.target.value })}/>
                                <p></p>
                                <button type="submit" className="btn btn-primary mb-2">Deposit</button>
                               <p></p>
                            </div>
                        </form>
                    </div>
                 </div>
               </div>

                <h6 style={{color: "white"}}>can i get uhhhh separation</h6>
                <div class="card mb-3" style={{padding: 20}}>

                <h2>Edit Account Name</h2>
                <form className="form-group" onSubmit={this.onEditSubmit}>
                    <div className="form-group">
                        <label>Enter Account ID:</label>
                        <input type="text" className="form-control" value={this.state.editID}
                               onChange={(e) => this.setState({ editID: e.target.value })}/>
                        <p></p>
                        <label>Enter Name Name for the Account:</label>
                        <input type="text" className="form-control" style={{padding : "10px"}} value={this.state.editName}
                               onChange={(e) => this.setState({ editName: e.target.value })}/>

                    </div>
                    <button type="submit" className="btn btn-primary mb-2 align-content-center">Edit Name</button>

                </form>
                </div>

            </div>
        )
    }
}
export default connect(null, {withdraw, deposit, editAccount})(ManageAccounts);