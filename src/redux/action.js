// src/redux/actions.js
export const toggleDarkMode = () => ({
    type: 'TOGGLE_DARK_MODE',
  });
  
  // src/redux/reducers.js
  const initialState = {
    darkMode: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_DARK_MODE':
        return { ...state, darkMode: !state.darkMode };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  