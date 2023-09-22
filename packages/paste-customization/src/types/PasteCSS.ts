import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "@twilio-paste/style-props";
import type {
  CSSPseudoSelectorProps,
  CSSSelectorObject,
  SystemCssProperties,
  SystemStyleObject,
} from "@twilio-paste/styling-library";

type AllStyleProps = BackgroundProps &
  BorderProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export type PasteCustomCSS = SystemStyleObject &
  AllStyleProps & {
    variants?: {
      [key: string]: (SystemCssProperties | CSSPseudoSelectorProps | CSSSelectorObject) & AllStyleProps;
    };
  };
