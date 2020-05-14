export const setAccounts = accounts => {
    return {
        type: 'SET_ACCOUNTS',
        payload: {
            accounts
        }
    }
};

export const setTransactions = transactions => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: transactions
    }
};

export const newAccount = (name,balance) => {
    return{
        type: 'ADD_ACCOUNT',
        payload: {
            name,
            balance
        }
    };
};

export const editAccount = (name, _id) => {
    return {
        type: 'EDIT_ACCOUNT',
        payload: {
            name,
            _id
        }
    }
};

export const deleteAccount = _id => {
    return{
        type: 'DELETE_ACCOUNT',
        payload: {
            _id
        }

    };
};

export const deposit = (_id, amount) => {
    return {
        type: 'DEPOSIT_MONEY',
        payload: {
            _id,
            amount
        }
    };
};

export const withdraw = (_id, amount) => {
    return {
        type: 'WITHDRAW_MONEY',
        payload: {
            _id,
            amount
        }
    };
};



