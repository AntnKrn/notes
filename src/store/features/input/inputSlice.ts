import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IInputState {
  title: string;
}

const initialState: IInputState = {
  title: '',
};

export const counterSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeInput: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { changeInput } = counterSlice.actions;

export default counterSlice.reducer;
