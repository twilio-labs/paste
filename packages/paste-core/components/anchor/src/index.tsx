import * as React from 'react';
import * as PropTypes from 'prop-types';
import {StyledAnchor} from './styles';

export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorTabIndexes = 0 | -1;

export interface AnchorProps {
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

const EXTERNAL_URL_REGEX = /^(https?:)[^\s]*$/;
const EXTERNAL_TARGET_DEFAULT = '_blank';
const EXTERNAL_REL_DEFAULT = 'noreferrer noopener';

const isExternalUrl = (url: string): boolean => EXTERNAL_URL_REGEX.test(url);

const Anchor: React.FC<AnchorProps> = props => (
  <StyledAnchor
    href={props.href}
    rel={isExternalUrl(props.href) && !props.rel ? EXTERNAL_REL_DEFAULT : props.rel}
    onBlur={props.onBlur}
    onClick={props.onClick}
    onFocus={props.onFocus}
    tabIndex={props.tabIndex}
    target={props.target || isExternalUrl(props.href) ? EXTERNAL_TARGET_DEFAULT : undefined}
  >
    {props.children}
  </StyledAnchor>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  tabIndex: PropTypes.oneOf([0, -1]),
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
};

Anchor.displayName = 'Anchor';
export {Anchor};
