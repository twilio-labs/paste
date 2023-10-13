import { TokenCategory } from "./token-category";
import { TokenType } from "./token-type";

export interface PasteToken {
  name: string;
  value: string;
  comment?: string;
  category: TokenCategory;
  type: TokenType;
}
