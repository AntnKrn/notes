import styled from 'styled-components';
import { FONT_SIZES } from '../../constants/fonts/fontSizes';
import { MAIN_COLORS } from '../../constants/styles/mainColors';
import { RESOLUTIONS } from '../../constants/resolutions/resolutions';

interface BtnProps {
  type: 'Cancel' | 'Continue';
}

export const ModalWindowWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalWindowContainer = styled.div`
  position: relative;
  height: 289px;
  width: 500px;
  margin: 118px 0 0 0;
  background-color: var(--bg-color);
  border-radius: 16px;

  @media (${RESOLUTIONS.laptop}) {
    width: 290px;
  }

  @media (${RESOLUTIONS.mobile}) {
    width: 200px;
  }
`;

export const ModalWindowInputWrapper = styled.div`
  width: 440px;
  margin: 0 30px;

  @media (${RESOLUTIONS.laptop}) {
    margin: 0 auto;
    width: 200px;
  }

  @media (${RESOLUTIONS.mobile}) {
    margin: 0 0px;
    gap: 200px;
  }
`;

export const ModalWindowTitle = styled.h2`
  margin: 18px 0 25px 0;
  font-size: ${FONT_SIZES.X_LARGE}px;
  text-align: center;
`;

export const ModalWindowBottomBtnsWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 233px;
  width: 100%;
  padding: 0 30px;

  @media (${RESOLUTIONS.laptop}) {
    padding: 0 5px;
    gap: 60px;
  }

  @media (${RESOLUTIONS.mobile}) {
    padding: 0 0;
    gap: 0;
  }
`;

export const ModalWindowBottomBtn = styled.div<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 10px 22px;
  border: 1px solid ${MAIN_COLORS.COLOR_LIGHT_BLUE};
  border-radius: 5px;
  background: ${({ type }) =>
    type === 'Cancel' ? 'var(--bg-color)' : `${MAIN_COLORS.COLOR_LIGHT_BLUE}`};
  cursor: pointer;
`;

export const ModalWindowBottomText = styled.span<BtnProps>`
  margin: 0 auto;
  color: ${({ type }) =>
    type === 'Cancel'
      ? `${MAIN_COLORS.COLOR_LIGHT_BLUE}`
      : `${MAIN_COLORS.COLOR_LIGHT}`};
`;
