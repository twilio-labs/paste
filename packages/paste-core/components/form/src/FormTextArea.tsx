import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import TextareaAutosize from 'react-autosize-textarea';
import {FieldWrapper} from './shared/FieldWrapper';
import {Prefix} from './shared/Prefix';
import {Suffix} from './shared/Suffix';
import {safelyFormControlSpreadProps} from './shared/Utils';

export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  hasError?: boolean;
  insertBefore?: React.ReactNode;
  insertAfter?: React.ReactNode;
  className?: never;
  style?: never;
  size?: never;
  height?: never;
  width?: never;
}

/* eslint-disable emotion/syntax-preference */
const TextAreaElement = styled(TextareaAutosize)(() =>
  css({
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    display: 'block',
    width: '100%',
    maxHeight: 'size30',
    fontFamily: 'inherit',
    fontSize: 'fontSize30',
    lineHeight: 'lineHeight30',
    fontWeight: 'fontWeightNormal',
    color: 'colorText',
    paddingTop: 'space30',
    paddingRight: 'space40',
    paddingBottom: 'space30',
    paddingLeft: 'space40',
    borderRadius: 'borderRadius20',
    resize: 'vertical',
    boxShadow: 'none',

    '&::placeholder': {
      color: 'colorTextWeak',
      fontStyle: 'italic',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      color: 'colorTextWeak',
    },
  })
);
/* eslint-enable */

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({id, name, placeholder, children, readOnly, disabled, hasError, insertBefore, insertAfter, ...props}, ref) => {
    return (
      <FieldWrapper readOnly={readOnly} disabled={disabled} hasError={hasError}>
        {insertBefore && <Prefix>{insertBefore}</Prefix>}
        <TextAreaElement
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelyFormControlSpreadProps(props)}
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
        {insertAfter && <Suffix>{insertAfter}</Suffix>}
      </FieldWrapper>
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
