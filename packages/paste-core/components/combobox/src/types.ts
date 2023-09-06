import type React from 'react';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import type {
  UseComboboxPrimitiveProps,
  UseComboboxPrimitiveState,
  UseComboboxPrimitiveReturnValue,
  UseMultiSelectPrimitiveReturnValue,
  UseMultiSelectPrimitiveStateChange,
} from '@twilio-paste/combobox-primitive';
import type {InputVariants, InputProps} from '@twilio-paste/input';
import type {VirtualItem} from 'react-virtual';

export type {
  UseComboboxPrimitiveGetItemPropsOptions,
  UseComboboxPrimitiveGetMenuPropsOptions,
  GetComboboxPrimitivePropsCommonOptions,
} from '@twilio-paste/combobox-primitive';

export type Item = string | Record<string, unknown>;

export type OptionTemplateFn<ProvidedItem> = (item: ProvidedItem) => React.ReactNode;

type ScrollAlignment = 'start' | 'center' | 'end' | 'auto';

interface ScrollToOptions {
  align: ScrollAlignment;
}

export type RowVirtualizer = {
  virtualItems: VirtualItem[];
  totalSize: number;
  scrollToOffset: (index: number, options?: ScrollToOptions | undefined) => void;
  scrollToIndex: (index: number, options?: ScrollToOptions | undefined) => void;
};

export type HighlightedIndexChanges = {
  type: number;
  highlightedIndex: number;
  isOpen: boolean;
  selectedItem: string;
  inputValue: string;
};

export interface ComboboxProps
  extends Omit<InputProps, 'id' | 'type' | 'value' | 'autoComplete'>,
    Pick<BoxProps, 'element'> {
  autocomplete?: boolean;
  helpText?: string | React.ReactNode;
  labelText: string | NonNullable<React.ReactNode>;
  optionTemplate?: OptionTemplateFn<any>;
  groupLabelTemplate?: (groupName: string) => React.ReactNode;
  groupItemsBy?: string;
  variant?: InputVariants;
  disabledItems?: any[];
  emptyState?: React.FC;
  hideVisibleLabel?: boolean;

  // Downshift useCombobox Hook Props. Thes are mainly covered in https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs
  initialIsOpen?: UseComboboxPrimitiveProps<any>['initialIsOpen'];
  initialSelectedItem?: UseComboboxPrimitiveProps<any>['initialSelectedItem'];
  items: UseComboboxPrimitiveProps<any>['items'];
  itemToString?: UseComboboxPrimitiveProps<any>['itemToString'];
  onHighlightedIndexChange?: UseComboboxPrimitiveProps<any>['onHighlightedIndexChange'];
  onInputValueChange?: UseComboboxPrimitiveProps<any>['onInputValueChange'];
  onIsOpenChange?: UseComboboxPrimitiveProps<any>['onIsOpenChange'];
  onSelectedItemChange?: UseComboboxPrimitiveProps<any>['onSelectedItemChange'];
  selectedItem?: UseComboboxPrimitiveProps<any>['selectedItem'];
  inputValue?: UseComboboxPrimitiveProps<any>['inputValue'];
  getA11yStatusMessage?: UseComboboxPrimitiveProps<any>['getA11yStatusMessage'];
  getA11ySelectionMessage?: UseComboboxPrimitiveProps<any>['getA11ySelectionMessage'];

  // Downshift useCombobox Hook return props for when you are using the hook outside of the component
  state?: Partial<UseComboboxPrimitiveReturnValue<any>>;
  /**
   * Use `onInputValueChange` instead.
   * @type {never}
   * @memberof ComboboxProps
   */
  onChange?: never;
  /**
   * Use `onInputValueChange` instead.
   * @type {never}
   * @memberof ComboboxProps
   */
  onInput?: never;
}

export interface MultiselectComboboxProps
  extends Omit<
    ComboboxProps,
    | 'autocomplete'
    | 'initialSelectedItem'
    | 'selectedItem'
    | 'onSelectedItemChange'
    | 'getA11yStatusMessage'
    | 'getA11ySelectionMessage'
    | 'state'
    // until such time as we have a usecase for hidden multi-select comboboxes
    | 'hideVisibleLabel'
  > {
  initialSelectedItems?: any[];
  onSelectedItemsChange?: (newSelectedItems: UseMultiSelectPrimitiveStateChange<Item>) => void;
  selectedItemsLabelText: string;
  i18nKeyboardControls?: string;
  maxHeight?: BoxStyleProps['maxHeight'];
  state?: UseMultiSelectPrimitiveReturnValue<Item>;
}

export interface ComboboxItemsProps
  extends Pick<
    ComboboxProps,
    'groupItemsBy' | 'optionTemplate' | 'groupLabelTemplate' | 'element' | 'emptyState' | 'state'
  > {
  items: Item[];
  selectedItems?: Item[];
  disabledItems?: Item[];
  getItemProps: any;
  highlightedIndex: UseComboboxPrimitiveState<Item>['highlightedIndex'];
  totalSize: RowVirtualizer['totalSize'];
  virtualItems: RowVirtualizer['virtualItems'];
}
