/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CopyIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CopyIcon: React.FC<CopyIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[CopyIcon]: Missing a title for non-decorative icon.');
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
              d="M15.7 4a1.3 1.3 0 011.293 1.167L17 5.3V7h1.5a1.5 1.5 0 011.493 1.356L20 8.5v10a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 017 18.5V17H5.3a1.3 1.3 0 01-1.293-1.167L4 15.7V5.3a1.3 1.3 0 011.167-1.293L5.3 4h10.4zm2.8 4h-10a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zm-2.731-2.992L15.7 5H5.3a.3.3 0 00-.292.231L5 5.3v10.4a.3.3 0 00.231.292L5.3 16H7V8.5a1.5 1.5 0 011.356-1.493L8.5 7H16V5.3a.3.3 0 00-.231-.292z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

CopyIcon.displayName = 'CopyIcon';
export {CopyIcon};
