import * as React from 'react';
import * as Tokens from '@twilio-paste/core/design-tokens';
import type { GenericTokensShape } from '@twilio-paste/design-tokens/types/GenericTokensShape';

export type TokenContextProps = {
  tokens: Partial<GenericTokensShape>;
  updateToken?: (bucket: keyof GenericTokensShape, key: string, value: string) => void;
  loadTokens?: (newTokens: Partial<GenericTokensShape>) => void;
};
export const TokenContext = React.createContext<TokenContextProps>({
  tokens: Tokens,
  updateToken: undefined,
  loadTokens: undefined,
});
