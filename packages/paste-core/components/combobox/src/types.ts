import {
  UseComboboxPrimitiveProps,
  UseComboboxPrimitiveState,
  UseComboboxPrimitiveReturnValue,
} from '@twilio-paste/combobox-primitive';
import {InputVariants, InputProps} from '@twilio-paste/input';

type Item = string | {[key: string]: any};

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
  optionTemplate?: (item: string | {}) => React.ReactNode;
  groupLabelTemplate?: (groupName: string) => React.ReactNode;
  selectedItem?: UseComboboxPrimitiveProps<Item>['selectedItem'];
  inputValue?: UseComboboxPrimitiveProps<Item>['inputValue'];
  groupItemsBy?: string;
  variant?: InputVariants;
  state?: Partial<UseComboboxPrimitiveReturnValue<Item>>;
}

export interface RenderItemProps extends Pick<ComboboxProps, 'optionTemplate'> {
  item: Item;
  index: number;
  getItemProps: any;
  highlightedIndex: UseComboboxPrimitiveState<Item>['highlightedIndex'];
  inGroup?: boolean;
  optionUID: (id: any) => string;
}

export interface RenderItemsProps extends Omit<RenderItemProps, 'item' | 'index'> {
  items: Item[];
}

export interface RenderGroupItemsProps
  extends RenderItemsProps,
    Pick<ComboboxProps, 'groupLabelTemplate' | 'groupItemsBy'> {
  groupUID: (id: any) => string;
}

export type RenderListBoxProps = RenderGroupItemsProps;
