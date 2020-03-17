import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Spinner} from '@twilio-paste/spinner';
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
    throw new Error('[Paste: Button] The "RESET" variant can only be used with the "RESET" size.');
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

  // If size isn't passed, come up with a smart default:
  // - 'reset' for variant 'link'
  // - 'icon' if there's 1 child that's an icon
  // - 'default' otherwise
  let defaultSize = props.size;
  if (defaultSize == null) {
    defaultSize = 'default';

    if (props.variant === 'link' || props.variant === 'destructive_link') {
      defaultSize = 'reset';
    } else if (React.Children.count(props.children) === 1) {
      React.Children.forEach(props.children, child => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          if (typeof child.type.displayName === 'string' && child.type.displayName.includes('Icon')) {
            defaultSize = 'icon';
          }
        }
      });
    }
  }

  handlePropValidation(props);

  return (
    <ButtonWrapper
      as={props.as}
      variant={props.variant}
      size={defaultSize}
      buttonState={buttonState}
      disabled={disabled}
      autoFocus={props.autoFocus}
      fullWidth={props.fullWidth}
      href={props.href}
      tabIndex={props.tabIndex}
      type={props.type}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      aria-expanded={props['aria-expanded']}
      aria-haspopup={props['aria-haspopup']}
      aria-controls={props['aria-controls']}
      aria-busy={buttonState === 'loading' ? 'true' : 'false'}
      data-test={props['data-test']}
    >
      <ButtonChildren buttonState={buttonState}>{props.children}</ButtonChildren>
      {showLoading ? (
        <SpinnerWrapper as="span">
          <Spinner decorative={false} title="Loading, please wait." delay={0} />
        </SpinnerWrapper>
      ) : null}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  as: 'button',
  type: 'button',
  variant: 'primary',
  disabled: false,
  loading: false,
  fullWidth: false,
};

if (process.env.NODE_ENV === 'development') {
  Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    href: PropTypes.string,
    autoFocus: PropTypes.bool,
    as: PropTypes.string,
    tabIndex: PropTypes.oneOf([0, -1]),
    variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset']) as any,
    size: PropTypes.oneOf(['small', 'default', 'icon', 'reset']),
    fullWidth: PropTypes.bool,
    /* eslint-disable react/no-unused-prop-types */
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    /* eslint-enable */
    'aria-expanded': PropTypes.oneOf(['true', 'false']),
    'aria-haspopup': PropTypes.oneOf(['true', 'dialog', 'menu']),
    'aria-controls': PropTypes.string,
    'data-test': PropTypes.string,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
}

Button.displayName = 'Button';

export {ButtonProps};
export {Button};
