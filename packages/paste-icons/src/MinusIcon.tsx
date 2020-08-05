/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface MinusIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MinusIcon: React.FC<MinusIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[MinusIcon]: Missing a title for non-decorative icon.');
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
              d="M17 11a1 1 0 01.117 1.993L17 13H7a1 1 0 01-.117-1.993L7 11h10z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

MinusIcon.displayName = 'MinusIcon';
export {MinusIcon};
