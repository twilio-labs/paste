import PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';

export type InputBoxTypes =
  | 'text'
  | 'email'
  | 'hidden'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'date'
  | 'time'
  | 'url';
export type Variants = 'default' | 'inverse';

export interface FauxInputProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  /*
   * Requiring element here instead of extending directly from BoxProps.
   * This ensures an element prop is always passed on these composite components.
   */
  element: BoxProps['element'];
  hasError?: boolean;
  readOnly?: boolean;
  type?: InputBoxTypes;
  variant?: Variants;
}

export const FauxInputPropTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  element: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel', 'date', 'time']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};
