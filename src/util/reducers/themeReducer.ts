import { createSlice } from '@reduxjs/toolkit';

type State = string;

export interface Action {
  payload: string;
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    setTheme(_state: State, action: Action) {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
