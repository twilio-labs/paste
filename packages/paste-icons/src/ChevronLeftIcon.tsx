/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronLeftIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronLeftIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13.834 17.128a.5.5 0 01-.596.798l-.072-.054-5-4.5A.5.5 0 018.1 12.7l.066-.072 5-4.5a.5.5 0 01.73.678l-.062.066L9.248 13l4.586 4.128z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronLeftIcon.displayName = 'ChevronLeftIcon';
export {ChevronLeftIcon};
