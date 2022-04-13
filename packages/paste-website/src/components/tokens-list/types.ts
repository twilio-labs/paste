export interface Token {
  name: string;
  value: string;
  comment: string;
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
