import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Spinner} from '@twilio-paste/spinner';
import {animated} from '@twilio-paste/animation-library';

import type {
  ButtonProps,
  ButtonSizes,
  ButtonContentsProps,
  DirectButtonProps,
  ButtonVariants,
  ButtonStates,
} from '../../../src/types';

import {PrimaryButton} from '../../../src/PrimaryButton';
import {PrimaryIconButton} from '../../../src/PrimaryIconButton';
import {SecondaryButton} from '../../../src/SecondaryButton';
import {SecondaryIconButton} from '../../../src/SecondaryIconButton';
import {DestructiveButton} from '../../../src/DestructiveButton';
import {DestructiveIconButton} from '../../../src/DestructiveIconButton';
import {DestructiveLinkButton} from '../../../src/DestructiveLinkButton';
import {DestructiveSecondaryButton} from '../../../src/DestructiveSecondaryButton';
import {LinkButton} from '../../../src/LinkButton';
import {InverseButton} from '../../../src/InverseButton';
import {InverseLinkButton} from '../../../src/InverseLinkButton';
import {ResetButton} from '../../../src/ResetButton';

export const AnimatedBox = animated(Box);

// If size isn't passed, come up with a smart default:
// - 'reset' for variant 'link'
// - 'icon' if there's 1 child that's an icon
// - 'default' otherwise
export const getButtonSize = (variant: ButtonVariants, children: React.ReactNode, size?: ButtonSizes): ButtonSizes => {
  let smartSize: ButtonSizes = 'default';
  if (size != null) {
    smartSize = size;
  } else if (variant === 'link' || variant === 'destructive_link' || variant === 'reset') {
    smartSize = 'reset';
  } else if (React.Children.count(children) === 1) {
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        // @ts-expect-error we know displayName will exist in React
        if (typeof child.type.displayName === 'string' && child.type.displayName.includes('Icon')) {
          smartSize = 'icon';
        }
      }
    });
  }
  return smartSize;
};

export const getButtonState = (disabled?: boolean, loading?: boolean): ButtonStates => {
  if (disabled) {
    return 'disabled';
  }
  if (loading) {
    return 'loading';
  }
  return 'default';
};

export const handlePropValidation = ({
  as,
  href,
  tabIndex,
  variant,
  size,
  fullWidth,
  children,
  disabled,
  loading,
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
    if (variant !== 'primary' && variant !== 'secondary' && variant !== 'reset') {
      throw new Error(`[Paste: Button] <Button as="a"> only works with the following variants: primary or secondary.`);
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
  if ((size === 'icon' || size === 'icon_small') && fullWidth) {
    throw new Error('[Paste: Button] Icon buttons should not be fullWidth.');
  }

  // Button validation
  if (children == null) {
    throw new Error(`[Paste: Button] Must have non-null children.`);
  }
  if (hasTabIndex && !(tabIndex === 0 || tabIndex === -1)) {
    throw new Error(`[Paste: Button] tabIndex must be 0 or -1.`);
  }
};

export const variantsWithoutBoundingBox = new Set(['link', 'destructive_link', 'inverse_link', 'reset']);

export const ButtonContents: React.FC<ButtonContentsProps> = ({buttonState, children, showLoading, variant}) => {
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

export const getButtonComponent = (variant: ButtonVariants): React.FunctionComponent<DirectButtonProps> => {
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
