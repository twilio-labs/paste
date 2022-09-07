/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ConnectivityAvailableIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ConnectivityAvailableIcon = React.forwardRef<HTMLElement, ConnectivityAvailableIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `ConnectivityAvailableIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[ConnectivityAvailableIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <circle fill="currentColor" cx={10} cy={10} r={4} />
        </svg>
      </IconWrapper>
    );
  }
);

ConnectivityAvailableIcon.displayName = 'ConnectivityAvailableIcon';
export {ConnectivityAvailableIcon};
