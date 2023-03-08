import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {TabPrimitive} from '@twilio-paste/tabs-primitive';

import {TabsContext} from './TabsContext';
import type {Orientation, Variants} from './types';
import {getElementName} from './utils';

/*
 * TODO:
 * Split vertical tabs into a separate component
 * because fitted tabs do nothing when orientation
 * is vertical, which feels broken. Vertical tabs
 * shouldn't get the fitted variant.
 */
const getTabBoxStyles = (orientation: Orientation, variant: Variants): BoxStyleProps => {
  const isInverse = variant === 'inverse' || variant === 'inverse_fitted';
  const isFitted = variant === 'fitted' || variant === 'inverse_fitted';

  switch (orientation) {
    case 'vertical':
      return {
        borderLeftColor: 'transparent',
        borderLeftStyle: 'solid',
        borderLeftWidth: 'borderWidth10',
        color: isInverse ? 'colorTextInverseWeak' : 'colorTextWeak',
        display: 'block',
        marginBottom: 'space40',
        paddingBottom: 'space30',
        paddingLeft: 'space50',
        paddingRight: 'space50',
        paddingTop: 'space30',
        _last: {
          marginBottom: 'space0',
        },
        _selected: {
          borderLeftColor: isInverse ? 'colorBorderInverseStrong' : 'colorBorderPrimary',
          color: isInverse ? 'colorTextInverse' : 'colorTextLink',
        },
        _hover: {
          borderLeftColor: isInverse ? 'colorBorderInverse' : 'colorBorderPrimaryStronger',
          color: isInverse ? 'colorTextInverseWeak' : 'colorTextLinkStronger',
        },
        _disabled: {
          borderLeftColor: 'transparent',
          color: isInverse ? 'colorTextInverseWeaker' : 'colorTextWeaker',
        },
        _focus: {
          boxShadow: isInverse ? 'shadowFocusInverse' : 'shadowFocus',
          outline: 'none',
          borderRadius: 'borderRadius20',
        },
      };
    case 'horizontal':
    default:
      return {
        borderBottomColor: 'transparent',
        borderBottomStyle: 'solid',
        borderBottomWidth: 'borderWidth10',
        color: isInverse ? 'colorTextInverseWeak' : 'colorTextWeak',
        display: 'inline-block',
        flexBasis: isFitted ? '50%' : undefined,
        flexGrow: isFitted ? 1 : undefined,
        flexShrink: isFitted ? 1 : undefined,
        marginRight: isFitted ? 'space0' : 'space80',
        minWidth: 'sizeSquare130',
        paddingBottom: 'space50',
        paddingX: 'space20',
        paddingTop: 'space40',
        textAlign: 'center',
        _last: {
          marginRight: 'space0',
        },
        _selected: {
          borderBottomColor: isInverse ? 'colorBorderInverseStrong' : 'colorBorderPrimary',
          color: isInverse ? 'colorTextInverse' : 'colorTextLink',
        },
        _hover: {
          borderBottomColor: isInverse ? 'colorBorderInverse' : 'colorBorderPrimaryStronger',
          color: isInverse ? 'colorTextInverseWeak' : 'colorTextLinkStronger',
        },
        _disabled: {
          borderBottomColor: 'transparent',
          color: isInverse ? 'colorTextInverseWeaker' : 'colorTextWeaker',
        },
        _focus: {
          boxShadow: isInverse ? 'shadowFocusInverse' : 'shadowFocus',
          outline: 'none',
          borderRadius: 'borderRadius20',
        },
      };
  }
};

export interface TabProps extends React.HTMLAttributes<HTMLElement> {
  id?: string | undefined;
  focusable?: boolean | undefined;
  disabled?: boolean | undefined;
  element?: BoxProps['element'];
  children: React.ReactNode;
  'aria-disabled'?: boolean;
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>(({children, element, ...tabProps}, ref) => {
  const tab = React.useContext(TabsContext);
  const boxStyles = React.useMemo(() => getTabBoxStyles(tab.orientation, tab.variant), [tab.orientation, tab.variant]);

  const {orientation} = tab;
  const elementName = getElementName(orientation, 'TAB', element);

  return (
    <TabPrimitive
      {...(tab as any)}
      {...tabProps}
      // Setting orientation to undefined for vertical tabs enables up/down and left/right arrow key control
      orientation={orientation === 'vertical' ? undefined : 'horizontal'}
      ref={ref}
    >
      {(props: TabProps) => {
        return (
          <Box
            {...safelySpreadBoxProps(props)}
            {...boxStyles}
            as="span"
            cursor={props['aria-disabled'] ? 'not-allowed' : 'pointer'}
            element={elementName}
            fontSize="fontSize30"
            lineHeight="lineHeight10"
            fontWeight="fontWeightMedium"
            overflow={orientation !== 'vertical' ? 'hidden' : undefined}
            position="relative"
            textOverflow={orientation !== 'vertical' ? 'ellipsis' : undefined}
            transition="border-color 100ms ease, color 100ms ease"
            whiteSpace={orientation !== 'vertical' ? 'nowrap' : undefined}
          >
            {children}
          </Box>
        );
      }}
    </TabPrimitive>
  );
});

Tab.propTypes = {
  id: PropTypes.string,
  focusable: PropTypes.bool,
  disabled: PropTypes.bool,
};

Tab.displayName = 'Tab';

export {Tab};
