import styled from 'styled-components';
import {Colors} from '../../constans/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 1px solid ${Colors.black};
    border-radius: 10px;
    padding: 7px 21px;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
`;
