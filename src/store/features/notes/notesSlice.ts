import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../../../interfaces/INote';
import {
  addNoteToLocalstorage,
  changeNoteFromLocalstorage,
  getNotesFromLocalstorage,
  removeNoteFromLocalstorage,
} from '../../../utils/localstorage';

interface INotesState {
  notes: INote[];
}

const initialState: INotesState = {
  notes: getNotesFromLocalstorage(),
};

export const counterSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      if (!state.notes.some((el: INote) => el.title === action.payload.title)) {
        state.notes.unshift(action.payload);
        addNoteToLocalstorage(action.payload);
      }
    },
    changeNote: (
      state,
      action: PayloadAction<INote & { lastTitle: string }>,
    ) => {
      const index = state.notes.findIndex(
        (el: INote) => el.title === action.payload.lastTitle,
      );
      state.notes[index] = {
        ...action.payload,
      };
      changeNoteFromLocalstorage(state.notes);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(
        (el: INote) => el.title !== action.payload,
      );
      removeNoteFromLocalstorage(action.payload);
    },
  },
});

export const { addNote, removeNote, changeNote } = counterSlice.actions;

export default counterSlice.reducer;
