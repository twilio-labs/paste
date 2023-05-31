import type {BoxProps} from '@twilio-paste/box';
import type {ThemeShape} from '@twilio-paste/theme';

/*
 * Disclosure Heading styles
 */
// Base disclosure heading styles
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
  flexGrow: 1,
  columnGap: 'space20',
  outline: 'none',
  paddingY: 'space30',
  position: 'relative',
  role: 'button',
  zIndex: 'zIndex10',
  _focus: {
    boxShadow: 'shadowFocusInverse',
  },
};

// Nested disclosure heading styles
export const sidebarNavigationLabelNestedStyles: BoxProps = {
  ...sidebarNavigationLabelStyles,
  paddingY: 'space20',
  fontSize: 'fontSize20',
};

// Selected disclosure heading styles
export const sidebarNavigationLabelSelectedStyles: BoxProps = {
  fontWeight: 'fontWeightSemibold',
  color: 'colorTextInverse',
};

/*
 * Item styles
 */
// Base item styles
export const sidebarNavigationItemStyles: BoxProps = {
  ...sidebarNavigationLabelStyles,
  background: 'none',
  border: 'none',
  outline: 'none',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  paddingLeft: 'space30',
  paddingRight: 'space30',
  marginBottom: 'space30',
  _hover: {
    textDecoration: 'underline',
  },
};

// Nested item styles
export const sidebarNavigationItemNestedStyles: (theme: ThemeShape) => BoxProps = (theme) => ({
  ...sidebarNavigationItemStyles,
  paddingY: 'space20',
  fontSize: 'fontSize20',
  flexGrow: 1,
  marginLeft: 'spaceNegative60',
  width: `calc(100% + ${theme.space.space60})`,
  paddingLeft: 'space60',
});

// Collapsed item styles
export const sidebarNavigationItemCollapsedStyles: BoxProps = {
  color: 'colorTextIconInverse',
  _hover: {
    background: 'none',
    color: 'colorTextInverse',
  },
};

// Selected item styles
export const sidebarNavigationItemSelectedStyles: BoxProps = {
  ...sidebarNavigationLabelSelectedStyles,
  backgroundColor: 'colorBackgroundInverseStrong',
  color: 'colorTextInverse',
};
