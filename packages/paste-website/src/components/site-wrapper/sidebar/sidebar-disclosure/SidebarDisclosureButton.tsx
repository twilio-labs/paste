import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';
import {DisclosurePrimitive} from '@twilio-paste/disclosure-primitive';
import {ChevronDisclosureExpandedIcon} from '@twilio-paste/icons/esm/ChevronDisclosureExpandedIcon';

import {SidebarDisclosureContext} from './SidebarDisclosureContext';

interface SidebarDisclosureButtonProps extends BoxProps {
  onClick?: () => void;
  level: 0 | 1;
}

const StyledButton = React.forwardRef<HTMLButtonElement, SidebarDisclosureButtonProps>(({level, ...props}, ref) => {
  const levelPaddingMap: Partial<
    {
      [key in SidebarDisclosureButtonProps['level']]: Partial<BoxStyleProps>;
    }
  > = {
    0: {
      paddingY: 'space40',
      paddingRight: 'space40',
    },
    1: {
      paddingY: 'space30',
      paddingLeft: 'space50',
      paddingRight: 'space40',
    },
  };

  return (
    <Box
      as="button"
      position="relative"
      display="flex"
      alignItems="center"
      width="100%"
      columnGap="space30"
      fontFamily="fontFamilyText"
      fontSize="inherit"
      fontWeight="fontWeightNormal"
      textAlign="left"
      color="colorText"
      backgroundColor="transparent"
      border="none"
      textDecoration="none"
      transition="0.1s background-color ease-in-out"
      outline="none"
      borderRadius="borderRadius10"
      appearance="none"
      ref={ref}
      {...levelPaddingMap[level]}
      {...props}
      _hover={{
        cursor: 'pointer',
        textDecoration: 'underline',
      }}
      _focus={{
        boxShadow: 'shadowFocus',
        textDecoration: 'underline',
      }}
      _expanded={{
        fontWeight: 'fontWeightBold',
      }}
    >
      <Box
        as="span"
        alignItems="center"
        display="flex"
        transform={props['aria-expanded'] ? 'rotate(0deg)' : 'rotate(-90deg)'}
        transition="transform 100ms ease-out"
      >
        <ChevronDisclosureExpandedIcon
          color="colorTextIcon"
          decorative
          size={['sizeIcon40', 'sizeIcon40', 'sizeIcon10']}
        />
      </Box>
      <Box flexGrow={1}>{props.children}</Box>
    </Box>
  );
});

export const SidebarDisclosureButton: React.FC<SidebarDisclosureButtonProps> = ({children, ...props}) => {
  const {disclosure} = React.useContext(SidebarDisclosureContext);

  return (
    <DisclosurePrimitive as={StyledButton} {...disclosure} {...props}>
      {children}
    </DisclosurePrimitive>
  );
};
