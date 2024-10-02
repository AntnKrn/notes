import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import notesReducer from './features/notes/notesSlice';
import inputReducer from './features/input/inputSlice';
import filterReducer from './features/filter/filterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    notes: notesReducer,
    input: inputReducer,
    filter: filterReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
