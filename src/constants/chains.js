export const networks = [1, 3,4,5,42,123, 1337, 5001, 80001, 65110000, 65010000, 137];
// export const networks = [5001];

export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  GÖRLI: 5,
  KOVAN: 42,
  DEVNET: 65110000,
  AUTONITY: 65010000,
  PARASTATE: 123,
  GANCHE: 1337,
  MANTLE_TESTNET: 5001,
  MUMBAI_TESTNET: 80001,
  POLYGON: 137
};

export const routerAddress = new Map();
// routerAddress.set(
//   ChainId.MAINNET,
//   "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
// );
// routerAddress.set(
//   ChainId.ROPSTEN,
//   "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
// );
// routerAddress.set(
//   ChainId.RINKEBY,
//   "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
// );
// routerAddress.set(ChainId.GÖRLI, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
// routerAddress.set(ChainId.KOVAN, "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D");
// routerAddress.set(ChainId.DEVNET, "0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52");
// routerAddress.set(
//   ChainId.AUTONITY,
//   "0x04e555283D37aE85F6eB311fe2578F3B3f3dFc52"
// );
// routerAddress.set(
//   ChainId.PARASTATE,
//   "0x07a1905D44feeA439ceFAabd11a63bEf684abE11"
// );
// routerAddress.set(ChainId.GANCHE, "0x0F44AC51198D8F99847db6C431448dBC673428f1");
// routerAddress.set(
//   ChainId.MANTLE_TESTNET,
//   "0xdbf497b3D74E7812E81F87614316A90c3a1806f7"
//   );
routerAddress.set(
  ChainId.POLYGON,
  "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"
);
