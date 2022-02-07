import styled from 'styled-components';
import {Size} from '../../constans/theme';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 16px;

  @media (max-width: ${Size.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${Size.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${Size.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GroupName = styled.h2`
  margin-top: 40px;
`;
