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

const CloseIcon: React.FC<CloseIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[CloseIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 20 20"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              d="M14.85 13.27L11.477 9.9l3.371-3.372a1.117 1.117 0 00-1.578-1.578L9.899 8.32 6.528 4.95A1.117 1.117 0 004.95 6.528L8.32 9.899 4.95 13.271a1.117 1.117 0 001.578 1.578l3.371-3.371 3.372 3.371a1.117 1.117 0 001.578-1.578z"
              fillRule="evenodd"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

CloseIcon.displayName = 'CloseIcon';
export {CloseIcon};
