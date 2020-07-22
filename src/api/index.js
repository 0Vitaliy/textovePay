import { abi } from "../utils/abi";
import { address } from "../utils/address";

const get = () => new window.web3.eth.Contract(abi, address).methods;

export const getGroupIds = async () => await get().getGroupIds().call();

export const getGroup = async (index) => {
  return await get().getGroup(index).call();
};

export const getIndex = async (index) => {
  return await get().getIndex(index).call();
};
