import styled from 'styled-components';
import {Colors, Size} from '../../constans/theme';

export const Container = styled.div`
  background: ${Colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 20px 25px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25), 0 0 5px rgba(0, 0, 0, 0.03);
  border-radius: 10px;

  h4 {
    margin-bottom: 10px;
    width: 100%;
  }

  span {
    margin-top: 10px;
  }

  @media (max-width: ${Size.laptop}) {
    padding: 15px 15px 20px;
  }
`;

type percentageChangeProps = {
  value: number
}

export const PercentageChange = styled.span<percentageChangeProps>`
  color: ${(props) => props.value > 0 ? Colors.green : Colors.red};

  &:before {
    content: '${(props) => props.value > 0 ? '+' : ''}';
  }
  
  &::after {
    content: '%';
  }
`;
