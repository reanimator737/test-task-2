import React from 'react';
import {Container, PercentageChange} from './card.style';
import {utils} from 'ethers';
import {fromCentsToDollars} from '../../utils/formatter';
import {CardDTO} from '../../constans/types';

/**
 * Basic element for displaying information from smart-contract
 */
export const Card: React.FC<CardDTO> = (props) => {
  return (
    <Container>
      <h4 className='semiBold'>
        {props.name}
      </h4>
      <h4 className='medium'>
        ${(+props.usdPriceInCents / 100)}/{utils.formatEther(props.ethPriceInWei)} ETH
      </h4>
      <span className='defaultText'>
        ${fromCentsToDollars(props.usdCapitalization)}
      </span>
      <PercentageChange className='defaultText' value={+props.percentageChange}>
        {props.percentageChange}
      </PercentageChange>
    </Container>
  );
};
