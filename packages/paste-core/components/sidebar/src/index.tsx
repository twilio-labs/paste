import {
  type SidebarNavigationDisclosureInitialState,
  type SidebarNavigationDisclosureStateReturn,
} from "./navigation/SidebarNavigationDisclosure";

type SidebarNavigationDisclosureInitialStateProps = SidebarNavigationDisclosureInitialState;
type SidebarNavigationDisclosureStateReturnProps = SidebarNavigationDisclosureStateReturn;

/* Wrapper */
export { Sidebar } from "./Sidebar";
export type { SidebarProps } from "./Sidebar";
export { SidebarBody } from "./SidebarBody";
export type { SidebarBodyProps } from "./SidebarBody";
export { SidebarContext } from "./SidebarContext";
export { SidebarPushContentWrapper } from "./content-wrappers/SidebarPushContentWrapper";
export type { SidebarPushContentWrapperProps } from "./content-wrappers/SidebarPushContentWrapper";
export { SidebarOverlayContentWrapper } from "./content-wrappers/SidebarOverlayContentWrapper";
export type { SidebarOverlayContentWrapperProps } from "./content-wrappers/SidebarOverlayContentWrapper";
/* Header */
export { SidebarHeader } from "./header/SidebarHeader";
export type { SidebarHeaderProps } from "./header/SidebarHeader";
export { SidebarHeaderLabel } from "./header/SidebarHeaderLabel";
export type { SidebarHeaderLabelProps } from "./header/SidebarHeaderLabel";
export { SidebarHeaderIconButton } from "./header/SidebarHeaderIconButton";
export type { SidebarHeaderIconButtonProps } from "./header/SidebarHeaderIconButton";
/* Footer */
export { SidebarFooter } from "./footer/SidebarFooter";
export type { SidebarFooterProps } from "./footer/SidebarFooter";
export { SidebarCollapseButton } from "./footer/SidebarCollapseButton";
export type { SidebarCollapseButtonProps } from "./footer/SidebarCollapseButton";
/* Navigation */
export { SidebarNavigation } from "./navigation/SidebarNavigation";
export type { SidebarNavigationProps } from "./navigation/SidebarNavigation";
export {
  SidebarNavigationDisclosure,
  useSidebarNavigationDisclosureState,
} from "./navigation/SidebarNavigationDisclosure";
// renaming for the sake of documenting the API
export type {
  SidebarNavigationDisclosureInitialStateProps,
  SidebarNavigationDisclosureStateReturnProps,
  SidebarNavigationDisclosureInitialState,
  SidebarNavigationDisclosureStateReturn,
};
export { SidebarNavigationDisclosureHeadingWrapper } from "./navigation/SidebarNavigationDisclosureHeadingWrapper";
export type { SidebarNavigationDisclosureHeadingWrapperProps } from "./navigation/SidebarNavigationDisclosureHeadingWrapper";
export { SidebarNavigationDisclosureHeading } from "./navigation/SidebarNavigationDisclosureHeading";
export type { SidebarNavigationDisclosureHeadingProps } from "./navigation/SidebarNavigationDisclosureHeading";
export { SidebarNavigationDisclosureContent } from "./navigation/SidebarNavigationDisclosureContent";
export type { SidebarNavigationDisclosureContentProps } from "./navigation/SidebarNavigationDisclosureContent";
export { SidebarNavigationItem } from "./navigation/SidebarNavigationItem";
export type { SidebarNavigationItemProps } from "./navigation/SidebarNavigationItem";
export { SidebarNavigationSeparator } from "./navigation/SidebarNavigationSeparator";
export type { SidebarNavigationSeparatorProps } from "./navigation/SidebarNavigationSeparator";
/* Misc */
export { SidebarBetaBadge } from "./SidebarBetaBadge";
export type { SidebarBetaBadgeProps } from "./SidebarBetaBadge";
