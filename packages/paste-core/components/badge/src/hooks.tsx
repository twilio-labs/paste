import * as React from 'react';
import type {Padding} from '@twilio-paste/style-props';
import {Button} from '@twilio-paste/button';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {useUIDSeed} from '@twilio-paste/uid-library';

import type {BadgeProps} from './types';
import {hasValidAnchorVariantProps, hasValidButtonVariantProps, safelySpreadProps} from './utils';

const BUTTON_DENY_LIST = ['fullWidth', 'as', 'size', 'type', 'variant', 'href'];
const ANCHOR_DENY_LIST = ['variant', 'as', 'onHover'];

const DEFAULT_ICON_SIZE = 'sizeIcon10';
const BADGE_ICON_PADDING = 'space10';
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
  props: Pick<BadgeProps, 'as' | 'onClick' | 'href'>
): {
  wrapper: Wrapper;
  styleProps: StyleProps;
  spanProps: Record<string, any>;
} => {
  const isValidButtonVariant = hasValidButtonVariantProps(props);
  const isValidAnchorVariant = hasValidAnchorVariantProps(props);

  const styleProps = isValidAnchorVariant || isValidButtonVariant ? {...FOCUSABLE_STYLES} : {};

  const redactedProps = safelySpreadBoxProps(props);

  const buttonProps = safelySpreadProps(redactedProps, BUTTON_DENY_LIST);
  const anchorProps = safelySpreadProps(redactedProps, ANCHOR_DENY_LIST);

  // eslint-disable-next-line unicorn/consistent-function-scoping

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
    // UPDATE SPAN PROPS
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

    // UPDATE SPAN PROPS
  }

  return {
    styleProps,
    wrapper: ({children}) => <>{children}</>,
    spanProps: redactedProps,
  };
};

const StyledSpan: React.FC<{children: React.ReactNode}> = ({children, ...props}) => (
  <Box display="inherit" as="span" alignSelf="center" {...props}>
    {children}
  </Box>
);

export const useWrapChildren = (reactChildren: React.ReactNode): React.ReactNode => {
  const seed = useUIDSeed();
  if (!Array.isArray(reactChildren)) {
    return (
      <Box as="span" display="inherit">
        {reactChildren}
      </Box>
    );
  }

  const lastChildIndex = reactChildren.length - 1;

  return reactChildren.map((child, idx) => {
    const key = seed(child);

    if (typeof child === 'string') {
      return <StyledSpan key={key}>{child}</StyledSpan>;
    }

    const nonStringChild = child as React.ReactElement<Record<string, any>, React.NamedExoticComponent>;

    const {
      type: {displayName},
      props,
    } = nonStringChild;

    if (typeof displayName === 'string' && displayName.includes('Icon')) {
      const padding: {[x: string]: Padding} = {
        paddingLeft: BADGE_ICON_PADDING,
        paddingRight: BADGE_ICON_PADDING,
      };
      if (idx === 0) {
        delete padding.paddingLeft;
      } else if (idx === lastChildIndex) {
        delete padding.paddingRight;
      }

      return (
        <StyledSpan key={key} {...padding}>
          {React.cloneElement(nonStringChild, {
            ...props,
            size: DEFAULT_ICON_SIZE,
          })}
        </StyledSpan>
      );
    }

    return <StyledSpan key={key}>{child}</StyledSpan>;
  });
};
