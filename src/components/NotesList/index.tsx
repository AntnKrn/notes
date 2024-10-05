import { useSelector } from 'react-redux';
import { EmptyNotes } from '../EmptyNotes';
import { NoteItem } from '../NoteItem';
import { NotesListWrapper } from './style';
import { RootState } from '../../store/store';
import { INote } from '../../interfaces/INote';
import { useEffect, useState } from 'react';

export const NotesList = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  const { filterBySearch, filterByStatus } = useSelector(
    (state: RootState) => state.filter,
  );

  const [clientY, setClientY] = useState(0);
  const [visibleNotes, setVisibleNotes] = useState(notes.slice(0, 20));

  useEffect(() => {
    const handleScroll = () => {
      const browserHeight = window.innerHeight;
      const browserScrollHeight = document.documentElement.scrollHeight;
      setClientY(window.scrollY);

      if (clientY > browserScrollHeight - browserHeight - 200) {
        setVisibleNotes((prev) => {
          const additionalNotes = notes.slice(prev.length, prev.length + 20);
          return [...prev, ...additionalNotes];
        });
      }
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [clientY]);

  const isEmpty = (array: INote[]) => {
    return array
      .filter((el: INote) => {
        if (el.isCompleted && filterByStatus === 'Incomplete') {
          return false;
        } else if (!el.isCompleted && filterByStatus === 'Complete') {
          return false;
        } else {
          return true;
        }
      })
      .filter((el: INote) => el.title.toLowerCase().includes(filterBySearch))
      .length === 0
      ? true
      : false;
  };

  const filterToDisplay = (array: INote[]) => {
    return array
      .filter((el: INote) => {
        if (el.isCompleted && filterByStatus === 'Incomplete') {
          return false;
        } else if (!el.isCompleted && filterByStatus === 'Complete') {
          return false;
        } else {
          return true;
        }
      })
      .filter((el: INote) => el.title.toLowerCase().includes(filterBySearch));
  };

  return isEmpty(visibleNotes) ? (
    <EmptyNotes />
  ) : (
    <NotesListWrapper>
      {filterToDisplay(visibleNotes).map((el: INote) => (
        <NoteItem
          key={el.title}
          title={el.title}
          isCompleted={el.isCompleted}
        />
      ))}
    </NotesListWrapper>
  );
};
