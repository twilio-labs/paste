import * as React from 'react';
import {Spinner} from '@paste/spinner';
import {ButtonWrapper, ButtonChildren, SpinnerWrapper} from './styles';
import {ButtonProps, ButtonStates} from './types';

const handlePropValidation = (props: ButtonProps): void => {
  const {as: Tag, href, variant, size, tabIndex, fullWidth, children} = props;
  const hasHref = href != null && href !== '';
  const hasTabIndex = tabIndex != null;

  if (Tag !== 'a' && hasHref) {
    throw new Error(`[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'as="a"'.`);
  }
  if (Tag === 'a' && !hasHref) {
    throw new Error(`[Paste: Button] Missing href prop for link button.`);
  }
  if (Tag === 'a' && variant === 'link') {
    throw new Error(`[Paste: Button] This should be a link. Use the [Paste: Anchor] component.`);
  }
  if (variant === 'reset' && size !== 'reset') {
    throw new Error('[Paste: Button] The "RESET" variant can only be used with the "NONE" size.');
  }
  if (size === 'icon' && fullWidth) {
    throw new Error('[Paste: Button] Icon buttons should not be fullWidth.');
  }
  if (children == null) {
    throw new Error(`[Paste: Button] Must have non-null children.`);
  }
  if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1)) {
    throw new Error(`[Paste: Button] tabIndex must be 0 or -1.`);
  }
};

const getButtonState = ({loading, disabled}: ButtonProps): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

const Button: React.FC<ButtonProps> = props => {
  const buttonState = getButtonState(props);
  const showLoading = buttonState === 'loading';
  const disabled = buttonState !== 'default';

  handlePropValidation(props);

  return (
    <ButtonWrapper
      as={props.as}
      autoFocus={props.autoFocus}
      buttonState={buttonState}
      disabled={disabled}
      fullWidth={props.fullWidth}
      href={props.href}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onFocus={props.onFocus}
      size={props.size}
      tabIndex={props.tabIndex}
      type={props.type}
      variant={props.variant}
    >
      <ButtonChildren buttonState={buttonState}>{props.children}</ButtonChildren>
      {showLoading ? (
        <SpinnerWrapper>
          <Spinner size={20} title=". Loading, please wait." />
        </SpinnerWrapper>
      ) : null}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  as: 'button',
  type: 'button',
  variant: 'primary',
  size: 'default',
  disabled: false,
  loading: false,
  fullWidth: false,
};

export {Button};
