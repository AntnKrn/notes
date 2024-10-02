import { useState } from 'react';
import { ModaleWindow } from '../ModalWindow';
import { Filter } from '../Filter';
import { Input } from '../Input';
import { NotesList } from '../NotesList';
import { AddNoteBtn } from './AddBtn';
import {
  InputWrapper,
  NotesWrapper,
  SearchContainer,
  StyledDarkThemeSVG,
  StyledLightThemeSVG,
  StyledSearchSVG,
  ThemeWrapper,
  TODOLIST,
} from './style';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/features/theme/themeSlice';
import { RootState } from '../../store/store';
import { addNote } from '../../store/features/notes/notesSlice';

export const Notes = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const value = useSelector((state: RootState) => state.input.title);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeTheme());
  };

  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);

  const onClickAddNoteHandler = () => {
    setIsAddNoteOpen((prev) => !prev);
  };

  const onClickSaveNoteHandler = () => {
    dispatch(addNote({ title: value, isCompleted: false }));
    setIsAddNoteOpen((prev) => !prev);
  };

  const onClickCloseModalWindow = () => {
    setIsAddNoteOpen((prev) => !prev);
  };
  return (
    <NotesWrapper>
      <TODOLIST>TODO LIST</TODOLIST>
      <SearchContainer>
        <InputWrapper>
          <Input placeholder="   Search note..." />
          <StyledSearchSVG $isDark={isDark} />
        </InputWrapper>
        <Filter />
        <ThemeWrapper onClick={() => handleChange()}>
          {isDark ? <StyledLightThemeSVG /> : <StyledDarkThemeSVG />}
        </ThemeWrapper>
      </SearchContainer>
      <NotesList />
      {isAddNoteOpen ? (
        <ModaleWindow
          type="add"
          onClickCancelHandler={onClickCloseModalWindow}
          onClickContiniuHandler={onClickSaveNoteHandler}
        />
      ) : null}
      <div onClick={onClickAddNoteHandler}>
        <AddNoteBtn />
      </div>
    </NotesWrapper>
  );
};
