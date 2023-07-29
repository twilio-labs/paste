import * as React from 'react';
import PropTypes from 'prop-types';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {secureExternalLink} from '@twilio-paste/anchor';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {InPageNavigationContext} from './InPageNavigationContext';

const BASE_STYLES: BoxStyleProps = {
  borderBottomColor: 'transparent',
  borderBottomStyle: 'solid',
  borderBottomWidth: 'borderWidth10',
  color: 'colorTextWeak',
  minWidth: 'sizeSquare130',
  paddingBottom: 'space40',
  paddingLeft: 'space20',
  paddingRight: 'space20',
  paddingTop: 'space40',
  textAlign: 'center',
  fontSize: 'fontSize30',
  fontWeight: 'fontWeightMedium',
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
    boxShadow: 'shadowFocus',
    outline: 'none',
    borderRadius: 'borderRadius20',
  },
};

const CURRENT_PAGE_STYLES: BoxStyleProps = {
  borderBottomColor: 'colorBorderPrimary',
  color: 'colorTextLink',
};

const INVERSE_STYLES: BoxStyleProps = {
  color: 'colorTextInverseWeaker',
  _focus: {
    boxShadow: 'shadowFocusInverse',
    outline: 'none',
    borderRadius: 'borderRadius20',
  },
  _hover: {
    borderBottomColor: 'colorBorderInverse',
    color: 'colorTextInverseWeaker',
  },
};

const INVERSE_CURRENT_PAGE_STYLES: BoxStyleProps = {
  borderBottomColor: 'colorBorderInverseStrong',
  color: 'colorTextInverse',
};

export interface InPageNavigationItemProps extends HTMLPasteProps<'a'> {
  currentPage?: boolean;
  children: NonNullable<React.ReactNode>;
  href: string;
  element?: BoxProps['element'];
}

const InPageNavigationItem = React.forwardRef<HTMLLIElement, InPageNavigationItemProps>(
  ({element = 'IN_PAGE_NAVIGATION_ITEM', currentPage = false, href, children, ...props}, ref) => {
    const {variant} = React.useContext(InPageNavigationContext);
    const isFullWidth = variant === 'fullWidth' || variant === 'inverse_fullWidth';
    const isInverse = variant === 'inverse' || variant === 'inverse_fullWidth';
    let currentPageStyles = {};

    if (currentPage) {
      if (isInverse) currentPageStyles = INVERSE_CURRENT_PAGE_STYLES;
      else currentPageStyles = CURRENT_PAGE_STYLES;
    }

    return (
      <Box
        as="li"
        ref={ref}
        element={element}
        display="flex"
        flexBasis={isFullWidth ? '100%' : undefined}
        flexGrow={isFullWidth ? 1 : undefined}
        flexShrink={isFullWidth ? 1 : undefined}
        minWidth="size0"
      >
        <Box
          {...secureExternalLink(href)}
          {...safelySpreadBoxProps(props)}
          {...BASE_STYLES}
          {...(isInverse ? INVERSE_STYLES : {})}
          {...currentPageStyles}
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
