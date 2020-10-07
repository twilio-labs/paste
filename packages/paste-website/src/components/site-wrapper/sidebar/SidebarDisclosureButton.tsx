import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {ChevronDisclosureExpandedIcon} from '@twilio-paste/icons/esm/ChevronDisclosureExpandedIcon';

export const SidebarDisclosureButton = React.forwardRef(({...props}, ref) => {
  return (
    <Box
      as="button"
      position="relative"
      display="flex"
      alignItems="center"
      width="100%"
      padding="space40"
      fontFamily="fontFamilyText"
      fontSize="inherit"
      fontWeight="fontWeightNormal"
      textAlign="left"
      color="colorText"
      backgroundColor="colorBackground"
      border="none"
      textDecoration="none"
      transition="0.1s background-color ease-in-out"
      outline="none"
      borderRadius="borderRadius10"
      appearance="none"
      ref={ref}
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
        marginRight="space20"
        transform={props['aria-expanded'] ? 'rotate(0deg)' : 'rotate(-90deg)'}
        transition="transform 100ms ease-out"
      >
        <ChevronDisclosureExpandedIcon color="colorTextIcon" decorative size="sizeIcon10" />
      </Box>
      <Box flexGrow={1}>{props.children}</Box>
    </Box>
  );
});
