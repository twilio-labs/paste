/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CloseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CloseIcon: React.FC<CloseIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[CloseIcon]: Missing a title for non-decorative icon.');
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
              d="M18.01 5.99c.17.169.189.432.057.622l-.051.062-5.327 5.325 5.327 5.327c.19.19.185.494-.006.684a.488.488 0 01-.622.057l-.062-.051L12 12.689l-5.326 5.327a.481.481 0 01-.684-.006.488.488 0 01-.057-.622l.051-.062L11.311 12 5.984 6.674a.481.481 0 01.006-.684.488.488 0 01.622-.057l.062.051L12 11.31l5.326-5.326a.481.481 0 01.684.006z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

CloseIcon.displayName = 'CloseIcon';
export {CloseIcon};
