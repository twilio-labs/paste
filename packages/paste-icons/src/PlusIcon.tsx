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

const PlusIcon: React.FC<PlusIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[PlusIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 3.348a1 1 0 011 1V11h6.652a1 1 0 01.993.883l.007.117a1 1 0 01-1 1H13v6.652a1 1 0 01-.883.993l-.117.007a1 1 0 01-1-1V13H4.348a1 1 0 01-.993-.883L3.348 12a1 1 0 011-1H11V4.348a1 1 0 01.883-.993z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

PlusIcon.displayName = 'PlusIcon';
export {PlusIcon};
