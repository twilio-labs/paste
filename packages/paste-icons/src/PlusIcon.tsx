/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PlusIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PlusIcon: React.FC<PlusIconProps> = ({as, size, iconColor, title, decorative, ...props}) => {
  if (!decorative && title == null) {
    throw new Error('[PlusIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor} {...props}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 4c.245 0 .45.174.492.402l.008.089V11.5h7.01c.27 0 .49.224.49.5 0 .245-.174.45-.402.492l-.089.008H12.5v7.01c0 .27-.224.49-.5.49a.498.498 0 01-.492-.402l-.008-.089V12.5H4.49A.495.495 0 014 12c0-.245.174-.45.402-.492l.089-.008H11.5V4.49c0-.27.224-.49.5-.49z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

PlusIcon.displayName = 'PlusIcon';
export {PlusIcon};
