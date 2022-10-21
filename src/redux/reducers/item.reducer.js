import { combineReducers } from 'redux';

const items = (state = [], action) => {
    if (action.type === 'SET_LIST') {
        return action.payload;
    }

    return state;
}

export default items;