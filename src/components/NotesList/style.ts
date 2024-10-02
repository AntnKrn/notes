import styled from 'styled-components';
import { RESOLUTIONS } from '../../constants/resolutions/resolutions';

export const NotesListWrapper = styled.ul`
  width: 520px;
  margin: 13px auto 0 auto;

  @media (${RESOLUTIONS.laptop}) {
    width: 370px;
  }

  @media (${RESOLUTIONS.mobile}) {
    width: 250px;
  }
`;
