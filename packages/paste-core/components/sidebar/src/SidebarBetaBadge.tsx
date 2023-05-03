import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {badgeBaseStyles, useResizeChildIcons} from '@twilio-paste/badge';
import type {BadgeProps} from '@twilio-paste/badge';

type SidebarBetaBadgeProps = Omit<BadgeProps, 'as' | 'variant' | 'size'> & {
  as: 'span' | 'button';
};

export const SidebarBetaBadge = React.forwardRef<HTMLElement, SidebarBetaBadgeProps>(
  ({children, as, element = 'SIDEBAR_BETA_BADGE', ...props}, ref) => {
    const resizedChildren = useResizeChildIcons(children);
    let badgeStyles = badgeBaseStyles;

    if (as === 'button') {
      badgeStyles = {
        ...badgeStyles,
        // The following styles are copied from getBadgeButtonStyles() in the Badge package
        cursor: 'pointer',
        _hover: {top: '1px', boxShadow: 'none'},
        _focus: {top: '1px', boxShadow: 'shadowFocusInverse'}, // shadowFocus in Badge
      };
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...badgeStyles}
        paddingX="space20"
        paddingY="space10"
        boxShadow={as === 'button' ? 'shadowBorderBottomInverseNewWeaker' : 'shadowBorderInverseNewWeaker'}
        backgroundColor="colorBackgroundInverseStrong"
        color="colorTextInverseNew"
        as={as}
        ref={ref}
        element={element}
      >
        {resizedChildren}
      </Box>
    );
  }
);

SidebarBetaBadge.displayName = 'SidebarBetaBadge';

SidebarBetaBadge.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  as: PropTypes.oneOf(['span', 'button']).isRequired,
  onClick: PropTypes.func,
};
