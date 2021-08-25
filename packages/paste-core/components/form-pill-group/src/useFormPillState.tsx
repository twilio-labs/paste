import {useCompositeState} from '@twilio-paste/reakit-library';
import type {
  CompositeInitialState as FormPillInitialState,
  CompositeStateReturn as FormPillStateReturn,
} from '@twilio-paste/reakit-library';

export type {FormPillInitialState, FormPillStateReturn};

export const useFormPillState = (config: FormPillInitialState = {}): FormPillStateReturn => {
  return {
    ...useCompositeState({
      ...config,
      orientation: 'horizontal', // <- -> arrow keys
      loop: true, // loops when reaches end of pill list
    }),
  };
};
