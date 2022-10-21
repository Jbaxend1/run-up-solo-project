import { combineReducers } from 'redux';

const aircraft = (state = {}, action) => {
    if (action.type === 'SELECT_AIRCRAFT') {
        return action.payload;
    }

    return state;
}

export default aircraft;