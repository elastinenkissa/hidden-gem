import { createSlice } from '@reduxjs/toolkit';

type State = string;

export interface Action {
  payload: string;
}

const locationSlice = createSlice({
  name: 'location',
  initialState: '',
  reducers: {
    getLocation(state: State) {
      return state;
    },
    setLocation(_state: State, action: Action) {
      return action.payload;
    },
  },
});

export const { getLocation, setLocation } = locationSlice.actions;
 
export default locationSlice.reducer;
