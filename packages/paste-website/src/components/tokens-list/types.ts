import * as React from 'react';

export interface Token {
  name: string;
  value: string | number;
  comment?: string;
  category: string;
  type: string;
  deprecated?: boolean;
  originalValue?: string;
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

export interface TokensListFilterProps {
  handleThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
  handleFormatChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
