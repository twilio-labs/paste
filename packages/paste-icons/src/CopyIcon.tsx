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

const CopyIcon: React.FC<CopyIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[CopyIcon]: Missing a title for non-decorative icon.');
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
              d="M17 1a1 1 0 01.993.883L18 2v4h4a1 1 0 01.993.883L23 7v15a1 1 0 01-1 1H7a1 1 0 01-1-1v-4H2a1 1 0 01-.993-.883L1 17V2a1 1 0 01.883-.993L2 1h15zm4 7H8v13h13V8zm-5-2V3H3v13h3V7a1 1 0 01.883-.993L7 6h9z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

CopyIcon.displayName = 'CopyIcon';
export {CopyIcon};
