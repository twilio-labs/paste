/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProcessInProgressIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProcessInProgressIcon: React.FC<ProcessInProgressIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProcessInProgressIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProcessInProgressIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
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
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.002 3.5a6.502 6.502 0 100 13.003 6.502 6.502 0 000-13.003zm0 2a4.502 4.502 0 103.515 7.314l-2.952-2.362a1.5 1.5 0 01-.563-1.171V5.5z"
        />
      </svg>
    </IconWrapper>
  );
};

ProcessInProgressIcon.displayName = 'ProcessInProgressIcon';
export {ProcessInProgressIcon};
