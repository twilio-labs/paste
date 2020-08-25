import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Spinner} from '@twilio-paste/spinner';
import {
  ButtonProps,
  ButtonSizes,
  ButtonContentsProps,
  ButtonVariants,
  DirectButtonProps,
  ButtonStates,
  ButtonPropTypes,
} from './types';
import {PrimaryButton} from './PrimaryButton';
import {SecondaryButton} from './SecondaryButton';
import {DestructiveButton} from './DestructiveButton';
import {LinkButton} from './LinkButton';
import {DestructiveLinkButton} from './DestructiveLinkButton';
import {InverseButton} from './InverseButton';
import {ResetButton} from './ResetButton';

// If size isn't passed, come up with a smart default:
// - 'reset' for variant 'link'
// - 'icon' if there's 1 child that's an icon
// - 'default' otherwise
const getButtonSize = (variant: ButtonVariants, children: React.ReactNode, size?: ButtonSizes): ButtonSizes => {
  let smartSize: ButtonSizes = 'default';
  if (size != null) {
    smartSize = size;
  } else if (variant === 'link' || variant === 'destructive_link') {
    smartSize = 'reset';
  } else if (React.Children.count(children) === 1) {
    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        // @ts-ignore
        if (typeof child.type.displayName === 'string' && child.type.displayName.includes('Icon')) {
          smartSize = 'icon';
        }
      }
    });
  }
  return smartSize;
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

const handlePropValidation = ({as, href, tabIndex, variant, size, fullWidth, children}: ButtonProps): void => {
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
  if (variant !== 'link' && variant !== 'destructive_link' && hasHref) {
    throw new Error(
      `[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'variant="link"' or 'variant="destructive_link"'.`
    );
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

const ButtonContents: React.FC<ButtonContentsProps> = ({buttonState, children, showLoading}) => {
  return (
    <>
      <Box
        as="span"
        display="flex"
        textDecoration="inherit"
        opacity={buttonState === 'loading' ? '0' : '1'}
        aria-hidden={buttonState === 'loading' ? 'true' : 'false'}
      >
        {React.Children.count(children) > 1 ? (
          <Stack as="span" orientation="horizontal" spacing="space20">
            {children}
          </Stack>
        ) : (
          children
        )}
      </Box>
      {showLoading ? (
        <Box
          as="span"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          lineHeight="lineHeight30"
        >
          <Spinner decorative={false} title="Loading, please wait." delay={0} />
        </Box>
      ) : null}
    </>
  );
};

const getButtonComponent = (variant: ButtonVariants): React.FunctionComponent<DirectButtonProps> => {
  switch (variant) {
    case 'secondary':
      return SecondaryButton;
    case 'destructive':
      return DestructiveButton;
    case 'link':
      return LinkButton;
    case 'destructive_link':
      return DestructiveLinkButton;
    case 'reset':
      return ResetButton;
    case 'inverse':
      return InverseButton;
    case 'primary':
    default:
      return PrimaryButton;
  }
};

// memo
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({element = 'BUTTON', ...props}, ref) => {
  const {size, variant, children, disabled, loading, ...rest} = props;

  handlePropValidation(props);

  const buttonState = getButtonState(disabled, loading);
  const showLoading = buttonState === 'loading';
  const showDisabled = buttonState !== 'default';
  const ButtonComponent = getButtonComponent(variant);
  const smartDefaultSize = React.useMemo(() => {
    return getButtonSize(variant, children, size);
  }, [size, variant, children]);

  return (
    <ButtonComponent
      {...rest}
      element={element}
      buttonState={buttonState}
      disabled={showDisabled}
      size={smartDefaultSize as ButtonSizes}
      aria-busy={buttonState === 'loading' ? 'true' : 'false'}
      className={undefined}
      style={undefined}
      variant={variant}
      ref={ref}
    >
      <ButtonContents buttonState={buttonState} showLoading={showLoading}>
        {children}
      </ButtonContents>
    </ButtonComponent>
  );
});

Button.defaultProps = {
  as: 'button',
  fullWidth: false,
  disabled: false,
  loading: false,
  type: 'button',
  variant: 'primary',
};

if (process.env.NODE_ENV === 'development') {
  Button.propTypes = ButtonPropTypes;
}

Button.displayName = 'Button';

export {ButtonProps};
export {Button};
