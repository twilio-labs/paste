import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import { ArrowDownIcon } from "@twilio-paste/icons/esm/ArrowDownIcon";
import { ArrowUpIcon } from "@twilio-paste/icons/esm/ArrowUpIcon";
import { UnsortedIcon } from "@twilio-paste/icons/esm/UnsortedIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export type SortDirection = "ascending" | "descending" | "none";

interface DataGridHeaderSortIconProps {
  /**
   * Sort direction matching aria spec
   *
   * @type {SortDirection}
   * @memberof DataGridHeaderSortIconProps
   */
  direction: SortDirection;
  element?: BoxProps["element"];
}

const DataGridHeaderSortIcon: React.FC<React.PropsWithChildren<DataGridHeaderSortIconProps>> = ({
  direction,
  element,
}) => {
  switch (direction) {
    case "ascending":
      return <ArrowUpIcon decorative element={element} />;
    case "descending":
      return <ArrowDownIcon decorative element={element} />;
    case "none":
      return <UnsortedIcon decorative element={element} />;
    default:
      return null;
  }
};

DataGridHeaderSortIcon.displayName = "DataGridHeaderSortIcon";

export interface DataGridHeaderSortProps extends HTMLPasteProps<"button">, DataGridHeaderSortIconProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DATA_GRID_HEADER_SORT'
   * @type {BoxProps['element']}
   * @memberof DataGridHeaderSortProps
   */
  element?: BoxProps["element"];
  /**
   * Callback when the sort button is pressed. Used to handle sorting.
   *
   * @memberof DataGridHeaderSortProps
   */
  onClick?: () => void;
  /**
   * Sort button label text when `direction` is "ascending"
   *
   * @default 'Sort ascending'
   * @type {string}
   * @memberof DataGridHeaderSortProps
   */
  i18nAscendingLabel?: string;
  /**
   * Sort button label text when `direction` is "descending"
   *
   * @default 'Sort descending'
   * @type {string}
   * @memberof DataGridHeaderSortProps
   */
  i18nDescendingLabel?: string;
  /**
   * Sort button label text when `direction` is "none"
   *
   * @default 'Unsorted'
   * @type {string}
   * @memberof DataGridHeaderSortProps
   */
  i18nUnsortedLabel?: string;
  tabIndex?: ButtonProps["tabIndex"];
}

/**
 * DataGrid sort button component. Must be placed in a DataGridHeader
 *
 * @param {"ascending" | "descending" | "none"} direction - provided to determine which icon to render
 * @param {function} onClick - callback for when the button is clicked
 * @param {string} element - customization element
 */
export const DataGridHeaderSort: React.FC<React.PropsWithChildren<DataGridHeaderSortProps>> = ({
  direction,
  onClick,
  element = "DATA_GRID_HEADER_SORT",
  i18nAscendingLabel = "Sort ascending",
  i18nDescendingLabel = "Sort descending",
  i18nUnsortedLabel = "Unsorted",
  ...props
}) => {
  const i18nLabelDirectionMap = {
    ascending: i18nAscendingLabel,
    descending: i18nDescendingLabel,
    none: i18nUnsortedLabel,
  };

  return (
    <Button element={element} variant="reset" size="reset" onClick={onClick} {...props}>
      <DataGridHeaderSortIcon element={`${element}_ICON`} direction={direction} />
      <ScreenReaderOnly>{i18nLabelDirectionMap[direction]}</ScreenReaderOnly>
    </Button>
  );
};

DataGridHeaderSort.displayName = "DataGridHeaderSort";
