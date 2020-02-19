/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronUpIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronUpIcon]: Missing a title for non-decorative icon.');
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
              d="M11.628 10.166a.5.5 0 01.672-.066l.072.066 4.5 5a.5.5 0 01-.678.73l-.066-.062L12 11.247l-4.127 4.587a.5.5 0 01-.634.092l-.072-.054a.5.5 0 01-.092-.634l.054-.072 4.5-5z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronUpIcon.displayName = 'ChevronUpIcon';
export {ChevronUpIcon};
