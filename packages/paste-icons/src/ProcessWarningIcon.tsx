/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ProcessWarningIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ProcessWarningIcon: React.FC<ProcessWarningIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ProcessWarningIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ProcessWarningIcon]: Missing a title for non-decorative icon.');
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
          d="M16.823 14.107l-5.671-9.47c-.51-.85-1.794-.85-2.303 0l-5.672 9.47C2.67 14.951 3.31 16 4.328 16h11.344c1.018 0 1.656-1.05 1.151-1.893z"
        />
      </svg>
    </IconWrapper>
  );
};

ProcessWarningIcon.displayName = 'ProcessWarningIcon';
export {ProcessWarningIcon};
