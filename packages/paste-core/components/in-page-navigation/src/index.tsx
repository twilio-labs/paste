import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {AnchorProps} from '@twilio-paste/anchor';
import type {BoxProps} from '@twilio-paste/box';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';

export interface InPageNavigationProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const InPageNavigation = React.forwardRef<HTMLDivElement, InPageNavigationProps>(
  ({element = 'IN_PAGE_NAVIGATION', ...props}, ref) => {
    return (
      <Box as="nav" ref={ref} element={element}>
        <Box as="ul" element={`${element}_ITEMS`}>
          {props.children}
        </Box>
      </Box>
    );
  }
);

InPageNavigation.displayName = 'InPageNavigation';

InPageNavigation.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export interface InPageNavigationItemProps extends Omit<AnchorProps, 'showExternal' | 'i18nExternalLinkLabel'> {
  currentPage?: boolean;
}

const InPageNavigationItem = React.forwardRef<HTMLLIElement, InPageNavigationItemProps>(
  ({element = 'IN_PAGE_NAVIGATION_ITEM', currentPage, href, ...props}, ref) => {
    return (
      <Box as="li" ref={ref} element={element}>
        <Anchor element={`${element}_ANCHOR`} aria-current={currentPage ? 'page' : undefined} href={href}>
          {props.children}
        </Anchor>
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

export {InPageNavigation, InPageNavigationItem};
