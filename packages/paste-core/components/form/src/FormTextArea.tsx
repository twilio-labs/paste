import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import TextareaAutosize from 'react-autosize-textarea';
import {FormControlWrapper} from './shared/FormControlWrapper';
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
  width?: never;
}

/* eslint-disable emotion/syntax-preference */
const TextAreaElement = styled(TextareaAutosize)(() =>
  css({
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    borderRadius: 'borderRadius20',
    boxShadow: 'none',
    color: 'colorText',
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
      color: 'colorTextWeak',
      fontStyle: 'italic',
    },

    '&:disabled': {
      color: 'colorTextWeaker',
      cursor: 'not-allowed',
    },
  })
);
/* eslint-enable */

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({id, name, placeholder, children, readOnly, disabled, hasError, insertBefore, insertAfter, ...props}, ref) => {
    return (
      <FormControlWrapper
        readOnly={readOnly}
        disabled={disabled}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
      >
        <TextAreaElement
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelySpreadFormControlProps(props)}
          async
          ref={ref}
          id={id}
          name={name}
          rows={3}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          spellCheck
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    hasError: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
}

export {FormTextArea};
