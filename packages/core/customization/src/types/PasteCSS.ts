import type {
  SystemStyleObject,
  SystemCssProperties,
  CSSPseudoSelectorProps,
  CSSSelectorObject,
} from '@twilio-paste/styling-library';
import type {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from '@twilio-paste/style-props';

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
