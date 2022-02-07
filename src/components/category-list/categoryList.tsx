import React from 'react';
import {Card} from '../card/card';
import {CardContainer, GroupName} from './categoryList.style';
import {GroupInfoDTO} from '../../constans/types';

/**
 * Component that shows all information about the group from smart-contract
 */
export const CategoryList : React.FC<GroupInfoDTO> = (props) => {
  return (
    <>
      <GroupName>
        {props.groupName}
      </GroupName>
      <CardContainer>
        {props.dataObjectArray.map((data) => (
          <Card
            key={data.name}
            ethPriceInWei={data.ethPriceInWei}
            name={data.name}
            percentageChange={data.percentageChange}
            usdCapitalization={data.usdCapitalization}
            usdPriceInCents={data.usdPriceInCents}/>))}
      </CardContainer>
    </>
  );
};
