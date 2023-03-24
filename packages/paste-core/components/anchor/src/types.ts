import type {LayoutProps, SpaceProps} from '@twilio-paste/style-props';
import type {BoxProps} from '@twilio-paste/box';

export type AnchorTabIndexes = 0 | -1;
export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorVariants = 'default' | 'inverse';

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    LayoutProps,
    SpaceProps,
    Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  href: string;
  rel?: string;
  showExternal?: boolean;
  tabIndex?: AnchorTabIndexes;
  target?: AnchorTargets;
  variant?: AnchorVariants;
  i18nExternalLinkLabel?: string;
}
