/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface WarningIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const WarningIcon: React.FC<WarningIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `WarningIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[WarningIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.684 3.744c.582-.992 2.05-.992 2.632 0l6.482 11.048c.577.984-.152 2.208-1.316 2.208H3.518c-1.164 0-1.893-1.224-1.316-2.208zM10 13a1 1 0 100 2 1 1 0 000-2zm.01-5h-.02l-.112.007c-.549.067-.955.626-.866 1.237l.428 2.238.02.095c.074.247.29.423.543.423l.091-.008a.59.59 0 00.466-.51l.428-2.238.011-.121c.025-.602-.416-1.116-.989-1.123z"
        />
      </svg>
    </IconWrapper>
  );
};

WarningIcon.displayName = 'WarningIcon';
export {WarningIcon};
