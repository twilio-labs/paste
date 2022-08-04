import type {Properties} from 'csstype';

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

export interface TokenExampleColors {
  backgroundColor?: Properties['backgroundColor'];
  backgroundColorInverse?: Properties['backgroundColor'];
  borderColor?: Properties['borderColor'];
  highlightColor?: Properties['backgroundColor'];
  textColor?: Properties['color'];
  textColorInverse?: Properties['color'];
}

export interface TokenExampleProps extends TokenExampleColors {
  category: Token['category'];
  name: Token['name'];
  value: Token['value'];
}

export interface TokenCardProps extends TokenExampleProps {
  altValue: Token['altValue'];
  comment?: Token['comment'];
  useCamelCase?: boolean;
  isCopied?: boolean;
  onCopyText?: (tokenName: string) => void;
}
