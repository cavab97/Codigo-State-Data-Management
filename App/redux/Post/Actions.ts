import {POST_REQUEST, POST_SUCCESS, POST_FAILED, POST_ADD} from './Constants';
/**
 * @function postRequest
 * @param {*} payload
 * @description Return type for post request to reducer
 * @returns state
 */
export const postRequest = (payload: any) => ({
  type: POST_REQUEST,
  payload,
});

/**
 * @function postRequest
 * @param {*} payload
 * @description Return type for post request to reducer
 * @returns state
 */
export const postHealthyAdd = (payload: any) => ({
  type: POST_ADD,
  payload,
});

/**
 * @function postSuccess
 * @param {*} payload
 * @description Return type for post success to reducer
 * @returns state
 */
export const postSuccess = (payload: any) => ({
  type: POST_SUCCESS,
  payload,
});

/**
 * @function postError
 * @param {*} payload
 * @description Return type for Post failed to reducer
 * @returns state
 */
export const postError = (payload: any) => ({
  type: POST_FAILED,
  payload,
});
