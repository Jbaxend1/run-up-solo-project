import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchAircraftDetails(action) {
    console.log(action.payload);
    try {
        const aircraft = yield axios.get(`/api/aircraft/detail/${action.payload}`);
        yield put({ type: 'SET_AIRCRAFT_DETAILS', payload: aircraft.data });
    } catch (e) {
        console.log(e);
    }
}

function* aircraftSaga() {
    yield takeLatest('FETCH_AIRCRAFT_DETAILS', fetchAircraftDetails);
}

export default aircraftSaga;