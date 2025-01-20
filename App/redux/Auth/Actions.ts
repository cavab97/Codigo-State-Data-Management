import {LoginPayload} from '../../model/actions/auth';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './Constants';
/**
 * @function loginRequest
 * @param {*} payload
 * @description Return type for login request to reducer
 * @returns state
 */
export const loginRequest = (payload: LoginPayload) => ({
  type: LOGIN_REQUEST,
  payload,
});

/**
 * @function loginSuccess
 * @param {*} payload
 * @description Return type for login success to reducer
 * @returns state
 */
export const loginSuccess = (payload: any) => ({
  type: LOGIN_SUCCESS,
  payload,
});

/**
 * @function loginError
 * @param {*} payload
 * @description Return type for login failed to reducer
 * @returns state
 */
export const loginError = (payload: any) => ({
  type: LOGIN_FAILED,
  payload,
});

/**
 * @function logoutRequest
 * @param {*} payload
 * @description Return type for logout request to reducer
 * @returns state
 */
export const logoutRequest = (payload: any) => ({
  type: LOGOUT_REQUEST,
  payload,
});

/**
 * @function logoutSuccess
 * @param {*} payload
 * @description Return type for logout success to reducer
 * @returns state
 */
export const logoutSuccess = (payload: any) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

/**
 * @function logoutError
 * @param {*} payload
 * @description Return type for logout failed to reducer
 * @returns state
 */
export const logoutError = (payload: any) => ({
  type: LOGOUT_FAILED,
  payload,
});
