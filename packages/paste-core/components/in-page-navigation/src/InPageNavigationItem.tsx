import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {secureExternalLink} from '@twilio-paste/anchor';

import {InPageNavigationContext} from './InPageNavigationContext';

const BASE_STYLES: BoxStyleProps = {
  borderBottomColor: 'transparent',
  borderBottomStyle: 'solid',
  borderBottomWidth: 'borderWidth20',
  color: 'colorTextWeak',
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
  width: '100%',
  textDecoration: 'none',
  _hover: {
    borderBottomColor: 'colorBorderPrimaryStronger',
    color: 'colorTextLinkStronger',
  },
  _focus: {
    borderBottomColor: 'colorBorderPrimaryStronger',
    boxShadow: 'shadowFocus',
    color: 'colorTextLinkStronger',
    outline: 'none',
  },
};

const CURRENT_PAGE_STYLES: BoxStyleProps = {
  borderBottomColor: 'colorBorderPrimary',
  color: 'colorTextLink',
};

export interface InPageNavigationItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  currentPage?: boolean;
  children: NonNullable<React.ReactNode>;
  href: string;
  element?: BoxProps['element'];
}

const InPageNavigationItem = React.forwardRef<HTMLLIElement, InPageNavigationItemProps>(
  ({element = 'IN_PAGE_NAVIGATION_ITEM', currentPage = false, href, children, ...props}, ref) => {
    const {variant} = React.useContext(InPageNavigationContext);

    return (
      <Box
        as="li"
        ref={ref}
        element={element}
        display="flex"
        flexBasis="100%"
        flexGrow={variant === 'fullWidth' ? 1 : undefined}
        flexShrink={variant === 'fullWidth' ? 1 : undefined}
        minWidth="size0"
      >
        <Box
          {...secureExternalLink(href)}
          {...safelySpreadBoxProps(props)}
          {...BASE_STYLES}
          {...(currentPage ? CURRENT_PAGE_STYLES : {})}
          as="a"
          ref={ref}
          element={`${element}_ANCHOR`}
          aria-current={currentPage ? 'page' : undefined}
          href={href}
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
  href: PropTypes.string.isRequired,
};

export {InPageNavigationItem};
