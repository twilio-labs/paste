import * as React from 'react';
import * as Tokens from '@twilio-paste/core/design-tokens';
import type {GenericTokensShape} from '@twilio-paste/design-tokens/types/GenericTokensShape';

export type DesignerContextProps = {
  tokens: GenericTokensShape;
  updateToken?: (bucket: keyof GenericTokensShape, key: string, value: string) => void;
};
export const DesignerContext = React.createContext<DesignerContextProps>({
  tokens: Tokens,
  updateToken: undefined,
});
