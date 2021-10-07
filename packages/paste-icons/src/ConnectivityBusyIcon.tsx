/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ConnectivityBusyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ConnectivityBusyIcon: React.FC<ConnectivityBusyIconProps> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ConnectivityBusyIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ConnectivityBusyIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <circle fill="currentColor" cx={10} cy={10} r={4} />
      </svg>
    </IconWrapper>
  );
};

ConnectivityBusyIcon.displayName = 'ConnectivityBusyIcon';
export {ConnectivityBusyIcon};
