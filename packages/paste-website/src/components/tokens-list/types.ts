import * as React from 'react';

export interface Token {
  name: string;
  value: string | number;
  comment?: string;
  category: string;
  type: string;
  deprecated: boolean;
}

export interface TokenCategory {
  categoryName: string;
  info?: React.ReactNode;
  tokens: Token[];
}

export interface TokensShape {
  node: {
    tokens: TokenCategory[];
  };
}

export interface TokensListProps {
  children?: React.ReactElement;
  defaultTokens: TokensShape[];
  darkTokens: TokensShape[];
}

export interface TokensListFilterProps extends Pick<TokensListProps, 'defaultTokens' | 'darkTokens'> {
  theme: string;
  setTokens: React.Dispatch<React.SetStateAction<TokensShape>>;
  setFilterString: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
  setUseJavascriptNames: React.Dispatch<React.SetStateAction<boolean>>;
}
