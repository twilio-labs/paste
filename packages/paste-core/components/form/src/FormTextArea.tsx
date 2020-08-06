import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import TextareaAutosize from 'react-autosize-textarea';
import {FormControlWrapper} from './shared/FormControlWrapper';
import {FieldVariants} from './shared/types';
import {safelySpreadFormControlProps} from './shared/Utils';

export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: never;
  disabled?: boolean;
  hasError?: boolean;
  height?: never;
  id: string;
  insertAfter?: React.ReactNode;
  insertBefore?: React.ReactNode;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: never;
  style?: never;
  variant?: FieldVariants;
  width?: never;
}

/* eslint-disable emotion/syntax-preference */
const TextAreaElement = styled(TextareaAutosize)<FormTextAreaProps>(props =>
  css({
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    borderRadius: 'borderRadius20',
    boxShadow: 'none',
    color: 'inherit',
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 'fontSize30',
    fontWeight: 'fontWeightNormal',
    lineHeight: 'lineHeight20',
    maxHeight: 'size30',
    outline: 'none',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    paddingRight: 'space40',
    paddingTop: 'space30',
    resize: 'vertical',
    width: '100%',

    '&::placeholder': {
      color: props.variant === 'inverse' ? 'colorTextInverseWeak' : 'colorTextWeak',
      fontStyle: 'italic',
    },

    '&:focus::placeholder': {
      color: props.variant === 'inverse' ? 'colorTextInverseWeak' : 'colorTextWeak',
    },

    '&:disabled': {
      color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
      cursor: 'not-allowed',
    },
  })
);
/* eslint-enable */

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    {children, disabled, hasError, id, insertBefore, insertAfter, name, placeholder, readOnly, variant, ...props},
    ref
  ) => {
    return (
      <FormControlWrapper
        disabled={disabled}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        readOnly={readOnly}
        variant={variant}
      >
        <TextAreaElement
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelySpreadFormControlProps(props)}
          async
          disabled={disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={ref}
          rows={3}
          spellCheck
          variant={variant}
        >
          {children}
        </TextAreaElement>
      </FormControlWrapper>
    );
  }
);

FormTextArea.displayName = 'FormTextArea';

if (process.env.NODE_ENV === 'development') {
  FormTextArea.propTypes = {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
  };
}

export {FormTextArea};
