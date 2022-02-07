export interface CardDTO {
  name: string,
  ethPriceInWei: string,
  percentageChange: string,
  usdCapitalization: string,
  usdPriceInCents: string,
}

export type Nullable<T> = null | T;

export interface GroupInfoDTO {
  groupName: string,
  dataObjectArray: CardDTO[] | Awaited<CardDTO>[]
}

export type NullableGroupInfoDTO= Nullable<GroupInfoDTO[]>
