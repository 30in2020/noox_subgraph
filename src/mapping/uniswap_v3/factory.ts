import { 
  FeeAmountEnabled,
  OwnerChanged,
  PoolCreated 
} from '../../../generated/uniswap_v3_factory/abi_uniswap_v3_factory';

import { 
  t_uniswap_v3_pool
} from '../../../generated/templates';

import {
  procEventCount,
} from '../../utils';

export function E_handleFeeAmountEnabled(event: FeeAmountEnabled): void {
  let name = "FeeAmountEnabled";
  procEventCount(name, event);
}

export function E_handleOwnerChanged(event: OwnerChanged): void {
  let name = "OwnerChanged";
  procEventCount(name, event);
}

export function E_handlePoolCreated(event: PoolCreated): void {
  let name = "PoolCreated";
  procEventCount(name, event);

  t_uniswap_v3_pool.create(event.params.pool);
}
