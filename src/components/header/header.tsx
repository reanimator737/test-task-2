import React from 'react';
import {Container} from './header.style';

export const Header: React.FC = () => {
  return (
    <Container>
      <h3 className='semiBold'>
        Logotype
      </h3>
      <button className='smallButtonText medium' onClick={() => alert('click')}>
        Connect wallet
      </button>
    </Container>
  );
};
