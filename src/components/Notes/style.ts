import styled from 'styled-components';
import lightThemeSVG from '../../assets/icons/lightTheme.svg';
import darkThemeSVG from '../../assets/icons/darkTheme.svg';
import searchSVG from '../../assets/icons/search.svg';

import addNoteSVG from '../../assets/icons/addNote.svg';
import { MAIN_COLORS } from '../../constants/styles/mainColors';
import { RESOLUTIONS } from '../../constants/resolutions/resolutions';

interface ISearchProps {
  $isDark: boolean;
}
export const NotesWrapper = styled.div`
  width: 750px;
  margin: 40px auto 0 auto;

  @media (${RESOLUTIONS.laptop}) {
    width: 447px;
  }

  @media (${RESOLUTIONS.mobile}) {
    width: 300px;
  }
`;
export const TODOLIST = styled.h1`
  text-align: center;
  font-size: 26px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 595px;

  @media (${RESOLUTIONS.laptop}) {
    width: 292px;
  }

  @media (${RESOLUTIONS.mobile}) {
    width: 150px;
  }
`;

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 5px;
  background-color: ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  cursor: pointer;

  &:hover {
    background-color: rgba(88, 80, 221, 1);
    box-shadow: rgba(108, 99, 255, 0.4) 0 0 10px;
  }
`;

export const StyledLightThemeSVG = styled(lightThemeSVG)`
  width: 22px;
  height: 22px;
`;

export const StyledDarkThemeSVG = styled(darkThemeSVG)`
  width: 22px;
  height: 22px;
`;

export const StyledSearchSVG = styled(searchSVG)<ISearchProps>`
  position: absolute;
  top: 8.5px;
  right: 16px;
  width: 21px;
  height: 21px;

  path {
    fill: ${({ $isDark }: ISearchProps) =>
      $isDark ? 'var(--text-color)' : `${MAIN_COLORS.COLOR_LIGHT_BLUE}`};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledAddNoteSVG = styled(addNoteSVG)`
  height: 50px;
  width: 50px;
`;
