import type {
  UseComboboxPrimitiveProps,
  UseComboboxPrimitiveState,
  UseComboboxPrimitiveReturnValue,
} from '@twilio-paste/combobox-primitive';
import type {InputVariants, InputProps} from '@twilio-paste/input';
import type {VirtualItem} from 'react-virtual/types';

export type Item = string | {[key: string]: any};

export interface OptionTemplateFn<ProvidedItem> {
  (item: ProvidedItem): React.ReactNode;
}

type ScrollAlignment = 'start' | 'center' | 'end' | 'auto';

interface ScrollToOptions {
  align: ScrollAlignment;
}

export type RowVirtualizer =
  | {
      virtualItems: VirtualItem[];
      totalSize: number;
      scrollToOffset: (index: number, options?: ScrollToOptions | undefined) => void;
      scrollToIndex: (index: number, options?: ScrollToOptions | undefined) => void;
    }
  | undefined;

export type HighlightedIndexChanges = {
  type: number;
  highlightedIndex: number;
  isOpen: boolean;
  selectedItem: string;
  inputValue: string;
};

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

export interface ComboboxItemsProps
  extends Pick<ComboboxProps, 'groupItemsBy' | 'optionTemplate' | 'groupLabelTemplate'> {
  items: Item[];
  rowVirtualizer: RowVirtualizer | undefined;
  getItemProps: any;
  highlightedIndex: UseComboboxPrimitiveState<Item>['highlightedIndex'];
}
