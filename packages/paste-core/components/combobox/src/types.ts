import type {
  UseComboboxPrimitiveProps,
  UseComboboxPrimitiveState,
  UseComboboxPrimitiveReturnValue,
} from '@twilio-paste/combobox-primitive';
import type {InputVariants, InputProps} from '@twilio-paste/input';

export type Item = string | {[key: string]: any};

export interface ComboboxProps extends Omit<InputProps, 'id' | 'type' | 'value'> {
  autocomplete?: boolean;
  helpText?: string | React.ReactNode;
  initialIsOpen?: UseComboboxPrimitiveProps<Item>['initialIsOpen'];
  initialSelectedItem?: UseComboboxPrimitiveProps<Item>['initialSelectedItem'];
  items: UseComboboxPrimitiveProps<Item>['items'];
  itemToString?: UseComboboxPrimitiveProps<Item>['itemToString'];
  labelText: string | NonNullable<React.ReactNode>;
  onHighlightedIndexChange?: UseComboboxPrimitiveProps<Item>['onHighlightedIndexChange'];
  onInputValueChange?: UseComboboxPrimitiveProps<Item>['onInputValueChange'];
  onIsOpenChange?: UseComboboxPrimitiveProps<Item>['onIsOpenChange'];
  onSelectedItemChange?: UseComboboxPrimitiveProps<Item>['onSelectedItemChange'];
  optionTemplate?: (item: string | Item) => React.ReactNode;
  groupLabelTemplate?: (groupName: string) => React.ReactNode;
  selectedItem?: UseComboboxPrimitiveProps<Item>['selectedItem'];
  inputValue?: UseComboboxPrimitiveProps<Item>['inputValue'];
  groupItemsBy?: string;
  variant?: InputVariants;
  state?: Partial<UseComboboxPrimitiveReturnValue<Item>>;
}

export interface ItemProps extends Pick<ComboboxProps, 'optionTemplate'> {
  item: Item;
  index: number | string;
  getItemProps: any;
  highlightedIndex: UseComboboxPrimitiveState<Item>['highlightedIndex'];
  inGroup?: boolean;
}

export interface ItemsProps extends Omit<ItemProps, 'item' | 'index'> {
  items: Item[];
}

export interface GroupItemsProps extends ItemsProps, Pick<ComboboxProps, 'groupLabelTemplate' | 'groupItemsBy'> {}

export type ListBoxProps = GroupItemsProps;
