import {POST_REQUEST, POST_SUCCESS, POST_FAILED} from './Constants';
/**
 * @function postRequest
 * @param {*} payload
 * @description Return type for post request to reducer
 * @returns state
 */
export const postRequest = payload => ({
  type: POST_REQUEST,
  payload,
});

/**
 * @function postSuccess
 * @param {*} payload
 * @description Return type for post success to reducer
 * @returns state
 */
export const postSuccess = payload => ({
  type: POST_SUCCESS,
  payload,
});

/**
 * @function postError
 * @param {*} payload
 * @description Return type for Post failed to reducer
 * @returns state
 */
export const postError = payload => ({
  type: POST_FAILED,
  payload,
});
