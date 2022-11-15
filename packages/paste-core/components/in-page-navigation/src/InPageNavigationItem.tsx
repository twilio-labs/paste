import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {AnchorProps} from '@twilio-paste/anchor';
import type {BoxStyleProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

const getItemStyles = (fullWidth: boolean, currentPage: boolean): BoxStyleProps => {
  return {
    borderBottomColor: currentPage ? 'colorBorderPrimary' : 'transparent',
    borderBottomStyle: 'solid',
    borderBottomWidth: 'borderWidth20',
    color: currentPage ? 'colorTextLink' : 'colorTextWeak',
    flexBasis: fullWidth ? '50%' : undefined,
    flexGrow: fullWidth ? 1 : undefined,
    flexShrink: fullWidth ? 1 : undefined,
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

export interface InPageNavigationItemProps extends Omit<AnchorProps, 'showExternal' | 'i18nExternalLinkLabel'> {
  currentPage?: boolean;
  fullWidth?: boolean;
}

const InPageNavigationItem = React.forwardRef<HTMLLIElement, InPageNavigationItemProps>(
  ({element = 'IN_PAGE_NAVIGATION_ITEM', currentPage = false, href, fullWidth = false, ...props}, ref) => {
    return (
      <Box as="li" ref={ref} element={element} display="flex">
        <Box
          {...safelySpreadBoxProps(props)}
          {...getItemStyles(fullWidth, currentPage)}
          as="a"
          element={`${element}_ANCHOR`}
          aria-current={currentPage ? 'page' : undefined}
          href={href}
          cursor={props['aria-disabled'] ? 'not-allowed' : 'pointer'}
        >
          {props.children}
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
  fullWidth: PropTypes.bool,
};

export {InPageNavigationItem};
