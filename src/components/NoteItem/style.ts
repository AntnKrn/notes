import styled from 'styled-components';
import { MAIN_COLORS } from '../../constants/styles/mainColors';
import { FONT_SIZES } from '../../constants/fonts/fontSizes';
import editNoteSVG from '../../assets/icons/editNote.svg';
import removeNoteSVG from '../../assets/icons/removeNote.svg';
import doneSVG from '../../assets/icons/done.svg';
import { RESOLUTIONS } from '../../constants/resolutions/resolutions';

interface INoteProps {
  $isCompleted: boolean;
}

export const NoteItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid rgba(108, 99, 255, 0.5);
  cursor: pointer;
`;

export const Checkbox = styled.input`
  height: 26px;
  width: 26px;
  border: 1px solid ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  border-radius: 2px;
  background-color: ${MAIN_COLORS.COLOR_LIGHT_BLUE};
`;

export const NoteText = styled.span<INoteProps>`
  margin: 0px 0 0 17px;
  width: 420px;
  font-size: ${FONT_SIZES.LARGE};
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? `line-through` : 'none'};
  opacity: ${({ $isCompleted }) => ($isCompleted ? `0.5` : 'none')};
  overflow: hidden;

  @media (${RESOLUTIONS.laptop}) {
    width: 290px;
  }

  @media (${RESOLUTIONS.mobile}) {
    width: 150px;
  }
`;

export const EditIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin: 3px 0 0 10px;
`;

export const StyledEditNoteSVG = styled(editNoteSVG)`
  height: 13px;
  width: 13px;
  cursor: pointer;

  &:hover {
    path {
      stroke: ${MAIN_COLORS.COLOR_LIGHT_BLUE};
    }
  }
`;

export const SVGWrapper = styled.div`
  z-index: 2;
`;

export const StyledRemoveNoteSVG = styled(removeNoteSVG)`
  height: 15px;
  width: 15px;
  cursor: pointer;

  &:hover {
    path {
      stroke: red;
    }
  }
`;

export const CheckboxWrapper = styled.div<INoteProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  width: 26px;
  border: 1px solid ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  border-radius: 2px;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? `${MAIN_COLORS.COLOR_LIGHT_BLUE}` : 'var(--bg-color)'};
`;

export const StyledDoneSVG = styled(doneSVG)`
  width: 14px;
  height: 14px;
`;
