import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {InPageNavigationContext} from './InPageNavigationContext';

const getItemStyles = (currentPage: boolean, variant?: string): BoxStyleProps => {
  return {
    borderBottomColor: currentPage ? 'colorBorderPrimary' : 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: 'borderWidth20',
    color: currentPage ? 'colorTextLink' : 'colorTextWeak',
    flexBasis: variant === 'fullWidth' ? '50%' : undefined,
    flexGrow: variant === 'fullWidth' ? 1 : undefined,
    flexShrink: variant === 'fullWidth' ? 1 : undefined,
    minWidth: 'sizeSquare130',
    paddingBottom: 'space40',
    paddingLeft: 'space20',
    paddingRight: 'space20',
    paddingTop: 'space40',
    textAlign: 'center',
    fontSize: 'fontSize30',
    fontWeight: 'fontWeightSemibold',
    overflow: 'hidden',
    position: 'relative',
    textOverflow: 'ellipsis',
    transition: 'border-color 100ms ease, color 100ms ease',
    whiteSpace: 'nowrap',
    display: 'block',
    textDecoration: 'none',

    _hover: {
      borderBottomColor: 'colorBorderPrimaryStronger',
      color: 'colorTextLinkStronger',
    },
    _disabled: {
      borderBottomColor: 'transparent',
      color: 'colorTextWeaker',
    },
    _focus: {
      borderBottomColor: 'colorBorderPrimaryStronger',
      boxShadow: 'shadowFocus',
      color: 'colorTextLinkStronger',
      outline: 'none',
    },
  };
};

export interface InPageNavigationItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  currentPage?: boolean;
  children: NonNullable<React.ReactNode>;
  href: string;
  ref?: any;
  rel?: string; // do we need this? I don't understand how we're using it in Anchor
  element?: BoxProps['element'];
}

const InPageNavigationItem = React.forwardRef<HTMLLIElement, InPageNavigationItemProps>(
  ({element = 'IN_PAGE_NAVIGATION_ITEM', currentPage = false, href, children, ...props}, ref) => {
    const {variant} = React.useContext(InPageNavigationContext);

    return (
      <Box as="li" ref={ref} element={element} display="flex">
        <Box
          {...safelySpreadBoxProps(props)}
          {...getItemStyles(currentPage, variant)}
          as="a"
          ref={ref}
          element={`${element}_ANCHOR`}
          aria-current={currentPage ? 'page' : undefined}
          href={href}
          cursor={props['aria-disabled'] ? 'not-allowed' : 'pointer'}
        >
          {children}
        </Box>
      </Box>
    );
  }
);

InPageNavigationItem.displayName = 'InPageNavigationItem';

InPageNavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  currentPage: PropTypes.bool,
};

export {InPageNavigationItem};
