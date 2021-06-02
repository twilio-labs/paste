import * as PropTypes from 'prop-types';

export type InputTypes = 'text' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'date';
export type Variants = 'default' | 'inverse';

export interface FauxInputProps {
  children: NonNullable<React.ReactNode>;
  disabled?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
  type?: InputTypes;
  variant?: Variants;
}

export const FauxInputPropTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  readOnly: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: PropTypes.oneOf(['text', 'email', 'hidden', 'number', 'password', 'search', 'tel', 'date']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};
