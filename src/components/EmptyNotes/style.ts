import styled from 'styled-components';
import emprtyNotesSVG from '../../assets/icons/emptyNotes.svg';
import { FONT_SIZES } from '../../constants/fonts/fontSizes';

export const EmptyNotesSVGWrapper = styled.div`
  width: 221px;
  height: 174px;
  margin: 30px auto 20px auto;
`;
export const StyledEmptyNotesSVG = styled(emprtyNotesSVG)`
  height: 174px;
  width: 221px;
`;

export const EmptyNotesText = styled.h4`
  margin: 0 auto;
  font-size: ${FONT_SIZES.LARGE}px;
  text-align: center;
`;
