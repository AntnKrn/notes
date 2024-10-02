import { useSelector } from 'react-redux';
import { EmptyNotes } from '../EmptyNotes';
import { NoteItem } from '../NoteItem';
import { NotesListWrapper } from './style';
import { RootState } from '../../store/store';
import { INote } from '../../interfaces/INote';
import { useEffect, useState } from 'react';

export const NotesList = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const filterByCompleteName = useSelector(
    (state: RootState) => state.filter.filterByCompleteName,
  );
  const filterByTextName = useSelector(
    (state: RootState) => state.filter.filterByTextName,
  );

  const [loadedNotes, setLoadedNotes] = useState<INote[]>([]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    setLoadedNotes(notes.slice(0, 20));
    return () => removeEventListener('scroll', scrollHandler);
  }, [notes]);

  const scrollHandler = (e: Event) => {
    const target = e.target as Document;
    if (
      target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
      50
    ) {
      addNotes();
    }
  };

  const addNotes = () => {
    setLoadedNotes((prev) => {
      const newData = notes.slice(prev.length, prev.length + 20);
      return [...prev, ...newData];
    });
  };

  const isEmpty = (array: INote[]) => {
    return array
      .filter((el: INote) => {
        if (el.isCompleted && filterByCompleteName === 'Incomplete') {
          return false;
        } else if (!el.isCompleted && filterByCompleteName === 'Complete') {
          return false;
        } else {
          return true;
        }
      })
      .filter((el: INote) => el.title.toLowerCase().includes(filterByTextName))
      .length === 0
      ? true
      : false;
  };

  const filterToDisplay = (array: INote[]) => {
    return array
      .filter((el: INote) => {
        if (el.isCompleted && filterByCompleteName === 'Incomplete') {
          return false;
        } else if (!el.isCompleted && filterByCompleteName === 'Complete') {
          return false;
        } else {
          return true;
        }
      })
      .filter((el: INote) => el.title.toLowerCase().includes(filterByTextName));
  };

  return isEmpty(loadedNotes) ? (
    <EmptyNotes />
  ) : (
    <NotesListWrapper>
      {filterToDisplay(loadedNotes).map((el: INote, index) => (
        <NoteItem
          key={el.title}
          index={index}
          title={el.title}
          isCompleted={el.isCompleted}
        />
      ))}
    </NotesListWrapper>
  );
};
