/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProductInternetOfThingsProgrammableXIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProductInternetOfThingsProgrammableXIcon = React.forwardRef<
  HTMLElement,
  ProductInternetOfThingsProgrammableXIconProps
>(({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
  const titleId = `ProductInternetOfThingsProgrammableXIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProductInternetOfThingsProgrammableXIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
      <svg
        role="img"
        aria-hidden={decorative}
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          d="M5.9 15.5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1h-2c-.6 0-1-.4-1-1zm-.4-4.4L3.6 8.9c-.4-.4-1-.5-1.4-.1-.4.4-.5 1-.1 1.4l1.8 2.2c.1.1.1.2 0 .3L2 15c-.4.4-.3 1.1.1 1.4.2.2.4.2.6.2.3 0 .6-.1.8-.4l1.9-2.3c.8-.8.7-2 .1-2.8zm24.4 1.1v9.7c0 1-.5 1.9-1.3 2.5l-7 4.7c-.5.3-1.1.5-1.7.5-.6 0-1.2-.2-1.7-.5l-11-7.6c-.3-.2-.6-.5-.8-.8-.2-.3-.4-.7-.4-1.1v-.2c-.1-.5.3-1 .9-1.1.6-.1 1 .3 1.1.9v.1c0 .1.1.2.1.4l.3.3 10.2 7c.1.1.2 0 .3 0 .1 0 .1-.1.1-.2v-8c0-.3-.2-.6-.4-.8L6.3 9.4s-.1 0-.1-.1-.1-.2-.2-.3c-.1-.2-.1-.4-.1-.6 0-.4.1-.7.4-.9L14.2 2c1-.7 2.4-.7 3.4 0l10.7 7.4.1.1.3.2c.7.6 1.2 1.5 1.2 2.5zm-21.3-4c-.1 0-.1.1-.1.1 0 .1 0 .1.1.2l10.7 7.4c.3.2.8.2 1.1 0l6.7-4.4c.1-.1.1-.1.1-.2s0-.1-.1-.2L16.4 3.7c-.3-.2-.8-.2-1.1 0L8.6 8.2zm19.3 5.7c0-.1-.1-.2-.1-.2-.1 0-.2-.1-.3 0l-6.2 4.1c-.3.2-.4.5-.4.8v8c0 .1.1.2.1.2.1 0 .2.1.3 0l6.2-4.1c.3-.2.4-.5.4-.8v-8zm-10-2.4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .8 2 2 2z"
        />
      </svg>
    </IconWrapper>
  );
});

ProductInternetOfThingsProgrammableXIcon.displayName = 'ProductInternetOfThingsProgrammableXIcon';
export {ProductInternetOfThingsProgrammableXIcon};
