import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import {secureExternalLink} from '@twilio-paste/anchor';

export interface DisplayPillProps extends BoxElementProps {
  href?: string;
  element?: string;
  children: React.ReactNode;
}

export const DisplayPill = React.forwardRef<HTMLElement, DisplayPillProps>(
  ({element = 'DISPLAY_PILL', ...props}, ref) => {
    return (
      <Box as="li" listStyleType="none">
        <Box
          {...safelySpreadBoxProps(props)}
          {...(props.href ? secureExternalLink(props.href) : {})}
          ref={ref}
          element={element}
          as={props.href ? 'a' : 'div'}
          cursor={props.href ? 'pointer' : 'default'}
          color={props.href ? 'colorTextLink' : 'colorText'}
          backgroundColor="colorBackground"
          borderWidth="borderWidth10"
          borderColor="colorBorderWeak"
          borderStyle="solid"
          borderRadius="borderRadius20"
          paddingX="space30"
          paddingY="space20"
          height="30px"
          display="flex"
          columnGap="space20"
          alignItems="center"
        >
          {props.children}
        </Box>
      </Box>
    );
  }
);
