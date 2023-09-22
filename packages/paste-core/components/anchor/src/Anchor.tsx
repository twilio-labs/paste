import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import { LinkExternalIcon } from '@twilio-paste/icons/esm/LinkExternalIcon';
import * as React from 'react';

import { DefaultAnchor } from './DefaultAnchor';
import { InverseAnchor } from './InverseAnchor';
import type { AnchorProps } from './types';

const AnchorVariants = {
  inverse: InverseAnchor,
  default: DefaultAnchor,
};

const EXTERNAL_URL_REGEX = /^(https?:)\S*$/;
const EXTERNAL_TARGET_DEFAULT = '_blank';
const EXTERNAL_REL_DEFAULT = 'noreferrer noopener';
export const isExternalUrl = (url: string): boolean => EXTERNAL_URL_REGEX.test(url);

export const secureExternalLink = (
  href: string,
): { rel: typeof EXTERNAL_REL_DEFAULT; target: typeof EXTERNAL_TARGET_DEFAULT } | undefined => {
  if (!isExternalUrl(href)) return undefined;
  return {
    rel: EXTERNAL_REL_DEFAULT,
    target: EXTERNAL_TARGET_DEFAULT,
  };
};

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      element = 'ANCHOR',
      variant = 'default',
      showExternal,
      display,
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth,
      size,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX = null,
      marginY = null,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX = null,
      paddingY = null,
      verticalAlign,
      i18nExternalLinkLabel = '(link takes you to an external page)',
      ...props
    },
    ref,
  ) => {
    const AnchorComponent = AnchorVariants[variant];

    return (
      <AnchorComponent
        href={props.href}
        ref={ref}
        variant={variant}
        {...secureExternalLink(props.href)}
        {...safelySpreadBoxProps(props)}
        element={element}
        display={display}
        height={height}
        minHeight={minHeight}
        maxHeight={maxHeight}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        size={size}
        margin={margin}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        marginX={marginX}
        marginY={marginY}
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingX={paddingX}
        paddingY={paddingY}
        verticalAlign={verticalAlign}
      >
        {showExternal ? (
          <Box as="span">
            {props.children}
            <Box as="span" display="inline-block" flexShrink={0} verticalAlign="middle">
              <LinkExternalIcon decorative={false} title={i18nExternalLinkLabel} />
            </Box>
          </Box>
        ) : (
          props.children
        )}
      </AnchorComponent>
    );
  },
);

Anchor.displayName = 'Anchor';

export { Anchor };

export * from './types';
