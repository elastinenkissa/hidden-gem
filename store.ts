import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './src/util/reducers/locationReducer';
import themeReducer from './src/util/reducers/themeReducer';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    location: locationReducer,
  },
});

export default store;
