import { BoxProps } from "@twilio-paste/box";
import { IconSizeOptions } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type CornerOrnamentType = "badge" | "icon" | "avatar";
export type CornerOrnamentPosition = "bottom_end" | "top_end";

export interface CornerOrnamentBaseProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'CORNER_ORNAMENT_BASE'
   * @type {BoxProps['element']}
   * @memberof CornerOrnamentBaseProps
   */
  element?: BoxProps["element"];
  /**
   * Ability to set the padding of the main element
   * @default null
   * @type {'space0'}
   * @memberof CornerOrnamentBaseProps
   */
  padding?: "space0";
}

export interface CornerOrnamentContainerProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default '{constantCase component-name}'
   * @type {BoxProps['element']}
   * @memberof CornerOrnamentContainerProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the position of the CornerOrnament
   * @default 'bottom_end'
   * @type {CornerOrnamentPosition}
   * @memberof CornerOrnamentContainerProps
   */
  position?: CornerOrnamentPosition;
  /**
   * The size of the CornerOrnamentBase used to determine spacing
   * @default null
   * @type {IconSizeOptions}
   * @memberof CornerOrnamentContainerProps
   */
  size: IconSizeOptions;
  /**
   * The type of the corner ornament used. This determines that correct mask to apply to CornerOrnamentBase and without it the cutout will be incorrect.
   * @default null
   * @type {CornerOrnamentType}
   * @memberof CornerOrnamentContainerProps
   */
  cornerOrnamentType: CornerOrnamentType;
}

export interface CornerOrnamentProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default '{constantCase component-name}'
   * @type {BoxProps['element']}
   * @memberof CornerOrnamentProps
   */
  element?: BoxProps["element"];
}

export interface CornerOrnamentContextInterface {
  /**
   * The size of the CornerOrnamentBase used to determine spacing
   * @default null
   * @type {IconSizeOptions}
   * @memberof CornerOrnamentContextInterface
   */
  size: IconSizeOptions;
  /**
   * The type of the corner ornament used. This determines that correct mask to apply to CornerOrnamentBase and without it the cutout will be incorrect.
   * @default null
   * @type {CornerOrnamentType}
   * @memberof CornerOrnamentContextInterface
   */
  cornerOrnamentType: CornerOrnamentType;
  /**
   * Sets the position of the CornerOrnament
   * @default null
   * @type {CornerOrnamentPosition}
   * @memberof CornerOrnamentContextInterface
   */
  position: CornerOrnamentPosition;
}
