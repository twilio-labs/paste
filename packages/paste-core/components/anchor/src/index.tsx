import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text, safelySpreadTextProps} from '@twilio-paste/text';

export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorTabIndexes = 0 | -1;

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: NonNullable<React.ReactNode>;
  href: string;
  rel?: string;
  tabIndex?: AnchorTabIndexes;
  target?: AnchorTargets;
}

const EXTERNAL_URL_REGEX = /^(https?:)[^\s]*$/;
const EXTERNAL_TARGET_DEFAULT = '_blank';
const EXTERNAL_REL_DEFAULT = 'noreferrer noopener';
const isExternalUrl = (url: string): boolean => EXTERNAL_URL_REGEX.test(url);

export const secureExternalLink = (href: string): {} | undefined => {
  if (!isExternalUrl(href)) return undefined;
  return {
    rel: EXTERNAL_REL_DEFAULT,
    target: EXTERNAL_TARGET_DEFAULT,
  };
};

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => (
  <Text
    as="a"
    color="colorTextLink"
    textDecoration="underline"
    outline="none"
    ref={ref}
    _active={{
      boxShadow: 'shadowFocus',
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    }}
    _focus={{
      boxShadow: 'shadowFocus',
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    }}
    _hover={{
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    }}
    {...secureExternalLink(props.href)}
    {...safelySpreadTextProps(props)}
  >
    {props.children}
  </Text>
));

Anchor.displayName = 'Anchor';

if (process.env.NODE_ENV === 'development') {
  Anchor.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    rel: PropTypes.string,
    tabIndex: PropTypes.oneOf([0, -1]),
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  };
}
export {Anchor};
