import {call, put, takeLatest} from 'redux-saga/effects';
import {getPost} from '../../services/Post/api';
import {postError, postRequest, postSuccess} from './Actions';
import {POST_REQUEST} from './Constants';

/**
 * @function postAction
 * @description Call ap api in using redux in async way by the action provided using Redux-Saga Middleware
 * @param {*} action
 */
function* postAction(action: ReturnType<typeof postRequest>) {
  try {
    const posts: string = yield call(getPost, action.payload);
    yield put(postSuccess(posts));
  } catch (error: any) {
    yield put(postError(error.message));
  }
}

export default function* postSaga() {
  yield takeLatest(POST_REQUEST, postAction);
}
