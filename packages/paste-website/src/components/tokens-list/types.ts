import type {GatsbyTokens} from '@twilio-paste/website__tokens-list';

export type TokenFormats = 'js' | 'css';
export type TokenValueFormatter = (name: string) => string;

export type ThemeKeys = 'default' | 'dark';

export type Token<Name = string, Val = string | number> = GatsbyTokens.TokenDTO<Name, Val>;
export type DecoratedToken<Name = string, Val = string | number> = GatsbyTokens.DecoratedToken<Name, Val>;
export type CategoryKeys = GatsbyTokens.CategoryKeys;
