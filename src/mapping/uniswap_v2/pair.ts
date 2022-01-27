import {
  Approval,
  Mint,
  Burn,
  Swap,
  Transfer,
  Sync
} from "../../../generated/templates/t_uniswap_v2_pair/abi_uniswap_v2_pair";

import { 
  procEventCount,
  procEventCountForTemplate,
} from '../../utils';

export function E_handleApproval(event: Approval): void {
  let name = "Approval";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleBurn(event: Burn): void {
  let name = "Burn";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleMint(event: Mint): void {
  let name = "Mint";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleSwap(event: Swap): void {
  let name = "Swap";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleSync(event: Sync): void {
  let name = "Sync";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}

export function E_handleTransfer(event: Transfer): void {
  let name = "Transfer";
  procEventCount(name, event);
  procEventCountForTemplate(name, event);
}
