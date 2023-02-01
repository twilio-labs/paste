import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {TabPrimitive} from '@twilio-paste/tabs-primitive';

import {CodeBlockTabsContext} from './CodeBlockTabsContext';

export interface CodeBlockTabProps extends Partial<Omit<HTMLButtonElement, 'children'>> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const StyledCodeBlockTab = React.forwardRef<HTMLButtonElement, CodeBlockTabProps>(({children, ...props}, ref) => (
  <Box
    ref={ref}
    as="button"
    {...safelySpreadBoxProps(props)}
    transition="background-color 150ms ease-in, color 150ms ease-in, border-color 150ms ease-in, box-shadow 150ms ease-in"
    backgroundColor="colorBackgroundInverse"
    color="colorTextInverseWeak"
    fontSize="fontSize30"
    lineHeight="lineHeight30"
    paddingY="space30"
    paddingX="space40"
    margin="space0"
    borderStyle="solid"
    borderWidth="borderWidth10"
    borderColor="transparent"
    borderRadius="borderRadius20"
    _focus={{outline: 'none', boxShadow: 'shadowFocusInverse'}}
    _hover={{backgroundColor: 'colorBackgroundPrimary', color: 'colorTextInverse'}}
    _selected={{
      backgroundColor: 'colorBackgroundBodyInverse',
      color: 'colorTextBrandInverse',
      borderColor: 'colorBorderInverseWeaker',
    }}
    _selected_focus={{borderColor: 'transparent'}}
    _selected_hover={{
      backgroundColor: 'colorBackgroundPrimaryStronger',
      color: 'colorTextWeakest',
      borderColor: 'transparent',
    }}
  >
    {children}
  </Box>
));

StyledCodeBlockTab.displayName = 'StyledCodeBlockTab';

export const CodeBlockTab = React.forwardRef<HTMLButtonElement, CodeBlockTabProps>(
  ({children, element = 'CODE_BLOCK_TAB', ...props}, ref) => {
    const tabState = React.useContext(CodeBlockTabsContext);

    return (
      <TabPrimitive {...tabState} as={StyledCodeBlockTab} element={element} ref={ref} {...props}>
        {children}
      </TabPrimitive>
    );
  }
);

CodeBlockTab.displayName = 'CodeBlockTab';

CodeBlockTab.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
