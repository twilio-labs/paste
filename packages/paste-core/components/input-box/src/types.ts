import * as PropTypes from 'prop-types';

export type InputTypes = 'text' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel';
export type Variants = 'default' | 'inverse';

export interface FauxInputProps {
  disabled?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
  type?: InputTypes;
  variant?: Variants;
}

export const FauxInputPropTypes = {
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};
