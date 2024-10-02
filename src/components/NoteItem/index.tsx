import { ModaleWindow } from '../ModalWindow';
import {
  CheckboxWrapper,
  EditIconsWrapper,
  NoteItemWrapper,
  NoteText,
  StyledDoneSVG,
  StyledEditNoteSVG,
  StyledRemoveNoteSVG,
  SVGWrapper,
} from './style';
import { INote } from '../../interfaces/INote';
import { useDispatch } from 'react-redux';
import { changeNote, removeNote } from '../../store/features/notes/notesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MouseEvent, useState } from 'react';

interface INoteProps extends INote {
  index: number;
}

export const NoteItem = ({ title, isCompleted }: INoteProps) => {
  const inputTitle = useSelector((state: RootState) => state.input.title);

  const [isEditNoteOpen, setIsEditNoteOpen] = useState(false);
  const dispatch = useDispatch();

  const onClickEditNoteHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsEditNoteOpen((prev) => !prev);
  };

  const onClickCancelNoteHandler = () => {
    setIsEditNoteOpen((prev) => !prev);
  };

  const onClickRemoveHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(removeNote(title));
  };

  const onClickNoteHandler = () => {
    dispatch(
      changeNote({
        title: title,
        isCompleted: !isCompleted,
        lastTitle: title,
      }),
    );
  };

  const onClickContiniuNoteHandler = () => {
    dispatch(
      changeNote({
        title: inputTitle,
        isCompleted: isCompleted,
        lastTitle: title,
      }),
    );
    setIsEditNoteOpen((prev) => !prev);
  };
  return (
    <>
      <NoteItemWrapper onClick={onClickNoteHandler}>
        <CheckboxWrapper $isCompleted={isCompleted}>
          {isCompleted ? <StyledDoneSVG /> : null}
        </CheckboxWrapper>
        <NoteText $isCompleted={isCompleted}>{title}</NoteText>
        <EditIconsWrapper>
          <SVGWrapper onClick={onClickEditNoteHandler}>
            <StyledEditNoteSVG />
          </SVGWrapper>
          <SVGWrapper onClick={onClickRemoveHandler}>
            <StyledRemoveNoteSVG />
          </SVGWrapper>
        </EditIconsWrapper>
      </NoteItemWrapper>
      {isEditNoteOpen ? (
        <ModaleWindow
          type="edit"
          onClickContiniuHandler={onClickContiniuNoteHandler}
          onClickCancelHandler={onClickCancelNoteHandler}
          title={title}
        />
      ) : null}
    </>
  );
};
