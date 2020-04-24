import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Spinner} from '@twilio-paste/spinner';
import {ButtonWrapper, ButtonChildren, SpinnerWrapper} from './styles';
import {ButtonProps, ButtonStates, ButtonVariants, ButtonSizes, ButtonTabIndexes} from './types';

const handlePropValidation = (
  children: React.ReactNode,
  variant: ButtonVariants,
  as?: string,
  fullWidth?: boolean,
  href?: string,
  size?: ButtonSizes,
  tabIndex?: ButtonTabIndexes
): void => {
  const hasHref = href != null && href !== '';
  const hasTabIndex = tabIndex != null;

  if (as !== 'a' && hasHref) {
    throw new Error(`[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'as="a"'.`);
  }
  if (as === 'a' && !hasHref) {
    throw new Error(`[Paste: Button] Missing href prop for link button.`);
  }
  if (as === 'a' && variant === 'link') {
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

const getButtonState = (disabled?: boolean, loading?: boolean): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

const Button: React.FC<ButtonProps> = ({
  as,
  children,
  disabled,
  fullWidth,
  href,
  loading,
  size,
  tabIndex,
  variant,
  ...props
}) => {
  const buttonState = getButtonState(disabled, loading);
  const showLoading = buttonState === 'loading';
  const showDisabled = buttonState !== 'default';

  // If size isn't passed, come up with a smart default:
  // - 'reset' for variant 'link'
  // - 'icon' if there's 1 child that's an icon
  // - 'default' otherwise
  let defaultSize = size;
  if (defaultSize == null) {
    defaultSize = 'default';

    if (variant === 'link' || variant === 'destructive_link') {
      defaultSize = 'reset';
    } else if (React.Children.count(children) === 1) {
      React.Children.forEach(children, child => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          if (typeof child.type.displayName === 'string' && child.type.displayName.includes('Icon')) {
            defaultSize = 'icon';
          }
        }
      });
    }
  }

  handlePropValidation(children, variant, as, fullWidth, href, size, tabIndex);

  return (
    <ButtonWrapper
      aria-busy={buttonState === 'loading' ? 'true' : 'false'}
      as={as}
      buttonState={buttonState}
      disabled={showDisabled}
      fullWidth={fullWidth}
      href={href}
      size={defaultSize}
      tabIndex={tabIndex}
      variant={variant}
      {...props}
      className={undefined}
      style={undefined}
    >
      <ButtonChildren buttonState={buttonState}>{children}</ButtonChildren>
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
  fullWidth: false,
  loading: false,
  type: 'button',
  variant: 'primary',
};

if (process.env.NODE_ENV === 'development') {
  Button.propTypes = {
    as: PropTypes.string,
    fullWidth: PropTypes.bool,
    href: PropTypes.string,
    loading: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'default', 'icon', 'reset']),
    tabIndex: PropTypes.oneOf([0, -1]),
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset']) as any,
  };
}

Button.displayName = 'Button';

export {ButtonProps};
export {Button};
