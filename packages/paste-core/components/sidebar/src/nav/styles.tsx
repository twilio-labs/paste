import type {BoxProps} from '@twilio-paste/box';

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

export const sidebarNavigationLabelNestedStyles: BoxProps = {
  ...sidebarNavigationLabelStyles,
  paddingY: 'space20',
  fontSize: 'fontSize20',
};

export const sidebarNavigationLabelSelectedStyles: BoxProps = {
  fontWeight: 'fontWeightSemibold',
  color: 'colorTextInverse',
};
