import * as React from 'react';
import type {Variants} from './types';

interface InputBoxContextData {
  disabled: boolean;
  readOnly: boolean;
  variant: Variants;
}
export const InputBoxContext = React.createContext<InputBoxContextData | null>(null);

export const useInputBoxContext = (): InputBoxContextData => {
  const context = React.useContext(InputBoxContext);
  if (!context) {
    throw new Error('useInputBoxContext must be used within a <InputBox> component.');
  }
  return context;
};
