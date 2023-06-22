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
  textDecoration: 'none',
  _focus: {
    boxShadow: 'shadowFocusInverseInset',
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
  overflow: 'hidden',
  paddingLeft: 'space30',
  paddingRight: 'space30',
  marginBottom: 'space30',
  columnGap: 'space30',
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
  width: '100%',
  paddingLeft: 'space70',
  marginBottom: 'space20',
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
