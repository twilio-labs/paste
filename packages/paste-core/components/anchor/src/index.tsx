import * as React from 'react';
import {StyledLink} from './styles';
import {AnchorProps} from './types';

const EXTERNAL_LINK_REGEX = /^(https?:)[^\s]*$/;
const EXTERNAL_TARGET_DEFAULT = '_blank';
const EXTERNAL_REL_DEFAULT = 'noreferrer noopener';

const isExternalUrl = (url: string): boolean => EXTERNAL_LINK_REGEX.test(url);

const handlePropValidation = ({href, tabIndex}: AnchorProps): void => {
  const hasHref = href != null && href !== '';
  const hasTabIndex = tabIndex != null;

  if (!hasHref) {
    throw new Error(
      `[Paste: Anchor] Missing href prop for anchor. Maybe you're looking for the [Paste: Button] component.`
    );
  }

  if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1)) {
    throw new Error(`[Paste: Anchor] TabIndex must be 0 or -1.`);
  }
};

const Anchor: React.FC<AnchorProps> = props => {
  handlePropValidation(props);

  return (
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
};

export {Anchor};
