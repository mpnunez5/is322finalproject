import { combineReducers } from "redux";


const DEFAULT_STATE = {
    accounts: [
        { "_id": 1, "name": "Lannisters", "balance": 1189.78, "status": "not_selected", transactions:[] },
        { "_id": 2, "name": "Starks", "balance": 567.71, "status": "not_selected", transactions:[] },
        { "_id": 3, "name": "Baratheons", "balance": 31.26, "status": "not_selected", transactions:[] },
        { "_id": 4, "name": "Targaryens", "balance": 34.75, "status": "not_selected", transactions:[] },
        { "_id": 5, "name": "Greyjoys", "balance": 9.03, "status": "selected", transactions:[] },
        { "_id": 6, "name": "Tyrells", "balance": 1133.45, "status": "not_selected", transactions:[] },
        { "_id": 7, "name": "Martells", "balance": 737.90, "status": "not_selected", transactions:[] },
        { "_id": 8, "name": "Tullys", "balance": 483.56, "status": "not_selected", transactions:[] },
        { "_id": 9, "name": "Arryns", "balance": 1035.83, "status": "not_selected", transactions:[] },
        { "_id": 10, "name": "Free Folk", "balance": -134.34, "status": "not_selected", transactions:[] }
    ],
    transactions: [
        { "_id": 1, "accountId": 1, "type": "deposit", "amount": 677.40, "name": "Account Opened" },
        { "_id": 2, "accountId": 1, "type": "deposit", "amount": 1000.00, "name": "Gold Mine Profits" },
        { "_id": 3, "accountId": 1, "type": "withdraw", "amount": 300.00, "name": "Iron Bank Interest" },
        { "_id": 4, "accountId": 1, "type": "withdraw", "amount": 402.34, "name": "Defenses of Kings Landing" },
        { "_id": 5, "accountId": 1, "type": "deposit", "amount": 214.72, "name": "Taxes from Kingdoms" },
        { "_id": 6, "accountId": 2, "type": "deposit", "amount": 500.00, "name": "Account Opened" },
        { "_id": 7, "accountId": 2, "type": "deposit", "amount": 120.34, "name": "Taxes from bannermen" },
        { "_id": 8, "accountId": 2, "type": "withdraw", "amount": 204.23, "name": "Sending Lord to Capital" },
        { "_id": 9, "accountId": 2, "type": "withdraw", "amount": 11.34, "name": "Camping at Twins" },
        { "_id": 10, "accountId": 2, "type": "deposit", "amount": 162.94, "name": "Spoils of War" },
        { "_id": 11, "accountId": 3, "type": "deposit", "amount": 934.36, "name": "Account Opened" },
        { "_id": 12, "accountId": 3, "type": "withdraw", "amount": 394.95, "name": "Younger Brother Rebelled" },
        { "_id": 13, "accountId": 3, "type": "withdraw", "amount": 183.48, "name": "Attacked King's Landing" },
        { "_id": 14, "accountId": 3, "type": "deposit", "amount": 500.00, "name": "Iron Bank Loan" },
        { "_id": 15, "accountId": 3, "type": "withdraw", "amount": 643.03, "name": "Hire Mercenaries" },
        { "_id": 24, "accountId": 3, "type": "withdraw", "amount": 138.64, "name": "Transit to Wall" },
        { "_id": 16, "accountId": 4, "type": "deposit", "amount": 34.75, "name": "Account Opened" },
        { "_id": 17, "accountId": 5, "type": "deposit", "amount": 9.03, "name": "Account Opened" },
        { "_id": 18, "accountId": 6, "type": "deposit", "amount": 1133.45, "name": "Account Opened" },
        { "_id": 19, "accountId": 7, "type": "deposit", "amount": 737.9, "name": "Account Opened" },
        { "_id": 20, "accountId": 8, "type": "deposit", "amount": 483.56, "name": "Account Opened" },
        { "_id": 21, "accountId": 9, "type": "deposit", "amount": 1035.83, "name": "Account Opened" },
        { "_id": 22, "accountId": 10, "type": "deposit", "amount": 0.00, "name": "Account Opened" },
        { "_id": 23, "accountId": 10, "type": "withdraw", "amount": 134.34, "name": "Raiding Repayment" }
    ]
};


const sortAccounts = (state) => {
  let newState = {
    accounts: [...state.accounts]
  };

  newState.accounts.forEach(accounts => {
  });
    return newState;
};



const accountsReducer = (state= DEFAULT_STATE, action) => {
    switch(action.type) {
        case 'SET_ACCOUNTS':
            return action.payload;

        case 'DEPOSIT_MONEY':
            let depositID = state.accounts.findIndex(account => {
               return account._id == action.payload._id;
            });
           state.accounts[depositID].balance = state.accounts[depositID].balance + parseInt(action.payload.amount);

           return sortAccounts(state);

        case 'WITHDRAW_MONEY':
            let withdrawID = state.accounts.findIndex(account => {
                return account._id == action.payload._id;
            });

            state.accounts[withdrawID].balance = state.accounts[withdrawID].balance - parseInt(action.payload.amount);

            return sortAccounts(state);

        case 'ADD_ACCOUNT':
            let name = action.payload;
            name._id = state.accounts.length + 1;
            name.balance = action.payload.balance;

            state.accounts.push(name);

            return sortAccounts(state);

        case 'DELETE_ACCOUNT':
            const deleteID = state.accounts.findIndex(account => {
                return account._id === action.payload._id;});
            state.accounts.splice(deleteID, 1);

            return sortAccounts(state);

        case 'EDIT_ACCOUNT':
            let editedName = state.accounts.findIndex(account => {
                return account._id == action.payload._id;
        });
            console.log(state.accounts[editedName].name); //lannisters
            console.log(action.payload.name);
            state.accounts[editedName].name = action.payload.name;

            return sortAccounts(state);

        default :
            return state;
    }

};
const transactionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return action.payload;

        default:
            return state;
    }
}

export default combineReducers({
    accounts: accountsReducer,
    transactions: transactionsReducer

});