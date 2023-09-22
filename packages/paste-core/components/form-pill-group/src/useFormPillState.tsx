import { useCompositeState } from '@twilio-paste/reakit-library';
import type { CompositeInitialState, CompositeStateReturn as FormPillStateReturn } from '@twilio-paste/reakit-library';

export type { FormPillStateReturn };
export type FormPillInitialState = Omit<CompositeInitialState, 'orientation' | 'loop'>;

export const useFormPillState = (config: FormPillInitialState = {}): FormPillStateReturn => {
  return {
    ...useCompositeState({
      ...config,
      orientation: 'horizontal', // <- -> arrow keys
      loop: true, // loops when reaches end of pill list
    }),
  };
};
