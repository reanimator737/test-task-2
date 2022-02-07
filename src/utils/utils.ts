import {Contract} from 'ethers';

export const getAllGroupsFromContract = async (contract: Contract) => {
  const groupIds : string[] = await contract.getGroupIds();
  return await Promise.all((groupIds).map((groupId) => {
    return contract.getGroup(groupId);
  }));
};


export const getInfoFromGroup = async (el: any, contract:Contract) => {
  return ({
    groupName: el.name,
    dataObjectArray: await Promise.all((el.indexes).map(async (indexId: string) => {
      const indexIdData = await contract.getIndex(indexId);
      return {
        name: indexIdData.name,
        ethPriceInWei: BigInt(indexIdData.ethPriceInWei).toString(),
        percentageChange: BigInt(indexIdData.percentageChange).toString(),
        usdCapitalization: BigInt(indexIdData.usdCapitalization).toString(),
        usdPriceInCents: BigInt(indexIdData.usdPriceInCents).toString(),
      };
    })),
  });
};
