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
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M17.858 6.142a.475.475 0 01.055.606l-.05.061-5.191 5.19 5.191 5.192a.469.469 0 01-.005.667.475.475 0 01-.606.055l-.061-.05L12 12.671l-5.191 5.192a.469.469 0 01-.667-.005.475.475 0 01-.055-.606l.05-.061 5.191-5.192-5.191-5.19a.469.469 0 01.005-.667.475.475 0 01.606-.055l.061.05L12 11.327l5.191-5.19a.469.469 0 01.667.005z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

CloseIcon.displayName = 'CloseIcon';
export {CloseIcon};
