import styled from 'styled-components';
import { MAIN_COLORS } from '../../constants/styles/mainColors';

interface IInputPorps {
  $isDark: boolean;
}

export const StyledInput = styled.input<IInputPorps>`
  width: 100%;
  height: 38px;
  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? 'var(--text-color)' : `${MAIN_COLORS.COLOR_LIGHT_BLUE}`};
  border-radius: 5px;
  font-family: Inter;
  color: ${({ $isDark }) =>
    $isDark ? 'var(--text-color)' : `${MAIN_COLORS.COLOR_LIGHT_BLUE}`};

  &:focus {
    box-shadow: 0px 0px 2px 2px
      ${({ $isDark }) =>
        $isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(108, 99, 255, 0.5)'};
  }
`;
