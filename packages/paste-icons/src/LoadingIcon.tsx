/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface LoadingIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[LoadingIcon]: Missing a title for non-decorative icon.');
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
              d="M19.868 13.591l.089.016a.5.5 0 01.354.611 8.603 8.603 0 01-15.964 1.71l-.277 3.245-.015.09a.5.5 0 01-.981-.175l.407-4.772.018-.096a.5.5 0 01.66-.328l4.47 1.727.082.04a.5.5 0 01.205.607l-.04.08a.5.5 0 01-.607.206l-3.09-1.194a7.604 7.604 0 0014.166-1.397.5.5 0 01.523-.37zm-7.86-10.2a8.604 8.604 0 017.653 4.67l.277-3.243.015-.089a.5.5 0 01.981.174l-.407 4.773-.017.095a.5.5 0 01-.661.329l-4.47-1.728-.082-.04a.5.5 0 01-.205-.606l.04-.081a.5.5 0 01.607-.206l3.09 1.195A7.604 7.604 0 004.663 10.03a.5.5 0 01-.522.37l-.09-.015a.5.5 0 01-.354-.612 8.603 8.603 0 018.311-6.382z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

LoadingIcon.displayName = 'LoadingIcon';
export {LoadingIcon};
