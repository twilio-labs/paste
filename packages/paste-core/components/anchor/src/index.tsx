import * as React from 'react';
import * as PropTypes from 'prop-types';
import {StyledLink} from './styles';

export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorTabIndexes = 0 | -1;

interface Anchor {
  className?: never;
  children: NonNullable<React.ReactNode>;
  href: string;
  id?: never;
  onBlur?(event: React.FocusEvent<HTMLElement>): void;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  onFocus?(event: React.FocusEvent<HTMLElement>): void;
  rel?: string;
  tabIndex?: AnchorTabIndexes;
  target?: AnchorTargets;
}

const EXTERNAL_LINK_REGEX = /^(https?:)[^\s]*$/;
const EXTERNAL_TARGET_DEFAULT = '_blank';
const EXTERNAL_REL_DEFAULT = 'noreferrer noopener';

const isExternalUrl = (url: string): boolean => EXTERNAL_LINK_REGEX.test(url);

const Anchor: React.FC<Anchor> = props => (
  <StyledLink
    href={props.href}
    rel={isExternalUrl(props.href) && !props.rel ? EXTERNAL_REL_DEFAULT : props.rel}
    onBlur={props.onBlur}
    onClick={props.onClick}
    onFocus={props.onFocus}
    tabIndex={props.tabIndex}
    target={isExternalUrl(props.href) && !props.target ? EXTERNAL_TARGET_DEFAULT : props.target}
  >
    {props.children}
  </StyledLink>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.oneOf([0, -1]),
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
};

Anchor.defaultProps = {
  tabIndex: 0,
  target: '_self',
};

Anchor.displayName = 'Anchor';
export {Anchor};
