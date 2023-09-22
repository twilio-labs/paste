import * as Tokens from '@twilio-paste/design-tokens';
import type { GenericTokensShape } from '@twilio-paste/design-tokens/types/GenericTokensShape';
import * as React from 'react';

export type DesignerContextProps = {
  tokens: Partial<GenericTokensShape>;
  updateToken?: (bucket: keyof GenericTokensShape, key: string, value: string) => void;
};
export const DesignerContext = React.createContext<DesignerContextProps>({
  tokens: Tokens,
  updateToken: undefined,
});
