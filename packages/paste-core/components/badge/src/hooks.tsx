import * as React from 'react';
import {Button} from '@twilio-paste/button';
import {safelySpreadBoxProps} from '@twilio-paste/box';
import {useUIDSeed} from '@twilio-paste/uid-library';

import type {BadgeProps, BadgeChildren} from './types';
import {hasValidAnchorVariantProps, hasValidButtonVariantProps, safelySpreadProps} from './utils';

const BUTTON_DENY_LIST = ['fullWidth', 'as', 'size', 'type', 'variant', 'href'];
const ANCHOR_DENY_LIST = ['variant', 'as', 'onHover'];

const DEFAULT_ICON_SIZE = 'sizeIcon10';
const FOCUSABLE_STYLES = {
  textDecoration: 'underline',
  cursor: 'pointer',
  _hover: {textDecoration: 'none'},
  _focus: {boxShadow: 'shadowFocus', textDecoration: 'none'},
};

export type Wrapper = React.FC<{children: React.ReactNode}>;
export type StyleProps =
  | {
      textDecoration: 'underline';
      cursor: 'pointer';
      _hover: {textDecoration: 'none'};
      _focus: {boxShadow: 'shadowFocus'; textDecoration: 'none'};
    }
  | Record<string, never>;

export const useFocusableVariants = (
  props: Omit<BadgeProps, 'variant' | 'children'>
): {
  wrapper: Wrapper;
  styleProps: StyleProps;
  spanProps: Partial<Omit<BadgeProps, 'variant' | 'children'>> | Omit<BadgeProps, 'variant' | 'children'>;
} => {
  const isValidButtonVariant = hasValidButtonVariantProps(props);
  const isValidAnchorVariant = hasValidAnchorVariantProps(props);

  const styleProps = isValidAnchorVariant || isValidButtonVariant ? {...FOCUSABLE_STYLES} : {};

  const redactedProps = safelySpreadBoxProps(props);

  const buttonProps = safelySpreadProps(redactedProps, BUTTON_DENY_LIST);
  const anchorProps = safelySpreadProps(redactedProps, ANCHOR_DENY_LIST);

  if (isValidButtonVariant) {
    return {
      styleProps,
      wrapper: ({children}) => (
        <Button variant="reset" size="reset" type="button" {...buttonProps}>
          {children}
        </Button>
      ),
      spanProps: {},
    };
  }
  if (isValidAnchorVariant) {
    return {
      styleProps,
      wrapper: ({children}) => (
        <Button variant="reset" size="reset" type="button" as="a" {...anchorProps}>
          {children}
        </Button>
      ),
      spanProps: {},
    };
  }

  return {
    styleProps,
    wrapper: ({children}) => <>{children}</>,
    spanProps: redactedProps,
  };
};

export const useResizeChildIcons = (children: BadgeChildren): BadgeChildren => {
  const seed = useUIDSeed();

  if (!Array.isArray(children)) {
    return children;
  }

  return children.map((child) => {
    if (
      typeof child === 'object' &&
      !Array.isArray(child) &&
      typeof child?.type?.displayName === 'string' &&
      child?.type?.displayName.includes('Icon')
    ) {
      return React.cloneElement(child, {
        ...child.props,
        key: seed(child),
        size: DEFAULT_ICON_SIZE,
      });
    }
    return <React.Fragment key={seed(child)}>{child}</React.Fragment>;
  });
};
