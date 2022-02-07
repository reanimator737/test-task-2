import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ethers} from 'ethers';
import {GroupInfoDTO, NullableGroupInfoDTO} from '../constans/types';
import {ABI, address} from '../constans/contractInfo';
import {getAllGroupsFromContract, getInfoFromGroup} from '../utils/utils';


const initialState = null;

/**
 * Gets the info from the smart contract and set it to redux
 */
export const getInfoFromContract = createAsyncThunk('ethersData/get',
    async () : Promise<Awaited<GroupInfoDTO[]>> => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(address, ABI, provider);
      const groups = await getAllGroupsFromContract(contract);
      return Promise.all((groups).map((el) => getInfoFromGroup(el, contract)));
    },
);

const slice = createSlice({
  name: 'ethersData',
  initialState: initialState as NullableGroupInfoDTO,
  reducers: {
    removeProvider() {
      return initialState;
    },
  },
  extraReducers: {
    [getInfoFromContract.fulfilled.type]: (_state, action: PayloadAction<GroupInfoDTO[]>) => {
      return action.payload;
    },
    [getInfoFromContract.rejected.type]: () => {
      alert('Загрузка данных из контракта не удалась, проверьте подключение к тестовой сети Ropsten');
    },
  },
});

export default slice.reducer;
export const {removeProvider} = slice.actions;
