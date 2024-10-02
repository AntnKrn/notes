import { INote } from '../interfaces/INote';

export const addNoteToLocalstorage = (note: INote) => {
  const arrayNotes: INote[] = JSON.parse(localStorage.getItem('notes') || '[]');
  arrayNotes.unshift(note);
  localStorage.setItem('notes', JSON.stringify(arrayNotes));
};

export const removeNoteFromLocalstorage = (title: string) => {
  let arrayNotes: INote[] = JSON.parse(localStorage.getItem('notes') || '[]');
  arrayNotes = arrayNotes.filter((el: INote) => el.title !== title);
  localStorage.setItem('notes', JSON.stringify(arrayNotes));
};

export const getNotesFromLocalstorage = (): INote[] | [] => {
  const arrayNotes: INote[] = JSON.parse(localStorage.getItem('notes') || '[]');
  return arrayNotes;
};

export const changeNoteFromLocalstorage = (notes: INote[]) => {
  localStorage.setItem('notes', JSON.stringify(notes));
};
