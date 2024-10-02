import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFilterState {
  filterByCompleteName: string;
  filterByTextName: string;
}

const initialState: IFilterState = {
  filterByCompleteName: '',
  filterByTextName: '',
};

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterByComplete: (state, action: PayloadAction<string>) => {
      state.filterByCompleteName = action.payload;
    },
    filterByText: (state, action: PayloadAction<string>) => {
      state.filterByTextName = action.payload;
    },
  },
});

export const { filterByComplete, filterByText } = counterSlice.actions;

export default counterSlice.reducer;
