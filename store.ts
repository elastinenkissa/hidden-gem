import { configureStore } from '@reduxjs/toolkit';
import localeReducer from './src/util/reducers/localeReducer';
import locationReducer from './src/util/reducers/locationReducer';
import themeReducer from './src/util/reducers/themeReducer';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    location: locationReducer,
    locales: localeReducer,
  },
});

export default store;
 