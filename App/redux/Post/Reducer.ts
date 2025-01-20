import {POST_REQUEST, POST_FAILED, POST_SUCCESS} from './Constants';
/**
 * Initial state for this slice of store
 */
const data = require('../../assets/mockData/Healthconcern.json');

const initialState = {
  loading: false,
  error: null,
  screenOneStaticData: data.data,
};
/**
 * @description Pure function to manipulate state without mutating immutably
 * @returns states
 */
const postReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case POST_FAILED:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postReducer;
