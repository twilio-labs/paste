import type { BadgeBaseProps, BadgeButtonProps } from "@twilio-paste/badge";
import type { BoxProps } from "@twilio-paste/box";
import type { ButtonProps } from "@twilio-paste/button";
import type { HTMLPasteProps } from "@twilio-paste/types";

export interface SidePanelProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Accessible label for the Side Panel
   *
   * @type {string}
   * @memberof SidebarProps
   */
  label: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL"
   * @type {BoxProps['element']}
   * @memberof SidePanelProps
   */
  element?: BoxProps["element"];
}

export interface SidePanelBodyProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_BODY"
   * @type {BoxProps['element']}
   * @memberof SidePanelBodyProps
   */
  element?: BoxProps["element"];
}

export interface SidePanelHeaderProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_HEADER"
   * @type {BoxProps['element']}
   * @memberof SidePanelHeaderProps
   */
  element?: BoxProps["element"];
}

export interface SidePanelFooterProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Variant of the Side Panel Footer. When using Side Panel in an AI Chat context, use the "chat" variant to wrap the Chat Composer component.
   * @default "default"
   * @type {"default" | "chat"}
   * @memberof SidePanelFooterProps
   */
  variant?: "default" | "chat";
  /**
   * Sets the `justify-content` CSS property.
   * @default "flex-start"
   * @type {"flex-start" | "flex-end" | "space-between"}
   * @memberof SidePanelFooterProps
   */
  justifyContent?: "flex-start" | "flex-end" | "space-between";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_FOOTER"
   * @type {BoxProps['element']}
   * @memberof SidePanelFooterProps
   */
  element?: BoxProps["element"];
}

export interface SidePanelHeaderActionsProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_HEADER_ACTIONS"
   * @type {BoxProps['element']}
   * @memberof SidePanelHeaderActionsProps
   */
  element?: BoxProps["element"];
}

export interface SidePanelContainerProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Accessible title for the close Side Panel button for non-english languages
   * @type string
   * @memberof SidePanelHeaderProps
   * @default "close the side panel"
   */
  i18nCloseSidePanelTitle?: string;
  /**
   * Accessible title for the open Side Panel button for non-english languages
   * @type string
   * @memberof SidePanelHeaderProps
   * @default "open the side panel"
   */
  i18nOpenSidePanelTitle?: string;
  /**
   * Id for the Side Panel. Gets passed to the `aria-controls` attribute of the Side Panel Button for accessibility. A unique ID will be created if nothing is passed.
   * @type {string}
   * @memberof SidePanelContainerProps
   */
  sidePanelId?: string;
  /**
   * State for the Side Panel. Determines whether the Side Panel is open or closed.
   * @type {boolean}
   * @default false
   * @memberof SidePanelContainerProps
   */
  isOpen: boolean;
  /**
   * Sets the state of the Side Panel between open and closed.
   * @type {Dispatch<SetStateAction<boolean>>}
   * @memberof SidePanelContainerProps
   */
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_CONTAINER"
   * @type {BoxProps['element']}
   * @memberof SidePanelContainerProps
   */
  element?: BoxProps["element"];
}

export type ButtonBadgeProps = BadgeBaseProps &
  Omit<BadgeButtonProps, "onClick"> & {
    onClick?: BadgeButtonProps["onClick"];
  };

type SidePanelButtonBaseProps = {
  id?: string;
  toggle?: () => void;
};

export type SidePanelButtonProps = SidePanelButtonBaseProps &
  Omit<ButtonProps, "as"> & {
    /**
     * Overrides the default element name to apply unique styles with the Customization Provider
     *
     * @default 'SIDE_PANEL_BUTTON'
     * @type {BoxProps['element']}
     * @memberof SidePanelButtonProps
     */
    element?: BoxProps["element"];
  };
export type SidePanelBadgeButtonProps = SidePanelButtonBaseProps &
  Omit<ButtonBadgeProps, "as"> & {
    /**
     * Overrides the default element name to apply unique styles with the Customization Provider
     *
     * @default 'SIDE_PANEL_BADGE'
     * @type {BoxProps['element']}
     * @memberof SidePanelBadgeButtonProps
     */
    element?: BoxProps["element"];
  };

export interface SidePanelPushContentWrapperProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_PANEL_PUSH_CONTENT_WRAPPER"
   * @type {BoxProps["element"]}
   * @memberof SidePanelPushContentWrapperProps
   */
  element?: BoxProps["element"];
}

export interface SidePanelContextProps {
  sidePanelId: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  i18nCloseSidePanelTitle: string;
  i18nOpenSidePanelTitle: string;
}

export interface SidePanelStateReturn {
  sidePanel: {
    /**
     * State for the Side Panel. Determines whether the Side Panel is open or closed.
     *
     * @type {boolean}
     * @default false
     * @memberof SidePanelStateReturn
     */
    isOpen: boolean;
    /**
     * Sets the state of the Side Panel between open and closed.
     *
     * @type {React.Dispatch<React.SetStateAction<boolean>>}
     * @memberof SidePanelStateReturn
     */
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  /**
   * Toggles the Side Panel between open and closed states. Apply to the `onClick` of the component that triggers the Side Panel.
   *
   * @type {() => void}
   * @memberof SidePanelStateReturn
   */
  toggleSidePanel: () => void;
}

export interface UseSidePanelStateProps {
  open?: boolean;
}

export type SidePanelCloseButtonProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  i18nCloseSidePanelTitle: string;
  sidePanelId: string;
  isOpen: boolean;
  element: string;
};
