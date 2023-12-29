// Importing necessary functions and modules
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../Store/Slices/slice'; // Importing the categoriesReducer from a slice file

// Configuring the Redux store
const store = configureStore({
  reducer: {
    categories: categoriesReducer, // Assigning the categoriesReducer to the 'categories' slice of the store
  },
});

// Exporting the configured store
export default store;
