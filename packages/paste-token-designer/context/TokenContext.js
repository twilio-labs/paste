import React from 'react';

export const TokenContext = React.createContext({
  tokens: undefined,
  updateToken: () => {},
});
