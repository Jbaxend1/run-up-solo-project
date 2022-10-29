import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// function* deleteBeforeItem(action) {
//     try {
//         const item = yield axios.delete(`/api/item/delete/${action.payload.id}`);
//         yield put({ type: 'SET_LIST', payload: item.data });
//     } catch {
//         console.log('DELETE item error');
//     }
// }

function* editAircraft(action) {
    try {
        yield axios.put(`/api/aircraft/${ action.payload.craftId }`, action.payload);
        if (action.history) {
            action.history.goBack();
        }
    } catch (e) {
        console.log(e);
    }
}

function* editSaga() {
    // yield takeLatest('DELETE_ITEM', deleteBeforeItem);
    yield takeLatest('EDIT_AIRCRAFT', editAircraft);
}

export default editSaga;