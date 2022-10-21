import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(action) {
    try {
        const itemSet = yield axios.get(`/api/item/before-engine/${action.payload.id}`);
        yield put({ type: 'SET_LIST', payload: itemSet.data});
    } catch {
        console.log('Get items error');
    }
};

function* itemSaga() {
    yield takeLatest('AIRCRAFT_ITEMS', fetchItems);
}

export default itemSaga;