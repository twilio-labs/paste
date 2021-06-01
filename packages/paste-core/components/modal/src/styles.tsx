import type {BoxStyleProps} from '@twilio-paste/box';

export const modalHeaderStyles = {
  borderBottomStyle: 'solid',
  borderBottomWidth: 'borderWidth10',
  borderBottomColor: 'colorBorderWeaker',
  padding: 'space50',
  margin: 'space0',
  flexShrink: 0,
} as Partial<BoxStyleProps>;

export const modalBodyStyles = {
  overflowY: 'auto',
  padding: 'space50',
  paddingBottom: 'space60',
} as Partial<BoxStyleProps>;

export const modalFooterStyles = {
  borderTopStyle: 'solid',
  borderTopWidth: 'borderWidth10',
  borderTopColor: 'colorBorderWeaker',
  padding: 'space50',
  display: 'flex',
  flexShrink: 0,
} as Partial<BoxStyleProps>;
