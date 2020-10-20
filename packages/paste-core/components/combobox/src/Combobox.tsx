import * as React from 'react';
import * as PropTypes from 'prop-types';
import {css, styled} from '@twilio-paste/styling-library';
import {useUID, useUIDSeed} from '@twilio-paste/uid-library';
import {useComboboxPrimitive} from '@twilio-paste/combobox-primitive';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {InputBox, InputChevronWrapper} from '@twilio-paste/input-box';
import {Label} from '@twilio-paste/label';
import {HelpText, HelpTextVariants} from '@twilio-paste/help-text';
import {InputElement, InputVariants} from '@twilio-paste/input';
import {TextColor} from '@twilio-paste/style-props';
import {ComboboxInputWrapper} from './ComboboxInputWrapper';
import {ComboboxListbox} from './ComboboxListbox';
import {ComboboxListboxGroup} from './ComboboxListboxGroup';
import {ComboboxListboxOption} from './ComboboxListboxOption';
import {RenderGroupItemsProps, RenderItemProps, RenderItemsProps, RenderListBoxProps, ComboboxProps} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const groupBy = require('lodash.groupby');

// Fixes chevron overlapping really long text
// Extra right padding is removed when autocomplete is true
/* eslint-disable emotion/syntax-preference */
const StyledInputAsSelect = styled(InputElement)<ComboboxProps>(props =>
  css({
    paddingRight: !props.autocomplete ? 'space100' : null,
  })
);
/* eslint-enable */

const renderItem = ({
  item,
  index,
  getItemProps,
  highlightedIndex,
  optionTemplate,
  inGroup,
}: RenderItemProps): React.ReactNode => {
  const UIDSeed = useUIDSeed();
  return (
    <ComboboxListboxOption
      {...getItemProps({item, index})}
      highlighted={highlightedIndex === index}
      key={UIDSeed(index)}
      variant={inGroup ? 'groupOption' : 'default'}
    >
      {optionTemplate ? optionTemplate(item) : item}
    </ComboboxListboxOption>
  );
};

const renderItems = ({items, getItemProps, highlightedIndex, optionTemplate}: RenderItemsProps): React.ReactNode[] =>
  items.map((item, index) => {
    return renderItem({item, index, getItemProps, highlightedIndex, optionTemplate});
  });

const renderGroupedItems = ({
  items,
  getItemProps,
  highlightedIndex,
  optionTemplate,
  groupLabelTemplate,
  groupItemsBy,
}: RenderGroupItemsProps): React.ReactNode[] | null => {
  const UIDSeed = useUIDSeed();

  if (groupItemsBy != null) {
    const groupedItems = groupBy(items, (item: {}) => item[groupItemsBy]);
    let itemIndex = 0;
    return Object.keys(groupedItems).map(group => {
      if (group === 'undefined') {
        return groupedItems[group].map((item: {}) => {
          return renderItem({item, index: itemIndex++, getItemProps, highlightedIndex, optionTemplate});
        });
      }
      return (
        <ComboboxListboxGroup groupName={group} groupLabelTemplate={groupLabelTemplate} key={UIDSeed(group)}>
          {groupedItems[group].map((item: {}) => {
            return renderItem({
              item,
              index: itemIndex++,
              getItemProps,
              highlightedIndex,
              optionTemplate,
              inGroup: true,
            });
          })}
        </ComboboxListboxGroup>
      );
    });
  }
  return null;
};

const renderListBox = ({
  items,
  getItemProps,
  highlightedIndex,
  optionTemplate,
  groupLabelTemplate,
  groupItemsBy,
}: RenderListBoxProps): React.ReactNode[] | null =>
  groupItemsBy
    ? renderGroupedItems({
        items,
        getItemProps,
        highlightedIndex,
        optionTemplate,
        groupItemsBy,
        groupLabelTemplate,
      })
    : renderItems({items, getItemProps, highlightedIndex, optionTemplate});

const getHelpTextVariant = (variant: InputVariants, hasError: boolean | undefined): HelpTextVariants => {
  if (hasError && variant === 'inverse') {
    return 'error_inverse';
  }
  if (hasError) {
    return 'error';
  }
  if (variant === 'inverse') {
    return 'inverse';
  }
  return 'default';
};

const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      autocomplete,
      disabled,
      hasError,
      helpText,
      initialSelectedItem,
      initialIsOpen,
      inputValue,
      insertAfter,
      insertBefore,
      items,
      itemToString,
      labelText,
      onInputValueChange,
      onSelectedItemChange,
      optionTemplate,
      onHighlightedIndexChange,
      onIsOpenChange,
      required,
      selectedItem,
      groupItemsBy,
      groupLabelTemplate,
      variant = 'default',
      state,
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
    } =
      state ||
      useComboboxPrimitive({
        initialSelectedItem,
        items,
        onHighlightedIndexChange,
        onInputValueChange,
        onIsOpenChange,
        onSelectedItemChange,
        ...(itemToString != null && {itemToString}),
        ...(initialIsOpen != null && {initialIsOpen}),
        ...(inputValue != null && {inputValue}),
        ...(selectedItem != null && {selectedItem}),
      });

    if (
      getComboboxProps === undefined ||
      getInputProps === undefined ||
      getItemProps === undefined ||
      getLabelProps === undefined ||
      getMenuProps === undefined ||
      getToggleButtonProps === undefined ||
      highlightedIndex === undefined ||
      isOpen === undefined
    ) {
      throw new Error(
        '[Combobox]: One of getComboboxProps, getInputProps, getItemProps, getLabelProps, getMenuProps, getToggleButtonProps, highlightedIndex or isOpen is missing from the state object. Please make sure this is provided.'
      );
    }

    const helpTextId = useUID();

    let iconColor = 'colorTextIcon' as TextColor;
    if (disabled) {
      iconColor = 'colorTextWeaker';
    } else if (variant === 'inverse') {
      iconColor = 'colorTextInverseWeak';
    }

    return (
      <Box position="relative">
        <Label disabled={disabled} required={required} variant={variant} {...getLabelProps()}>
          {labelText}
        </Label>
        <InputBox
          disabled={disabled}
          hasError={hasError}
          insertBefore={insertBefore}
          insertAfter={insertAfter}
          variant={variant}
        >
          <ComboboxInputWrapper {...getComboboxProps({role: 'combobox'})}>
            <StyledInputAsSelect
              {...getToggleButtonProps({tabIndex: 0})}
              {...getInputProps({disabled, ref})}
              {...(!autocomplete ? {onChange: event => event.preventDefault()} : undefined)}
              autocomplete={autocomplete}
              aria-describedby={helpTextId}
              {...props}
              type="text"
            />
            {!autocomplete && (
              <InputChevronWrapper>
                <ChevronDownIcon aria-hidden="true" decorative color={iconColor} size="sizeIcon30" />
              </InputChevronWrapper>
            )}
          </ComboboxInputWrapper>
        </InputBox>
        <ComboboxListbox hidden={!isOpen} {...getMenuProps()}>
          {renderListBox({
            items,
            getItemProps,
            highlightedIndex,
            optionTemplate,
            groupItemsBy,
            groupLabelTemplate,
          })}
        </ComboboxListbox>
        {helpText && (
          <HelpText id={helpTextId} variant={getHelpTextVariant(variant, hasError)}>
            {helpText}
          </HelpText>
        )}
      </Box>
    );
  }
);

Combobox.displayName = 'Combobox';

if (process.env.NODE_ENV === 'development') {
  Combobox.propTypes = {
    autocomplete: PropTypes.bool,
    groupItemsBy: PropTypes.string,
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    initialIsOpen: PropTypes.bool,
    initialSelectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    itemToString: PropTypes.func,
    labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    onHighlightedIndexChange: PropTypes.func,
    onInputValueChange: PropTypes.func,
    onIsOpenChange: PropTypes.func,
    onSelectedItemChange: PropTypes.func,
    optionTemplate: PropTypes.func,
    selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };
}

export {Combobox};
