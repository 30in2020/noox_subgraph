import {
  Approval,
  ApprovalForAll,
  Collect,
  DecreaseLiquidity,
  IncreaseLiquidity,
  Transfer
} from '../../../generated/uniswap_v3_nf_position_manager/abi_uniswap_v3_nf_position_manager';

import { 
  procEventCount,
} from '../../utils';

export function E_handleApproval(event: Approval): void {
  let name = "Approval";
  procEventCount(name, event);
}

export function E_handleApprovalForAll(event: ApprovalForAll): void {
  let name = "ApprovalForAll";
  procEventCount(name, event);
}

export function E_handleCollect(event: Collect): void {
  let name = "Collect";
  procEventCount(name, event);
}

export function E_handleDecreaseLiquidity(event: DecreaseLiquidity): void {
  let name = "DecreaseLiquidity";
  procEventCount(name, event);
}

export function E_handleIncreaseLiquidity(event: IncreaseLiquidity): void {
  let name = "IncreaseLiquidity";
  procEventCount(name, event);
}

export function E_handleTransfer(event: Transfer): void {
  let name = "Transfer";
  procEventCount(name, event);
}