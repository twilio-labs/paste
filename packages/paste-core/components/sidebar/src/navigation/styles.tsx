import type { BoxProps } from '@twilio-paste/box';

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

// hierarchical item styles
export const sidebarNavigationItemHierarchicalStyles: BoxProps = {
  paddingLeft: 'space70',
};
// Nested item styles
export const sidebarNavigationItemNestedStyles: BoxProps = {
  paddingY: 'space20',
  flexGrow: 1,
  width: '100%',
  fontSize: 'fontSize20',
  marginBottom: 'space20',
  paddingLeft: 'space80',
};

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
