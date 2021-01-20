import type {
  UseComboboxPrimitiveProps,
  UseComboboxPrimitiveState,
  UseComboboxPrimitiveReturnValue,
} from '@twilio-paste/combobox-primitive';
import type {InputVariants, InputProps} from '@twilio-paste/input';

export type Item = string | {[key: string]: any};

export interface OptionTemplateFn<ProvidedItem> {
  (item: ProvidedItem): React.ReactNode;
}

export interface ComboboxProps extends Omit<InputProps, 'id' | 'type' | 'value'> {
  autocomplete?: boolean;
  helpText?: string | React.ReactNode;
  initialIsOpen?: UseComboboxPrimitiveProps<any>['initialIsOpen'];
  initialSelectedItem?: UseComboboxPrimitiveProps<any>['initialSelectedItem'];
  items: UseComboboxPrimitiveProps<any>['items'];
  itemToString?: UseComboboxPrimitiveProps<any>['itemToString'];
  labelText: string | NonNullable<React.ReactNode>;
  onHighlightedIndexChange?: UseComboboxPrimitiveProps<any>['onHighlightedIndexChange'];
  onInputValueChange?: UseComboboxPrimitiveProps<any>['onInputValueChange'];
  onIsOpenChange?: UseComboboxPrimitiveProps<any>['onIsOpenChange'];
  onSelectedItemChange?: UseComboboxPrimitiveProps<any>['onSelectedItemChange'];
  optionTemplate?: OptionTemplateFn<any>;
  groupLabelTemplate?: (groupName: string) => React.ReactNode;
  selectedItem?: UseComboboxPrimitiveProps<any>['selectedItem'];
  inputValue?: UseComboboxPrimitiveProps<any>['inputValue'];
  groupItemsBy?: string;
  variant?: InputVariants;
  state?: Partial<UseComboboxPrimitiveReturnValue<any>>;
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
