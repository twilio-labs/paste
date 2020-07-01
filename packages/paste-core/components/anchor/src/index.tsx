import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css, compose, layout, space} from '@twilio-paste/styling-library';
import {LayoutProps, SpaceProps} from '@twilio-paste/style-props';

export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorTabIndexes = 0 | -1;

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LayoutProps, SpaceProps {
  children: NonNullable<React.ReactNode>;
  href: string;
  rel?: string;
  tabIndex?: AnchorTabIndexes;
  target?: AnchorTargets;
  id?: never;
  className?: never;
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

// eslint-disable-next-line emotion/syntax-preference
const StyledAnchor = styled.a(
  css({
    color: 'colorTextLink',
    textDecoration: 'underline',
    outline: 'none',

    '&:hover': {
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    },

    '&:focus, &:active': {
      boxShadow: 'shadowFocus',
      color: 'colorTextLinkDarker',
      textDecoration: 'none',
    },
  }),
  compose(
    space,
    layout
  )
);

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => (
  <StyledAnchor {...secureExternalLink(props.href)} {...props} ref={ref}>
    {props.children}
  </StyledAnchor>
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
