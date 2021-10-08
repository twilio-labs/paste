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

export type FocusableStyleProps = {
  textDecoration: 'underline';
  cursor: 'pointer';
  _hover: {textDecoration: 'none'};
  _focus: {boxShadow: 'shadowFocus'; textDecoration: 'none'};
};
export type Wrapper = React.FC<{children: React.ReactNode}>;
export type StyleProps = FocusableStyleProps | Record<string, never>;

export const useFocusableVariants = (
  props: Omit<BadgeProps, 'variant' | 'children'>
): {
  wrapper: Wrapper;
  styleProps: StyleProps;
  spanProps: Partial<Omit<BadgeProps, 'variant' | 'children'>> | Omit<BadgeProps, 'variant' | 'children'>;
} => {
  const redactedProps = safelySpreadBoxProps(props);

  if (hasValidButtonVariantProps(props)) {
    const buttonProps = safelySpreadProps(redactedProps, BUTTON_DENY_LIST);
    return {
      styleProps: {...FOCUSABLE_STYLES} as FocusableStyleProps,
      // eslint-disable-next-line react/display-name
      wrapper: ({children}) => (
        <Button variant="reset" size="reset" type="button" {...buttonProps}>
          {children}
        </Button>
      ),
      spanProps: {},
    };
  }
  if (hasValidAnchorVariantProps(props)) {
    const anchorProps = safelySpreadProps(redactedProps, ANCHOR_DENY_LIST);
    return {
      styleProps: {...FOCUSABLE_STYLES} as FocusableStyleProps,
      // eslint-disable-next-line react/display-name
      wrapper: ({children}) => (
        <Button variant="reset" size="reset" type="button" as="a" {...anchorProps}>
          {children}
        </Button>
      ),
      spanProps: {},
    };
  }

  return {
    styleProps: {},
    // eslint-disable-next-line react/display-name
    wrapper: ({children}) => <>{children}</>,
    spanProps: redactedProps,
  };
};

export const useResizeChildIcons = (children: BadgeChildren): BadgeChildren => {
  const seed = useUIDSeed();

  if (!Array.isArray(children)) {
    return children;
  }

  return React.Children.map(children, (child) => {
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
