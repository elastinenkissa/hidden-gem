import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './src/util/reducers/themeReducer';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
