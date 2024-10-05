import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFilterState {
  filterByStatus: string;
  filterBySearch: string;
}

const initialState: IFilterState = {
  filterByStatus: '',
  filterBySearch: '',
};

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterByComplete: (state, action: PayloadAction<string>) => {
      state.filterByStatus = action.payload;
    },
    filterByText: (state, action: PayloadAction<string>) => {
      state.filterBySearch = action.payload;
    },
  },
});

export const { filterByComplete, filterByText } = counterSlice.actions;

export default counterSlice.reducer;
