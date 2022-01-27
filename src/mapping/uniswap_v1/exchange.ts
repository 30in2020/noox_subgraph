import {
  Approval,
  TokenPurchase,
  EthPurchase,
  AddLiquidity,
  RemoveLiquidity,
  Transfer,
} from "../../../generated/templates/t_uniswap_v1_exchange/abi_uniswap_v1_exchange";

import { 
  procEventCount, procEventCountForTemplate,
} from '../../utils';

export function E_handleApproval(event: Approval): void {
  let name = "Approval";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleTokenPurchase(event: TokenPurchase): void {
  let name = "TokenPurchase";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleEthPurchase(event: EthPurchase): void {
  let name = "EthPurchase";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleAddLiquidity(event: AddLiquidity): void {
  let name = "AddLiquidity";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleRemoveLiquidity(event: RemoveLiquidity): void {
  let name = "RemoveLiquidity";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleTransfer(event: Transfer): void {
  let name = "Transfer";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}