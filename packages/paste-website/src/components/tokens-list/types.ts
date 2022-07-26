export interface Token {
  type: string;
  category: string;
  comment?: string;
  name: string;
  value: number | string;
  altValue: string | null;
  text_contrast_pairing?: string[];
  uicontrol_contrast_pairing?: string[];
  data_visualization_contrast_pairing?: string[];
}

export interface Tokens {
  [key: string]: Token[];
}
export interface TokensShape {
  tokens: Tokens;
}
