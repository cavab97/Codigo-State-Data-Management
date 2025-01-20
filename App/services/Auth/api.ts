import axios from 'axios';
import {API_BASE_URL} from '../index';

/**
 * @function login
 * @description Call Login Endpoint to authenticate user
 * @param {*} params
 * @returns User Response
 */
export const login = async (params: any) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth`, {params});
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
