import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import type {
  UseComboboxPrimitiveProps,
  UseComboboxPrimitiveReturnValue,
  UseComboboxPrimitiveState,
  UseMultiSelectPrimitiveReturnValue,
  UseMultiSelectPrimitiveStateChange,
} from "@twilio-paste/combobox-primitive";
import type { InputProps, InputVariants } from "@twilio-paste/input";
import type React from "react";
import type { VirtualItem } from "react-virtual";

export type {
  UseComboboxPrimitiveGetItemPropsOptions,
  UseComboboxPrimitiveGetMenuPropsOptions,
  GetComboboxPrimitivePropsCommonOptions,
} from "@twilio-paste/combobox-primitive";

export type Item = string | Record<string, unknown>;

export type OptionTemplateFn<ProvidedItem> = (item: ProvidedItem) => React.ReactNode;

type ScrollAlignment = "start" | "center" | "end" | "auto";

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

export interface ComboboxProps extends Omit<InputProps, "id" | "type" | "value" | "autoComplete"> {
  /**
   * Determines whether the Combobox Listbox (options list) is rendered inside a Portal. Defaults to `true`. Use `false` if you are using Combobox inside a Paste Popover to prevent interaction bugs.
   *
   * @type {boolean}
   * @memberof ComboboxProps
   * @default true
   */
  usePortal?: boolean;
  /**
   * Activates the autocomplete/typeahead feature
   *
   * @type {boolean}
   * @memberof ComboboxProps
   */
  autocomplete?: boolean;
  /**
   * The contents of the help and error text
   *
   * @type {string | NonNullable<React.ReactNode>}
   * @memberof ComboboxProps
   */
  helpText?: string | React.ReactNode;
  /**
   * The contents of the label text
   *
   * @type {string | NonNullable<React.ReactNode>}
   * @memberof ComboboxProps
   */
  labelText: string | NonNullable<React.ReactNode>;
  /**
   * This function allows you to use your own jsx template for the items in the drop-down list
   *
   * @memberof ComboboxProps
   */
  optionTemplate?: OptionTemplateFn<any>;
  /**
   * This function allows you to use your own jsx template for the group label in the drop-down list
   *
   * @memberof ComboboxProps
   */
  groupLabelTemplate?: (groupName: string) => React.ReactNode;
  /**
   * The name of the key in your item objects that you would like Combobox to group the items by
   *
   * @type {string}
   * @memberof ComboboxProps
   */
  groupItemsBy?: string;
  /**
   *
   * @type {InputVariants}
   * @default "default"
   * @memberof ComboboxProps
   */
  variant?: InputVariants;
  /**
   *
   * @type {any[]}
   * @memberof ComboboxProps
   */
  disabledItems?: any[];
  /**
   * A custom empty state component to render when there are no items in the list
   *
   * @type {React.FC}
   * @memberof ComboboxProps
   */
  emptyState?: React.FC;
  /**
   *
   * @type {boolean}
   * @memberof ComboboxProps
   */
  hideVisibleLabel?: boolean;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "COMBOBOX"
   * @type {BoxElementProps["element"]}
   * @memberof ComboboxProps
   */
  element?: BoxProps["element"];

  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["initialIsOpen"]}
   * @memberof ComboboxProps
   */
  initialIsOpen?: UseComboboxPrimitiveProps<any>["initialIsOpen"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["initialSelectedItem"]}
   * @memberof ComboboxProps
   */
  initialSelectedItem?: UseComboboxPrimitiveProps<any>["initialSelectedItem"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["items"]}
   * @memberof ComboboxProps
   */
  items: UseComboboxPrimitiveProps<any>["items"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["itemToString"]}
   * @memberof ComboboxProps
   */
  itemToString?: UseComboboxPrimitiveProps<any>["itemToString"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["onHighlightedIndexChange"]}
   * @memberof ComboboxProps
   */
  onHighlightedIndexChange?: UseComboboxPrimitiveProps<any>["onHighlightedIndexChange"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["onInputValueChange"]}
   * @memberof ComboboxProps
   */
  onInputValueChange?: UseComboboxPrimitiveProps<any>["onInputValueChange"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["onIsOpenChange"]}
   * @memberof ComboboxProps
   */
  onIsOpenChange?: UseComboboxPrimitiveProps<any>["onIsOpenChange"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["onSelectedItemChange"]}
   * @memberof ComboboxProps
   */
  onSelectedItemChange?: UseComboboxPrimitiveProps<any>["onSelectedItemChange"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["selectedItem"]}
   * @memberof ComboboxProps
   */
  selectedItem?: UseComboboxPrimitiveProps<any>["selectedItem"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["inputValue"]}
   * @memberof ComboboxProps
   */
  inputValue?: UseComboboxPrimitiveProps<any>["inputValue"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["getA11yStatusMessage"]}
   * @memberof ComboboxProps
   */
  getA11yStatusMessage?: UseComboboxPrimitiveProps<any>["getA11yStatusMessage"];
  /**
   * Downshift useCombobox Hook Prop (see https://github.com/downshift-js/downshift/blob/master/src/hooks/useCombobox/README.md#advanced-props docs)
   *
   * @type {UseComboboxPrimitiveProps<any>["getA11ySelectionMessage"]}
   * @memberof ComboboxProps
   */
  getA11ySelectionMessage?: UseComboboxPrimitiveProps<any>["getA11ySelectionMessage"];

  /**
   * Downshift useCombobox Hook return props for when you are using the hook outside of the component
   *
   * @type {Partial<UseComboboxPrimitiveReturnValue<any>>}
   * @memberof ComboboxProps
   */
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
    | "autocomplete"
    | "initialSelectedItem"
    | "selectedItem"
    | "onSelectedItemChange"
    | "getA11yStatusMessage"
    | "getA11ySelectionMessage"
    | "state"
    // until such time as we have a usecase for hidden multi-select comboboxes
    | "hideVisibleLabel"
    | "element"
  > {
  /**
   * Sets the initial items selected when initialized
   *
   * @type {any[]}
   * @memberof MultiselectComboboxProps
   */
  initialSelectedItems?: any[];
  /**
   * Callback function for after an item is selected or deselected
   *
   * @memberof MultiselectComboboxProps
   */
  onSelectedItemsChange?: (newSelectedItems: UseMultiSelectPrimitiveStateChange<Item>) => void;
  /**
   * Hidden helper text for screen readers
   *
   * @type {BoxStyleProps["maxHeight"]}
   * @memberof MultiselectComboboxProps
   */
  selectedItemsLabelText: string;
  /**
   * Visually hidden string that has instructions for how to remove and select pills with a keyboard
   *
   * @type {string}
   * @memberof MultiselectComboboxProps
   * @default "Press Delete or Backspace to remove. Press Enter to toggle selection."
   */
  i18nKeyboardControls?: string;
  /**
   * The maximum height of the Combobox listbox
   *
   * @type {BoxStyleProps["maxHeight"]}
   * @memberof MultiselectComboboxProps
   * @default "100%"
   */
  maxHeight?: BoxStyleProps["maxHeight"];
  /**
   *
   * @type {UseMultiSelectPrimitiveReturnValue<Item>}
   * @memberof MultiselectComboboxProps
   */
  state?: UseMultiSelectPrimitiveReturnValue<Item>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "MULTISELECT_COMBOBOX"
   * @type {BoxElementProps["element"]}
   * @memberof MultiselectComboboxProps
   */
  element?: BoxProps["element"];
}

export interface ComboboxItemsProps
  extends Pick<
    ComboboxProps,
    "groupItemsBy" | "optionTemplate" | "groupLabelTemplate" | "element" | "emptyState" | "state"
  > {
  items: Item[];
  selectedItems?: Item[];
  disabledItems?: Item[];
  getItemProps: any;
  highlightedIndex: UseComboboxPrimitiveState<Item>["highlightedIndex"];
  totalSize: RowVirtualizer["totalSize"];
  virtualItems: RowVirtualizer["virtualItems"];
}
