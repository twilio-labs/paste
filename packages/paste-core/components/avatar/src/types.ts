import type { BoxProps } from "@twilio-paste/box";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";
import type { IconSize } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type ColorVariants = "default" | "decorative10" | "decorative20" | "decorative30" | "decorative40";
export type AvatarVariants = "user" | "entity";

export type AvatarProps = HTMLPasteProps<"div"> & {
  /**
   * Used to determine the initials, alt text (if using an image), or title (if using an icon) of the Avatar.
   *
   * @type {string}
   * @memberof AvatarProps
   */
  name: string;
  /**
   *
   * @default sizeIcon70
   * @type {IconSize}
   * @memberof AvatarProps
   */
  size?: IconSize;
  /**
   * Pass a Paste Icon to display in the Avatar
   *
   * @type {React.FC<React.PropsWithChildren<GenericIconProps>>}
   * @memberof AvatarProps
   */
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
  /**
   * Pass an image path to display in the Avatar
   *
   * @default null
   * @type {string}
   * @memberof AvatarProps
   */
  src?: string;
  /**
   * Override the default color for decorative purposes
   *
   * @default default
   * @type {ColorVariants}
   * @memberof AvatarProps
   */
  color?: ColorVariants;
  /**
   *
   * @default user
   * @type {AvatarVariants}
   * @memberof AvatarProps
   */
  variant?: AvatarVariants;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AVATAR"
   * @type {BoxProps["element"]}
   * @memberof AvatarProps
   */
  element?: BoxProps["element"];
};

export type AvatarContentProps = {
  name: string;
  size?: IconSize;
  icon?: React.FC<React.PropsWithChildren<GenericIconProps>>;
  src?: string;
};

export type AvatarGroupProps = HTMLPasteProps<"div"> & {
  /**
   * Set a size for every Avatar within the Avatar Group
   *
   * @default null
   * @type {IconSize}
   * @memberof AvatarGroupProps
   */
  size: IconSize;
  /**
   * Set a variant for every Avatar within the Avatar Group
   *
   * @default null
   * @type {AvatarVariants}
   * @memberof AvatarGroupProps
   */
  variant: AvatarVariants;
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AVATAR_GROUP"
   * @type {BoxProps["element"]}
   * @memberof AvatarGroupProps
   */
  element?: BoxProps["element"];
};
