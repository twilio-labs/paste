import type { BadgeBaseProps, BadgeButtonProps } from "@twilio-paste/badge";
import type { BoxProps } from "@twilio-paste/box";
import type { ButtonProps } from "@twilio-paste/button";

export type ButtonBadgeProps = BadgeBaseProps &
  Omit<BadgeButtonProps, "onClick"> & {
    onClick?: BadgeButtonProps["onClick"];
  };

type PopoverButtonBaseProps = {
  id?: string;
  toggle?: () => void;
};

export type PopoverButtonProps = PopoverButtonBaseProps &
  ButtonProps & {
    /**
     * Overrides the default element name to apply unique styles with the Customization Provider
     *
     * @default 'POPOVER_BUTTON'
     * @type {BoxProps['element']}
     * @memberof PopoverButtonProps
     */
    element?: BoxProps["element"];
  };
export type PopoverBadgeButtonProps = PopoverButtonBaseProps &
  Omit<ButtonBadgeProps, "as"> & {
    /**
     * Overrides the default element name to apply unique styles with the Customization Provider
     *
     * @default 'POPOVER_BADGE'
     * @type {BoxProps['element']}
     * @memberof PopoverBadgeButtonProps
     */
    element?: BoxProps["element"];
  };
