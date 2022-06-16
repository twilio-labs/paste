declare module '@twilio-paste/website__tokens-list' {
  export namespace GatsbyTokens {
    export type TokenDTO<Name = string, Value = string | number>  = {
      name: string & Name;
      value: (string | number) & Value;
      comment?: string | undefined;
      deprecated?: boolean | undefined;
      originalValue: string;
      type: string;
      "text_contrast_pairing"?: string[] | undefined;
      "uicontrol_contrast_pairing"?: string[] | undefined;
      "data_visualization_contrast_pairing"?: string[] | undefined;
    }

    export type CategoryKeys = "background-colors" | "border-colors" | "border-widths" | "box-shadows" | "colors" | "fonts" | "font-sizes" | "font-weights" | "line-heights" | "radii" | "sizings" | "spacings" | "text-colors" | "z-indices";

    export type DecoratedToken<Name = string, Value = string> = Omit<TokenDTO<Name, Value>, 'deprecated'> & {
      isInverse: boolean;
      backgroundColor: string;
      contrastRating: string | null;
      category: CategoryKeys & string;
    }

    export type TokensGeneric<TokenType = TokenDTO> = {
      "background-colors": TokenType[];
      "border-colors": TokenType[];
      "border-widths": TokenType[];
      "box-shadows": TokenType[];
      colors: TokenType[];
      fonts: TokenType[];
      "font-sizes": TokenType[];
      "font-weights": TokenType[];
      "line-heights": TokenType[];
      radii: TokenType[];
      sizings: TokenType[];
      spacings: TokenType[];
      "text-colors": TokenType[];
      "z-indices": TokenType[];
    };


    export type ThemeTokens = {
      tokens: TokensGeneric<TokenDTO>
    };
    export type DecoratedThemeTokens = TokensGeneric<DecoratedToken>;

  }
}
