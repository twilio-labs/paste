import { useCompositeState } from '@twilio-paste/reakit-library';
import type {
  CompositeInitialState,
  CompositeStateReturn as ListboxPrimitiveStateReturn,
} from '@twilio-paste/reakit-library';

export type { ListboxPrimitiveStateReturn };
export type ListboxPrimitiveInitialState = Omit<CompositeInitialState, 'loop'>;

export const useListboxPrimitiveState = (config: ListboxPrimitiveInitialState = {}): ListboxPrimitiveStateReturn => {
  return {
    ...useCompositeState({
      orientation: 'vertical', // vertical by default
      ...config,
      loop: 'horizontal', // loops when orientation is horizontal
    }),
  };
};
