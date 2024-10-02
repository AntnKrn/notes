import styled from 'styled-components';
import { MAIN_COLORS } from '../../../constants/styles/mainColors';
import addNoteSVG from '../../../assets//icons/addNote.svg';

export const AddNoteBtnWrapper = styled.div`
  position: fixed;
  bottom: 32px;
  right: 19%;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 2px solid ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  border-radius: 50%;
  background-color: ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  box-shadow: 0 0 5px 2px rgba(108, 99, 255, 0.4);
  cursor: pointer;

  &:hover {
    background-color: rgba(83, 76, 194, 1);
  }
`;

export const StyledAddNoteSVG = styled(addNoteSVG)`
  display: block;
  width: 24px;
  height: 24px;
  margin: auto;
`;
