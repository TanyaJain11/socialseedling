// used to basically create the store that is going 
//to hold all of states and variables inside of our redux application 

// reducer - a function that takes in an action abd the previous state of the application and then it makes
// it some changes to that states and it returns that new value for that specific state so basically they have
// access to current value of diff states

// store.js
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reducers'; // Import your custom reducer

// Create the Redux store with your reducer
const store = configureStore({
  reducer: {
    api: apiReducer,
    // Add other reducers here if you have them
  },
});

export default store;


