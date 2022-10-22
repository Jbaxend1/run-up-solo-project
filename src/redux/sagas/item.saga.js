import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBeforeItems(action) {
    try {
        const itemSet = yield axios.get(`/api/item/before-engine/${action.payload.id}`);
        yield put({ type: 'SET_LIST', payload: itemSet.data});
    } catch {
        console.log('Get before items error');
    }
};

function* fetchTaxiItems(action) {
    try {
        const itemSet = yield axios.get(`/api/item/taxi/${action.payload.id}`);
        yield put({ type: 'SET_LIST', payload: itemSet.data });
    } catch {
        console.log('GET taxi items error');
    }
}

function* featchRunUpItems(action) {
    try {
        const itemSet = yield axios.get(`/api/item/run-up/${action.payload.id}`);
        yield put({ type: 'SET_LIST', payload: itemSet.data });
    } catch {
        console.log('GET taxi items error');
    }
}

function* featchTakeoffItems(action) {
    try {
        const itemSet = yield axios.get(`/api/item/takeoff/${action.payload.id}`);
        yield put({ type: 'SET_LIST', payload: itemSet.data });
    } catch {
        console.log('GET taxi items error');
    }
}

function* itemSaga() {
    yield takeLatest('ITEMS_BEFORE_ENGINE', fetchBeforeItems);
    yield takeLatest('ITEMS_TAXI', fetchTaxiItems);
    yield takeLatest('ITEMS_RUNUP', featchRunUpItems);
    yield takeLatest('ITEMS_TAKEOFF', featchTakeoffItems);
}

export default itemSaga;