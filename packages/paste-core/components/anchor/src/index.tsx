import * as React from 'react';
import {safelySpreadTextProps} from '@twilio-paste/text';
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
const isExternalUrl = (url: string): boolean => EXTERNAL_URL_REGEX.test(url);

export const secureExternalLink = (href: string): {} | undefined => {
  if (!isExternalUrl(href)) return undefined;
  return {
    rel: EXTERNAL_REL_DEFAULT,
    target: EXTERNAL_TARGET_DEFAULT,
  };
};

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(({variant = 'default', ...props}, ref) => {
  const AnchorComponent = AnchorVariants[variant];

  return (
    <AnchorComponent
      href={props.href}
      ref={ref}
      variant={variant}
      {...secureExternalLink(props.href)}
      {...safelySpreadTextProps(props)}
    >
      {props.children}
    </AnchorComponent>
  );
});

Anchor.displayName = 'Anchor';

if (process.env.NODE_ENV === 'development') {
  Anchor.propTypes = AnchorPropTypes;
}

export {Anchor};

export * from './types';
