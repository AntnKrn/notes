import { createSlice } from '@reduxjs/toolkit';

interface IthemeState {
  isDark: boolean;
}

const initialState: IthemeState = {
  isDark: false,
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeTheme: changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
