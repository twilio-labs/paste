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
    border="none"
    borderBottomColor="transparent"
    borderBottomStyle="solid"
    borderBottomWidth="borderWidth10"
    color="colorTextInverseWeak"
    cursor={props.disabled ? 'not-allowed' : 'pointer'}
    fontSize="fontSize30"
    lineHeight="lineHeight10"
    fontWeight="fontWeightMedium"
    position="relative"
    display="inline-block"
    paddingX="space20"
    paddingTop="space40"
    paddingBottom="space50"
    backgroundColor="transparent"
    textAlign="center"
    _selected={{
      borderBottomColor: 'colorBorderInverseStrong',
      color: 'colorTextInverse',
    }}
    _hover={{
      borderBottomColor: 'colorBorderInverse',
      color: 'colorTextInverseWeak',
    }}
    _disabled={{
      borderBottomColor: 'transparent',
      color: 'colorTextInverseWeaker',
    }}
    _focus={{
      boxShadow: 'shadowFocusInverse',
      outline: 'none',
      borderRadius: 'borderRadius20',
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
