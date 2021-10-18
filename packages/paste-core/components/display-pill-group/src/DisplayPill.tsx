import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps} from '@twilio-paste/box';
import {secureExternalLink} from '@twilio-paste/anchor';

type DisplayPillProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & Pick<BoxElementProps, 'element'>;

/**
 * Display represents a saved entity as part of a collection, usually as a result of multi selection.
 * Display pills should not be used in forms or for editing
 * @example
 * <DisplayPill
 *   onFocus={() => {
 *     console.log('Focused Tennis!');
 *   }}
 *   onBlur={() => {
 *     console.log('Blurred Tennis!');
 *   }}
 *   href="https://google.com"
 * >
 *   Tennis
 * </DisplayPill>
 * @see https://paste.twilio.design/components/display-pill-group
 */
export const DisplayPill = React.forwardRef<HTMLAnchorElement, DisplayPillProps>(
  ({element = 'DISPLAY_PILL', ...props}, ref) => {
    return (
      <Box as="li" listStyleType="none">
        <Box
          {...safelySpreadBoxProps(props)}
          {...(props.href ? secureExternalLink(props.href) : {})}
          ref={ref}
          element={element}
          as={props.href ? 'a' : 'div'}
          alignItems="center"
          backgroundColor="colorBackgroundStrong"
          borderRadius="borderRadius10"
          color={props.href ? 'colorTextLinkStrong' : 'colorText'}
          columnGap="space20"
          cursor={props.href ? 'pointer' : 'default'}
          display="flex"
          fontSize="fontSize20"
          fontWeight="fontWeightSemibold"
          lineHeight="lineHeight10"
          paddingX="space30"
          paddingY="space20"
          outline="none"
          _hover={{
            textDecoration: 'none',
          }}
          _focusVisible={{
            backgroundColor: 'colorBackgroundPrimaryWeakest',
            boxShadow: 'shadowFocus',
            color: 'colorTextLinkStronger',
          }}
        >
          {props.children}
        </Box>
      </Box>
    );
  }
);

DisplayPill.displayName = 'DisplayPill';
