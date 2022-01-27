import {
  Burn,
  Collect,
  CollectProtocol,
  Flash,
  IncreaseObservationCardinalityNext,
  Initialize,
  Mint,
  SetFeeProtocol,
  Swap
} from "../../../generated/templates/t_uniswap_v3_pool/abi_uniswap_v3_pool";

import { 
  procEventCount,
  procEventCountForTemplate
} from '../../utils';

export function E_handleBurn(event: Burn): void {
  let name = "Burn";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleCollect(event: Collect): void {
  let name = "Collect";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleCollectProtocol(event: CollectProtocol): void {
  let name = "CollectProtocol";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleFlash(event: Flash): void {
  let name = "Flash";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleIncreaseObservationCardinalityNext(event: IncreaseObservationCardinalityNext): void {
  let name = "IncreaseObservationCardinalityNext";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleInitialize(event: Initialize): void {
  let name = "Initialize";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleMint(event: Mint): void {
  let name = "Mint";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleSetFeeProtocol(event: SetFeeProtocol): void {
  let name = "SetFeeProtocol";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleSwap(event: Swap): void {
  let name = "Swap";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}