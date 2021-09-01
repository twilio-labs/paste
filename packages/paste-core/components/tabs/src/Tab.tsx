import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {TabPrimitive} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import type {Orientation, Variants} from './types';

// TODO:
// Split vertical tabs into a separate component
// because fitted tabs do nothing when orientation
// is vertical, which feels broken. Vertical tabs
// shouldn't get the fitted variant.
const getTabBoxStyles = (orientation: Orientation, variant: Variants): BoxStyleProps => {
  switch (orientation) {
    case 'vertical':
      return {
        borderLeftColor: 'transparent',
        borderLeftStyle: 'solid',
        borderLeftWidth: 'borderWidth20',
        color: 'colorTextWeak',
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
          borderLeftColor: 'colorBorderPrimary',
          color: 'colorTextLink',
        },
        _hover: {
          borderLeftColor: 'colorBorderPrimaryStronger',
          color: 'colorTextLinkStronger',
        },
        _disabled: {
          borderLeftColor: 'transparent',
          color: 'colorTextWeaker',
        },
        _focus: {
          borderLeftColor: 'colorBorderPrimaryStronger',
          boxShadow: 'shadowFocus',
          color: 'colorTextLinkStronger',
          outline: 'none',
        },
      };
    case 'horizontal':
    default:
      return {
        borderBottomColor: 'transparent',
        borderBottomStyle: 'solid',
        borderBottomWidth: 'borderWidth20',
        color: 'colorTextWeak',
        display: 'inline-block',
        flexBasis: variant === 'fitted' ? '50%' : undefined,
        flexGrow: variant === 'fitted' ? 1 : undefined,
        flexShrink: variant === 'fitted' ? 1 : undefined,
        marginRight: variant === 'fitted' ? 'space0' : 'space70',
        minWidth: 'sizeSquare130',
        paddingBottom: 'space40',
        paddingLeft: 'space20',
        paddingRight: 'space20',
        paddingTop: 'space40',
        textAlign: 'center',
        _last: {
          marginRight: 'space0',
        },
        _selected: {
          borderBottomColor: 'colorBorderPrimary',
          color: 'colorTextLink',
        },
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

const Tab = React.forwardRef<HTMLDivElement, TabProps>(({children, element = 'TAB', ...tabProps}, ref) => {
  const tab = React.useContext(TabsContext);
  const boxStyles = React.useMemo(() => getTabBoxStyles(tab.orientation, tab.variant), [tab.orientation, tab.variant]);

  // Do we need to pass into the primitive wrapper?
  // is this just an HOC? Does it add something to the DOM? --> needs element prop.
  return (
    <TabPrimitive {...(tab as any)} {...tabProps} ref={ref}>
      {(props: TabProps) => {
        return (
          <Box
            {...safelySpreadBoxProps(props)}
            {...boxStyles}
            as="span"
            cursor={props['aria-disabled'] ? 'not-allowed' : 'pointer'}
            element={element}
            fontSize="fontSize30"
            fontWeight="fontWeightSemibold"
            overflow={tab.orientation !== 'vertical' ? 'hidden' : undefined}
            position="relative"
            textOverflow={tab.orientation !== 'vertical' ? 'ellipsis' : undefined}
            transition="border-color 100ms ease, color 100ms ease"
            whiteSpace={tab.orientation !== 'vertical' ? 'nowrap' : undefined}
          >
            {children}
          </Box>
        );
      }}
    </TabPrimitive>
  );
});

if (process.env.NODE_ENV === 'development') {
  Tab.propTypes = {
    id: PropTypes.string,
    focusable: PropTypes.bool,
    disabled: PropTypes.bool,
    element: PropTypes.string,
  };
}

Tab.displayName = 'Tab';

export {Tab};
