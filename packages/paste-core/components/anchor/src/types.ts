import type { BoxProps } from "@twilio-paste/box";
import type { LayoutProps, SpaceProps } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";

export type AnchorTabIndexes = 0 | -1;
export type AnchorTargets = "_self" | "_blank" | "_parent" | "_top";
export type AnchorVariants = "default" | "inverse";

export interface AnchorProps extends HTMLPasteProps<"a">, LayoutProps, SpaceProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ANCHOR'
   * @type {BoxProps['element']}
   * @memberof AnchorProps
   */
  element?: BoxProps["element"];
  children: NonNullable<React.ReactNode>;
  /**
   * A URL to route to.
   *
   * @type {string}
   * @memberof AnchorProps
   * @default null
   */
  href: string;
  /**
   * Sets the anchor rel attribute. If external href, defaults to 'noreferrer noopener'. Can be overwritten.
   *
   * @type {string}
   * @memberof AnchorProps
   * @default null
   */
  rel?: string;
  /**
   * Shows the link external icon.
   *
   * @type {boolean}
   * @memberof AnchorProps
   * @default false
   */
  showExternal?: boolean;
  /**
   * Sets the anchor tabIndex attribute.
   *
   * @default null
   * @type {AnchorTabIndexes}
   * @memberof AnchorProps
   */
  tabIndex?: AnchorTabIndexes;
  /**
   * If external href, defaults to '_blank'. Can be overwritten.
   *
   * @default null
   * @type {AnchorTargets}
   * @memberof AnchorProps
   */
  target?: AnchorTargets;
  /**
   * Sets the styled Anchor variant
   *
   * @default 'default'
   * @type {AnchorVariants}
   * @memberof AnchorProps
   */
  variant?: AnchorVariants;
  /**
   * Title for `showExternal` icon
   *
   * @default '(link takes you to an external page)'
   * @type {string}
   * @memberof AnchorProps
   */
  i18nExternalLinkLabel?: string;
}
