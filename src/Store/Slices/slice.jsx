import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return {
        ...state,
        categories: action.payload,
        status: 'succeeded',
        error: null,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    },
  },
});

export const { setCategories, setError } = categoriesSlice.actions;
export default categoriesSlice.reducer;
