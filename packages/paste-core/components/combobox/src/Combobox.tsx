import * as React from 'react';
import * as PropTypes from 'prop-types';
import {css, styled} from '@twilio-paste/styling-library';
import {useUID, useUIDSeed} from '@twilio-paste/uid-library';
import {useComboboxPrimitive} from '@twilio-paste/combobox-primitive';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Box} from '@twilio-paste/box';
import {InputBox, InputChevronWrapper} from '@twilio-paste/input-box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import type {HelpTextVariants} from '@twilio-paste/help-text';
import {InputElement} from '@twilio-paste/input';
import type {InputVariants} from '@twilio-paste/input';
import type {TextColor} from '@twilio-paste/style-props';
import {ComboboxInputWrapper} from './ComboboxInputWrapper';
import {ComboboxListbox} from './ComboboxListbox';
import {ComboboxListboxGroup} from './ComboboxListboxGroup';
import {ComboboxListboxOption} from './ComboboxListboxOption';
import {getIndexedItems, getGroupedItems} from './helpers';
import type {GroupItemsProps, Item as ItemType, ItemProps, ItemsProps, ListBoxProps, ComboboxProps} from './types';

// Fixes chevron overlapping really long text
// Extra right padding is removed when autocomplete is true
/* eslint-disable emotion/syntax-preference */
const StyledInputAsSelect = styled(InputElement)<ComboboxProps>((props) =>
  css({
    paddingRight: !props.autocomplete ? 'space100' : null,
  })
);
/* eslint-enable */

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({item, index, getItemProps, highlightedIndex, optionTemplate, inGroup}, ref) => {
    const UIDSeed = useUIDSeed();
    return (
      <ComboboxListboxOption
        {...getItemProps({item, index})}
        highlighted={highlightedIndex === index}
        key={UIDSeed(item)}
        variant={inGroup ? 'groupOption' : 'default'}
        ref={ref}
      >
        {optionTemplate ? optionTemplate(item) : item}
      </ComboboxListboxOption>
    );
  }
);

const Items: React.FC<ItemsProps> = ({items, getItemProps, highlightedIndex, optionTemplate}) => {
  return (
    <>
      {items.map((item, index) => (
        <Item
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          item={item}
          index={index}
          getItemProps={getItemProps}
          highlightedIndex={highlightedIndex}
          optionTemplate={optionTemplate}
        />
      ))}
    </>
  );
};

const GroupedItems = React.forwardRef<HTMLDivElement, GroupItemsProps>(
  ({items, getItemProps, highlightedIndex, optionTemplate, groupLabelTemplate, groupItemsBy}, ref) => {
    const UIDSeed = useUIDSeed();

    // Should never happen
    if (groupItemsBy == null) {
      return null;
    }

    // Creating indexed Items so we can use original flat array index values for indexing within groups.
    const indexedItems = getIndexedItems(items);
    const groupedItems = getGroupedItems(indexedItems, groupItemsBy);
    const groupedItemKeys = Object.keys(groupedItems);

    return (
      <>
        {groupedItemKeys.map((groupedItemKey) => {
          // These items are categorized as ungrouped
          if (groupedItemKey === 'undefined') {
            return groupedItems[groupedItemKey].map((item: {[key: string]: any}, index: number) => (
              <Item
                item={item}
                index={item.index}
                key={UIDSeed(`ungrouped-${index}`)}
                getItemProps={getItemProps}
                highlightedIndex={highlightedIndex}
                optionTemplate={optionTemplate}
              />
            ));
          }
          return (
            <ComboboxListboxGroup
              groupName={groupedItemKey}
              groupLabelTemplate={groupLabelTemplate}
              key={UIDSeed(groupedItemKey)}
              ref={ref}
            >
              {groupedItems[groupedItemKey].map((item: {[key: string]: any}, index: number) => {
                return (
                  <Item
                    item={item}
                    index={item.index}
                    key={UIDSeed(`${groupedItemKey}-${index}`)}
                    getItemProps={getItemProps}
                    highlightedIndex={highlightedIndex}
                    optionTemplate={optionTemplate}
                    inGroup
                  />
                );
              })}
            </ComboboxListboxGroup>
          );
        })}
      </>
    );
  }
);

const ListBox: React.FC<ListBoxProps> = ({groupItemsBy, groupLabelTemplate, ...props}) =>
  groupItemsBy ? (
    <GroupedItems {...props} groupItemsBy={groupItemsBy} groupLabelTemplate={groupLabelTemplate} />
  ) : (
    <Items {...props} />
  );

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
    const helpTextId = useUID();
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
              {...(!autocomplete ? {onChange: (event) => event.preventDefault()} : undefined)}
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
          <ListBox
            items={items}
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            optionTemplate={optionTemplate}
            groupItemsBy={groupItemsBy}
            groupLabelTemplate={groupLabelTemplate}
          />
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
