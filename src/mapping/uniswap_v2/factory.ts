import { 
  PairCreated 
} from '../../../generated/uniswap_v2_factory/abi_uniswap_v2_factory';

import { 
  t_uniswap_v2_pair
} from '../../../generated/templates';

import { 
  procEventCount,
} from '../../utils';

export function E_handlePairCreated(event: PairCreated): void {
  let name = "PairCreated";
  procEventCount(name, event);

  t_uniswap_v2_pair.create(event.params.pair);
}
