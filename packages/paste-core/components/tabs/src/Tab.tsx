import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {TabPrimitive} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';
import {Orientation, Variants} from './types';

// TODO:
// Split vertical tabs into a separate component
// because fitted tabs do nothing when orientation
// is vertical, which feels broken. Vertical tabs
// shouldn't get the fitted variant.
const getTabBoxStyles = (orientation: Orientation, variant: Variants): {} => {
  switch (orientation) {
    case 'vertical':
      return {
        display: 'block',
        paddingBottom: 'space20',
        paddingTop: 'space20',
        paddingLeft: 'space50',
        paddingRight: 'space50',
        borderLeftWidth: 'borderWidth20',
        borderLeftStyle: 'solid',
        borderLeftColor: 'transparent',
        marginBottom: 'space40',
        _last: {
          marginBottom: 'space0',
        },
        _selected: {
          borderLeftColor: 'colorBorderPrimary',
        },
        _hover: {
          borderLeftColor: 'colorBorderPrimaryDarker',
        },
        _disabled: {
          borderLeftColor: 'transparent',
        },
        _focus: {
          boxShadow: 'shadowFocus',
          outline: 'none',
        },
      };
    case 'horizontal':
    default:
      return {
        display: 'inline-block',
        paddingBottom: 'space30',
        paddingTop: 'space30',
        paddingLeft: 'space20',
        paddingRight: 'space20',
        borderBottomWidth: 'borderWidth20',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        minWidth: 'sizeSquare130',
        marginRight: variant === 'fitted' ? 'space0' : 'space70',
        flexGrow: variant === 'fitted' ? 1 : undefined,
        flexShrink: variant === 'fitted' ? 1 : undefined,
        flexBasis: variant === 'fitted' ? '50%' : undefined,
        textAlign: variant === 'fitted' ? 'center' : undefined,
        _last: {
          marginRight: 'space0',
        },
        _selected: {
          borderBottomColor: 'colorBorderPrimary',
        },
        _hover: {
          borderBottomColor: 'colorBorderPrimaryDarker',
        },
        _disabled: {
          borderBottomColor: 'transparent',
        },
        _focus: {
          boxShadow: 'shadowFocus',
          outline: 'none',
        },
      };
  }
};

const getTabTextStyles = (props: TabProps): {} => {
  if (props['aria-disabled']) {
    return {color: 'colorTextWeaker'};
  }
  if (props['aria-selected']) {
    return {
      color: 'colorTextLink',
      _hover: {
        color: 'colorText',
      },
    };
  }
  return {
    color: 'colorTextWeak',
    _hover: {
      color: 'colorText',
    },
  };
};

export interface TabProps extends Pick<BoxProps, 'element'> {
  id?: string | undefined;
  focusable?: boolean | undefined;
  disabled?: boolean | undefined;
  children: React.ReactNode;
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>(({children, element = 'TAB', ...tabProps}, ref) => {
  const tab = React.useContext(TabsContext);
  const boxStyles = React.useMemo(() => getTabBoxStyles(tab.orientation, tab.variant), [tab.orientation, tab.variant]);
  return (
    <TabPrimitive {...(tab as any)} {...tabProps} ref={ref}>
      {(props: TabProps) => {
        const textStyles = getTabTextStyles(props);
        return (
          <Box
            {...safelySpreadBoxProps(props)}
            {...boxStyles}
            element={element}
            position="relative"
            cursor={props['aria-disabled'] ? 'not-allowed' : 'pointer'}
            transition="border-color 100ms ease"
            textOverflow={tab.orientation !== 'vertical' ? 'ellipsis' : undefined}
            overflow={tab.orientation !== 'vertical' ? 'hidden' : undefined}
            whiteSpace={tab.orientation !== 'vertical' ? 'nowrap' : undefined}
          >
            <Text
              as="span"
              {...textStyles}
              fontSize="fontSize30"
              fontWeight="fontWeightSemibold"
              transition="color 100ms ease"
              _focus={{
                color: 'colorTextLink',
              }}
            >
              {children}
            </Text>
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
  };
}

Tab.displayName = 'Tab';

export {Tab};
