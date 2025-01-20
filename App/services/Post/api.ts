import axios from 'axios';
import {JSON_PLACEHOLDER_FAKE_API_MOCK} from '../index';

/**
 * @function getPost
 * @description Call getPost Endpoint to get posts
 * @returns Posts
 */
export const getPost = async (params: any) => {
  try {
    const response = await axios.get(`${JSON_PLACEHOLDER_FAKE_API_MOCK}posts`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
