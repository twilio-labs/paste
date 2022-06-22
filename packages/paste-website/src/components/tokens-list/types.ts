import type {GatsbyTokens} from '@twilio-paste/website__tokens-list';

export type TokenFormats = 'js' | 'css';
export type TokenValueFormatter = (name: string) => string;

export type ThemeKeys = 'default' | 'dark';

export type Token<Name = string, Val = string> = GatsbyTokens.TokenDTO<Name, Val>;
export type DecoratedToken<Name = string, Val = string | number> = GatsbyTokens.DecoratedToken<Name, Val>;
export type CategoryKeys = GatsbyTokens.CategoryKeys;

export interface LegacyToken {
  name: string;
  value: string;
  comment: string;
  category: string;
  type: string;
  deprecated: boolean;
}

export interface LegacyTokenCategory {
  categoryName: string;
  info?: React.ReactNode;
  tokens: LegacyToken[];
}

export interface LegacyTokensShape {
  node: {
    tokens: LegacyTokenCategory[];
  };
}

export interface LegacyTokensListProps {
  children?: React.ReactElement;
  defaultTokens: LegacyTokensShape[];
  darkTokens: LegacyTokensShape[];
}
