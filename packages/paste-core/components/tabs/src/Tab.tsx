import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {TabPrimitive} from '@twilio-paste/tabs-primitive';
import {TabsContext} from './TabsContext';

type Orientation = 'horizontal' | 'vertical' | undefined;

const getTabBoxStyles = (orientation: Orientation): {} => {
  switch (orientation) {
    case 'vertical':
      return {
        display: 'block',
        right: '-2px',
        paddingBottom: 'space40',
        paddingTop: 'space40',
        paddingLeft: 'space50',
        paddingRight: 'space50',
        borderRightWidth: 'borderWidth20',
        borderRightStyle: 'solid',
        borderRightColor: 'transparent',
        _selected: {
          borderRightColor: 'colorBorderPrimary',
        },
      };
    case 'horizontal':
    default:
      return {
        display: 'inline-block',
        bottom: '-2px',
        paddingBottom: 'space10',
        paddingTop: 'space20',
        paddingLeft: 'space50',
        paddingRight: 'space50',
        borderBottomWidth: 'borderWidth20',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        _selected: {
          borderBottomColor: 'colorBorderPrimary',
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
      color: 'colorText',
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

export interface TabProps {
  id?: string | undefined;
  focusable?: boolean | undefined;
  disabled?: boolean | undefined;
  children: React.ReactNode;
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>(({children, ...tabProps}, ref) => {
  const tab = React.useContext(TabsContext);
  const boxStyles = React.useMemo(() => getTabBoxStyles(tab.orientation), [tab.orientation]);
  return (
    <TabPrimitive {...(tab as any)} {...tabProps} ref={ref}>
      {(props: TabProps) => {
        const textStyles = getTabTextStyles(props);
        return (
          <Box
            {...safelySpreadBoxProps(props)}
            {...boxStyles}
            position="relative"
            cursor={props['aria-disabled'] ? 'not-allowed' : 'pointer'}
            transition="border-color 100ms ease"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            <Text
              as="span"
              {...textStyles}
              fontSize="fontSize40"
              fontWeight="fontWeightMedium"
              transition="color 100ms ease"
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
