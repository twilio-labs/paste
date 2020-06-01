import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {uid, useUID} from 'react-uid';
import {useComboboxPrimitive, UseComboboxPrimitiveProps} from '@twilio-paste/combobox-primitive';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {
  FormControlWrapper,
  FormHelpText,
  FormLabel,
  InputElement,
  FormInputProps,
  SelectIconWrapper,
} from '@twilio-paste/form';
import {ComboboxInputWrapper} from './ComboboxInputWrapper';
import {ComboboxListbox} from './ComboboxListbox';
import {ComboboxListboxOption} from './ComboboxListboxOption';

// Fixes chevron overlapping really long text
/* eslint-disable emotion/syntax-preference */
const StyledInputAsSelect = styled(InputElement)(
  css({
    paddingRight: 'space100',
  })
);
/* eslint-enable */

export interface ComboboxProps extends Omit<FormInputProps, 'id' | 'type'> {
  autocomplete?: boolean;
  helpText?: string | React.ReactNode;
  initialSelectedItem?: UseComboboxPrimitiveProps<any>['initialSelectedItem'];
  items: UseComboboxPrimitiveProps<any>['items'];
  labelText: string | NonNullable<React.ReactNode>;
  onInputValueChange?: UseComboboxPrimitiveProps<any>['onInputValueChange'];
  onSelectedItemChange?: UseComboboxPrimitiveProps<any>['onSelectedItemChange'];
  itemToString?: UseComboboxPrimitiveProps<any>['itemToString'];
  optionTemplate?: (item: string | {}) => React.ReactNode;
}

const defaultItemToString = (item: string): string => item;

const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      autocomplete,
      disabled,
      hasError,
      helpText,
      initialSelectedItem,
      insertAfter,
      insertBefore,
      items,
      itemToString,
      labelText,
      onInputValueChange,
      onSelectedItemChange,
      optionTemplate,
      required,
      ...props
    },
    ref
  ) => {
    const {
      getComboboxProps,
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
    } = useComboboxPrimitive({
      initialSelectedItem,
      items,
      onInputValueChange,
      onSelectedItemChange,
      itemToString: itemToString || defaultItemToString,
    });
    const helpTextId = useUID();
    return (
      <Box position="relative">
        <FormLabel disabled={disabled} required={required} {...getLabelProps()}>
          {labelText}
        </FormLabel>
        <FormControlWrapper
          disabled={disabled}
          hasError={hasError}
          insertBefore={insertBefore}
          insertAfter={insertAfter}
        >
          <ComboboxInputWrapper {...getComboboxProps({role: 'combobox'})}>
            <StyledInputAsSelect
              {...getInputProps({disabled})}
              {...getToggleButtonProps({tabIndex: 0})}
              {...(!autocomplete ? {onChange: event => event.preventDefault()} : undefined)}
              aria-describedby={helpTextId}
              {...props}
              type="text"
              ref={ref}
              paddingRight="space90"
            />
            <SelectIconWrapper>
              <ChevronDownIcon size="sizeIcon30" decorative aria-hidden="true" />
            </SelectIconWrapper>
          </ComboboxInputWrapper>
        </FormControlWrapper>
        <ComboboxListbox {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => {
              return (
                <ComboboxListboxOption
                  {...getItemProps({item, index})}
                  highlighted={highlightedIndex === index}
                  key={uid(item)}
                >
                  {optionTemplate ? optionTemplate(item) : item}
                </ComboboxListboxOption>
              );
            })}
        </ComboboxListbox>
        {helpText && (
          <FormHelpText id={helpTextId} variant={hasError ? 'error' : undefined}>
            {helpText}
          </FormHelpText>
        )}
      </Box>
    );
  }
);

Combobox.displayName = 'Combobox';

if (process.env.NODE_ENV === 'development') {
  Combobox.propTypes = {
    autocomplete: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    initialSelectedItem: PropTypes.arrayOf(PropTypes.any),
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    onInputValueChange: PropTypes.func,
    onSelectedItemChange: PropTypes.func,
    itemToString: PropTypes.func,
    optionTemplate: PropTypes.func,
  };
}

export {Combobox};
