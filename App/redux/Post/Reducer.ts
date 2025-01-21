import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {HealthConcernModel, IAllergies, ICategory} from '../../model/data';
import {POST_REQUEST, POST_FAILED, POST_SUCCESS, POST_ADD} from './Constants';

const dataHealthConcern = require('../../assets/mockData/Healthconcern.json');
const dataDiets = require('../../assets/mockData/Diets.json');
const dataAllergies = require('../../assets/mockData/allergies.json');
interface PostState {
  loading: boolean;
  error: string | null;
  screenOneStaticData: HealthConcernModel[];
  screenOneAddedData: HealthConcernModel[];
  screenTwoStaticData: ICategory[];
  screenTwoAddedData: ICategory[];
  screenThreeStaticData: IAllergies[];
  screenThreeAddedData: IAllergies[];
}

const initialState: PostState = {
  loading: false,
  error: null,
  screenOneStaticData: dataHealthConcern.data,
  screenOneAddedData: [],
  screenTwoStaticData: dataDiets.data,
  screenTwoAddedData: [],
  screenThreeStaticData: dataAllergies.data,
  screenThreeAddedData: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postRequest: state => {
      state.loading = true;
      state.error = null;
    },
    postSuccess: (state, action: PayloadAction<HealthConcernModel[]>) => {
      state.loading = false;
      state.screenOneStaticData = action.payload;
      state.error = null;
    },
    postFailed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    postAdd: (
      state,
      action: PayloadAction<HealthConcernModel | HealthConcernModel[]>,
    ) => {
      const newData = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      state.screenOneAddedData.push(...newData);
    },
    postReset: (
      state,
      action: PayloadAction<HealthConcernModel | HealthConcernModel[]>,
    ) => {
      state.loading = false;
      state.screenOneAddedData = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
    },
    postDietAdd: (state, action: PayloadAction<ICategory | ICategory[]>) => {
      const newData = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.screenTwoAddedData.push(...newData);
    },
    postDietReset: (state, action: PayloadAction<ICategory | ICategory[]>) => {
      state.loading = false;
      state.screenTwoAddedData = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
    },
    postAllergeiesAdd: (
      state,
      action: PayloadAction<IAllergies | IAllergies[]>,
    ) => {
      const newData = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.screenThreeAddedData.push(...newData);
    },
  },
});

export const {
  postRequest,
  postSuccess,
  postFailed,
  postAdd,
  postReset,
  postDietAdd,
  postDietReset,
  postAllergeiesAdd,
} = postSlice.actions;

export default postSlice.reducer;
