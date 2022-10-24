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

function* editSaga() {
    // yield takeLatest('DELETE_ITEM', deleteBeforeItem);
}

export default editSaga;