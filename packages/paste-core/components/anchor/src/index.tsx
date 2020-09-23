import * as React from 'react';
import {safelySpreadTextProps} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
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
  ({variant = 'default', showExternal, ...props}, ref) => {
    const AnchorComponent = AnchorVariants[variant];

    return (
      <AnchorComponent
        href={props.href}
        ref={ref}
        variant={variant}
        {...secureExternalLink(props.href)}
        {...safelySpreadTextProps(props)}
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
