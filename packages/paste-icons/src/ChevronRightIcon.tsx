/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronRightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronRightIcon]: Missing a title for non-decorative icon.');
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
              d="M8.166 8.872a.5.5 0 01.596-.798l.072.054 5 4.5a.5.5 0 01.066.672l-.066.072-5 4.5a.5.5 0 01-.73-.678l.062-.066L12.752 13 8.166 8.872z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronRightIcon.displayName = 'ChevronRightIcon';
export {ChevronRightIcon};
