import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {LinkExternalIcon} from '@twilio-paste/icons/esm/LinkExternalIcon';
import {DefaultAnchor} from './DefaultAnchor';
import {InverseAnchor} from './InverseAnchor';
import {AnchorProps, AnchorPropTypes} from './types';

const AnchorVariants = {
  inverse: InverseAnchor,
  default: DefaultAnchor,
};

const EXTERNAL_URL_REGEX = /^(https?:)[^\s]*$/;
const EXTERNAL_TARGET_DEFAULT = '_blank';
const EXTERNAL_REL_DEFAULT = 'noreferrer noopener';
export const isExternalUrl = (url: string): boolean => EXTERNAL_URL_REGEX.test(url);

export const secureExternalLink = (href: string): {} | undefined => {
  if (!isExternalUrl(href)) return undefined;
  return {
    rel: EXTERNAL_REL_DEFAULT,
    target: EXTERNAL_TARGET_DEFAULT,
  };
};

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      display,
      height,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX = null,
      marginY = null,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX = null,
      paddingY = null,
      showExternal,
      size,
      variant = 'default',
      verticalAlign,
      width,
      ...props
    },
    ref
  ) => {
    const AnchorComponent = AnchorVariants[variant];

    return (
      <AnchorComponent
        href={props.href}
        ref={ref}
        variant={variant}
        {...secureExternalLink(props.href)}
        {...safelySpreadBoxProps(props)}
        display={display}
        height={height}
        margin={margin}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        marginX={marginX}
        marginY={marginY}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingX={paddingX}
        paddingY={paddingY}
        size={size}
        verticalAlign={verticalAlign}
        width={width}
      >
        {showExternal ? (
          <Box as="span" display="inline-flex" alignItems="center">
            {props.children}
            <LinkExternalIcon decorative={false} title="link takes you to an external page" />
          </Box>
        ) : (
          props.children
        )}
      </AnchorComponent>
    );
  }
);

Anchor.displayName = 'Anchor';

if (process.env.NODE_ENV === 'development') {
  Anchor.propTypes = AnchorPropTypes;
}

export {Anchor};

export * from './types';
