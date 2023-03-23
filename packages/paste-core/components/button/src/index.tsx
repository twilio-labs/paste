import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Spinner} from '@twilio-paste/spinner';
import {secureExternalLink} from '@twilio-paste/anchor';
import {useSpring, animated} from '@twilio-paste/animation-library';
import {ArrowForwardIcon} from '@twilio-paste/icons/esm/ArrowForwardIcon';
import {LinkExternalIcon} from '@twilio-paste/icons/esm/LinkExternalIcon';

import type {
  ButtonProps,
  ButtonSizes,
  ButtonContentsProps,
  DirectButtonProps,
  ButtonVariants,
  ButtonStates,
} from './types';
import {ButtonPropTypes} from './proptypes';
import {PrimaryButton} from './PrimaryButton';
import {PrimaryIconButton} from './PrimaryIconButton';
import {SecondaryButton} from './SecondaryButton';
import {SecondaryIconButton} from './SecondaryIconButton';
import {DestructiveButton} from './DestructiveButton';
import {DestructiveIconButton} from './DestructiveIconButton';
import {DestructiveLinkButton} from './DestructiveLinkButton';
import {DestructiveSecondaryButton} from './DestructiveSecondaryButton';
import {LinkButton} from './LinkButton';
import {InverseButton} from './InverseButton';
import {InverseLinkButton} from './InverseLinkButton';
import {ResetButton} from './ResetButton';

export {
  ToggleStyles as ButtonToggleStyles,
  DestructiveSecondaryToggleStyles as DestructiveSecondaryButtonToggleStyles,
} from './styles';

const AnimatedBox = animated(Box);

/*
 * If size isn't passed, come up with a smart default:
 * - 'reset' for variant 'link'
 * - 'icon' if there's 1 child that's an icon
 * - 'default' otherwise
 */
const getButtonSize = (variant: ButtonVariants, children: React.ReactNode, size?: ButtonSizes): ButtonSizes => {
  let smartSize: ButtonSizes = 'default';
  if (size != null) {
    smartSize = size;
  } else if (variant === 'link' || variant === 'destructive_link' || variant === 'reset') {
    smartSize = 'reset';
  } else if (React.Children.count(children) === 1) {
    React.Children.forEach(children, (child) => {
      if (
        React.isValidElement(child) &&
        // @ts-expect-error we know displayName will exist in React
        typeof child.type.displayName === 'string' &&
        // @ts-expect-error we know displayName will exist in React
        child.type.displayName.includes('Icon')
      ) {
        smartSize = 'icon';
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

const handlePropValidation = ({
  as,
  href,
  tabIndex,
  variant,
  size,
  fullWidth,
  children,
  disabled,
  loading,
  pressed,
}: ButtonProps): void => {
  const hasHref = href != null && href !== '';
  const hasTabIndex = tabIndex != null;

  // Link validation
  if (as !== 'a' && hasHref) {
    throw new Error(`[Paste: Button] You cannot pass href into a button without the 'a' tag.  Use 'as="a"'.`);
  }
  if (as === 'a') {
    if (!hasHref) {
      throw new Error(`[Paste: Button] Missing href prop for link button.`);
    }
    if (variant === 'link' || variant === 'inverse_link') {
      throw new Error(`[Paste: Button] Using Button component as an Anchor. Use the Paste Anchor component instead.`);
    }
    if (variant !== 'primary' && variant !== 'secondary' && variant !== 'reset' && variant !== 'inverse') {
      throw new Error(`[Paste: Button] <Button as="a"> only works with the following variants: primary and secondary.`);
    }
    if (disabled || loading) {
      throw new Error(`[Paste: Button] <Button as="a"> cannot be disabled or loading.`);
    }
  }

  // Reset validation
  if (variant === 'reset' && size !== 'reset') {
    throw new Error('[Paste: Button] The "RESET" variant can only be used with the "RESET" size.');
  }

  // Icon validation
  if ((size === 'icon' || size === 'icon_small' || size === 'circle' || size === 'circle_small') && fullWidth) {
    throw new Error('[Paste: Button] Icon buttons should not be fullWidth.');
  }

  // Button validation
  if (children == null) {
    throw new Error(`[Paste: Button] Must have non-null children.`);
  }
  if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1)) {
    throw new Error(`[Paste: Button] tabIndex must be 0 or -1.`);
  }

  // Toggle button validaton
  if (pressed && !(variant === 'secondary' || variant === 'secondary_icon' || variant === 'destructive_secondary')) {
    throw new Error(
      `[Paste: Button] pressed can only be used with "secondary" and "secondary_icon" and "destructive_secondary" variants.`
    );
  }
};

const variantsWithoutBoundingBox = new Set(['link', 'destructive_link', 'inverse_link', 'reset']);

const ButtonContents: React.FC<React.PropsWithChildren<ButtonContentsProps>> = ({
  buttonState,
  children,
  showLoading,
  variant,
}) => {
  const buttonVariantHasBoundingBox = variant && variantsWithoutBoundingBox.has(variant);

  return (
    <>
      <Box
        as="span"
        display="flex"
        textDecoration="inherit"
        opacity={buttonState === 'loading' ? '0' : '1'}
        justifyContent={buttonVariantHasBoundingBox ? null : 'center'}
        columnGap="space20"
        alignItems="center"
      >
        {children}
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
          <Spinner decorative delay={0} />
        </Box>
      ) : null}
    </>
  );
};

ButtonContents.displayName = 'ButtonContents';

const getButtonComponent = (
  variant: ButtonVariants
): React.FunctionComponent<React.PropsWithChildren<DirectButtonProps>> => {
  switch (variant) {
    case 'primary_icon':
      return PrimaryIconButton;
    case 'secondary':
      return SecondaryButton;
    case 'secondary_icon':
      return SecondaryIconButton;
    case 'destructive':
      return DestructiveButton;
    case 'destructive_icon':
      return DestructiveIconButton;
    case 'destructive_secondary':
      return DestructiveSecondaryButton;
    case 'link':
      return LinkButton;
    case 'destructive_link':
      return DestructiveLinkButton;
    case 'reset':
      return ResetButton;
    case 'inverse':
      return InverseButton;
    case 'inverse_link':
      return InverseLinkButton;
    case 'primary':
    default:
      return PrimaryButton;
  }
};

// memo
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({element = 'BUTTON', i18nExternalLinkLabel = '(link takes you to an external page)', ...props}, ref) => {
    const {size, variant, children, disabled, loading, ...rest} = props;
    const [hovered, setHovered] = React.useState(false);
    const arrowIconStyles = useSpring({
      translateX: hovered ? '4px' : '0px',
      config: {
        mass: 0.1,
        tension: 275,
        friction: 16,
      },
    });

    const smartDefaultSize = React.useMemo(() => {
      return getButtonSize(variant, children, size);
    }, [size, variant, children]);

    handlePropValidation({...props, size: smartDefaultSize});

    const buttonState = getButtonState(disabled, loading);
    const showLoading = buttonState === 'loading';
    const showDisabled = buttonState !== 'default';
    const ButtonComponent = getButtonComponent(variant);
    const externalLinkProps = props.href != null ? secureExternalLink(props.href) : null;

    // Automatically inject AnchorForwardIcon for link's dressed as buttons when possible
    let injectIconChildren = children;
    if (props.as === 'a' && props.href != null && typeof children === 'string' && variant !== 'reset') {
      injectIconChildren = (
        <>
          {children}
          {externalLinkProps != null ? (
            <LinkExternalIcon decorative={false} title={i18nExternalLinkLabel} />
          ) : (
            <AnimatedBox style={arrowIconStyles}>
              <ArrowForwardIcon decorative />
            </AnimatedBox>
          )}
        </>
      );
    }

    return (
      <ButtonComponent
        {...externalLinkProps}
        {...rest}
        onMouseEnter={(event) => {
          if (typeof rest.onMouseEnter === 'function') {
            rest.onMouseEnter(event);
          }
          setHovered(true);
        }}
        onMouseLeave={(event) => {
          if (typeof rest.onMouseLeave === 'function') {
            rest.onMouseLeave(event);
          }
          setHovered(false);
        }}
        buttonState={buttonState}
        disabled={showDisabled}
        element={element}
        variant={variant}
        size={smartDefaultSize as ButtonSizes}
        aria-busy={buttonState === 'loading' ? 'true' : 'false'}
        className={undefined}
        style={undefined}
        ref={ref}
      >
        <ButtonContents buttonState={buttonState} showLoading={showLoading} variant={variant}>
          {injectIconChildren}
        </ButtonContents>
      </ButtonComponent>
    );
  }
);

Button.defaultProps = {
  as: 'button',
  fullWidth: false,
  disabled: false,
  loading: false,
  type: 'button',
  variant: 'primary',
};

Button.propTypes = ButtonPropTypes;

Button.displayName = 'Button';

export type {ButtonProps};
export {Button};
