import * as React from 'react';

export interface Token {
  comment: string;
  name: string;
  originalValue: string;
  type: string;
  value: string;
  deprecated?: boolean;
}

export interface Tokens {
  [key: string]: Token[];
}
export interface TokensShape {
  tokens: Tokens;
}
