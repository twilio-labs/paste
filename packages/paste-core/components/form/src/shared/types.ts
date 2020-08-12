import * as PropTypes from 'prop-types';

export type FormInputTypes = 'text' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel';
export type FieldVariants = 'default' | 'inverse';

export interface FieldWrapperProps {
  disabled?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
  type?: FormInputTypes;
  variant?: FieldVariants;
}

export const FieldWrapperPropTypes = {
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};
