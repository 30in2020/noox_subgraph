import { 
  NewExchange 
} from '../../../generated/uniswap_v1_factory/abi_uniswap_v1_factory';

import { 
  t_uniswap_v1_exchange 
} from '../../../generated/templates';

import { 
  procEventCount,
} from '../../utils';

export function E_handleNewExchange(event: NewExchange): void {
  let name = "NewExchange";
  procEventCount(name, event);

  t_uniswap_v1_exchange.create(event.params.exchange);
}
