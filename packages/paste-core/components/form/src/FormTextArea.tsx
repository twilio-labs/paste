import * as React from 'react';
import * as PropTypes from 'prop-types';
import {BoxProps, Box, safelySpreadBoxProps} from '@twilio-paste/box';
import TextareaAutosize from 'react-autosize-textarea';
import {FormControlWrapper} from './shared/FormControlWrapper';
import {FieldVariants} from './shared/types';
import {safelySpreadFormControlProps} from './shared/Utils';

export interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<BoxProps, 'element'> {
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

export const TextAreaElement = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps & TextareaAutosize.Props>(
  ({element, ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as={TextareaAutosize}
        element={element}
        appearance="none"
        backgroundColor="transparent"
        border="none"
        borderRadius="borderRadius20"
        boxShadow="none"
        color="colorText"
        display="block"
        fontFamily="inherit"
        fontSize="fontSize30"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight20"
        maxHeight="size30"
        outline="none"
        paddingBottom="space30"
        paddingLeft="space40"
        paddingRight="space40"
        paddingTop="space30"
        resize="vertical"
        width="100%"
        _placeholder={{
          color: props.variant === 'inverse' ? 'colorTextInverseWeak' : 'colorTextWeak',
          fontStyle: 'italic',
        }}
        _disabled={{
          color: props.variant === 'inverse' ? 'colorTextInverseWeaker' : 'colorTextWeaker',
          cursor: 'not-allowed',
        }}
        ref={ref}
      />
    );
  }
);

const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  (
    {
      children,
      disabled,
      element = 'FORM_TEXTAREA',
      hasError,
      id,
      insertBefore,
      insertAfter,
      name,
      placeholder,
      readOnly,
      variant,
      ...props
    },
    ref
  ) => {
    return (
      <FormControlWrapper
        element={`${element}_WRAPPER`}
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
          element={element}
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
