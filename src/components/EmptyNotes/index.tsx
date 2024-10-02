import {
  EmptyNotesSVGWrapper,
  EmptyNotesText,
  StyledEmptyNotesSVG,
} from './style';

export const EmptyNotes = () => {
  return (
    <EmptyNotesSVGWrapper>
      <StyledEmptyNotesSVG />
      <EmptyNotesText>Empty...</EmptyNotesText>
    </EmptyNotesSVGWrapper>
  );
};
