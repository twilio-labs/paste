import type {BoxProps} from '@twilio-paste/box';
import type {ThemeShape} from '@twilio-paste/theme';

// Label styles
export const sidebarNavigationLabelStyles: BoxProps = {
  fontStyle: 'normal',
  fontWeight: 'fontWeightNormal',
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight20',
  color: 'colorTextInverseWeak',
  transition: 'all 120ms ease',
  borderRadius: 'borderRadius20',
  cursor: 'pointer',
  display: 'flex',
  outline: 'none',
  paddingY: 'space30',
  marginBottom: 'space20',
  position: 'relative',
  role: 'button',
  zIndex: 'zIndex10',
  _hover: {
    textDecoration: 'underline',
  },
  _focus: {
    boxShadow: 'shadowFocusInverse',
  },
};

// Lavel Selected styles
export const sidebarNavigationLabelSelectedStyles: BoxProps = {
  fontWeight: 'fontWeightSemibold',
  color: 'colorTextInverse',
};

// Nested label styles
export const sidebarNavigationLabelNestedStyles: (theme: ThemeShape) => BoxProps = (theme) => ({
  ...sidebarNavigationLabelStyles,
  paddingY: 'space20',
  fontSize: 'fontSize20',
  marginLeft: 'spaceNegative60',
  width: `calc(100% - ${theme.space.spaceNegative60})`,
  paddingLeft: 'space60',
});

/**
 * Item selected styles
 */
export const sidebarNavigationItemSelectedStyles: BoxProps = {
  ...sidebarNavigationLabelSelectedStyles,
  backgroundColor: 'colorBackgroundInverseStrong',
};
