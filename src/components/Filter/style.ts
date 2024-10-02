import styled from 'styled-components';
import { MAIN_COLORS } from '../../constants/styles/mainColors';
import { FONT_SIZES } from '../../constants/fonts/fontSizes';
import opennerSVG from '../../assets/icons/openner.svg';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85px;
  height: 38px;
  padding: 0 10px;
  background-color: ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  border: 2px solid rgba(108, 99, 255, 1);
  border-radius: 5px;
  box-shadow: rgba(108, 99, 255, 0.4) 0 0 10px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-family: Inter;
  color: ${MAIN_COLORS.COLOR_LIGHT};
  overflow: hidden;
`;

export const FilterListItems = styled.ul`
  position: absolute;
  top: 38px;
  z-index: 5;
  display: none;
  width: 85px;
  height: 93px;
  padding: 8.4px 0 11.6px;
  border: 1px solid ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  border-radius: 5px;
  background-color: ${MAIN_COLORS.COLOR_LIGHT};
`;

export const FilterListItem = styled.li`
  height: 24px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: rgba(108, 99, 255, 0.2);
  }
`;

export const FilterListText = styled.span`
  padding: 0 6px 0;
  font-size: ${FONT_SIZES.SMALL}px;
  color: ${MAIN_COLORS.COLOR_LIGHT_BLUE};
`;

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    div:first-child {
      background-color: rgba(83, 76, 194, 1);
      box-shadow: none;
    }

    ul {
      display: block;
    }

    svg {
      rotate: -360deg;
    }
  }
`;

export const StyledOpennerSVG = styled(opennerSVG)`
  height: 6.4px;
  width: 14px;
  rotate: 180deg;
`;
