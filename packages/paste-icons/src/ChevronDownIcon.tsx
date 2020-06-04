/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronDownIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({as, size, iconColor, title, decorative, ...props}) => {
  if (!decorative && title == null) {
    throw new Error('[ChevronDownIcon]: Missing a title for non-decorative icon.');
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
              d="M16.128 10.166a.5.5 0 01.798.596l-.054.072-4.5 5a.5.5 0 01-.672.066l-.072-.066-4.5-5a.5.5 0 01.678-.73l.066.062L12 14.752l4.128-4.586z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ChevronDownIcon.displayName = 'ChevronDownIcon';
export {ChevronDownIcon};
