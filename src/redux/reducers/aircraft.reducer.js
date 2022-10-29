import { combineReducers } from 'redux';

const aircraft = (state = {}, action) => {
   
    switch (action.type) {
        case 'SELECT_AIRCRAFT':
            return action.payload;
        default:
            return state;
    }
}

const selectedAircraft = (state = {}, action) => {
    switch (action.type) {
        case 'SET_AIRCRAFT_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    aircraft,
    selectedAircraft,
  });