/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface MoreIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MoreIcon: React.FC<MoreIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[MoreIcon]: Missing a title for non-decorative icon.');
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
              d="M12 17c.827 0 1.5.673 1.5 1.5S12.827 20 12 20s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-6.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zM12 4c.827 0 1.5.673 1.5 1.5S12.827 7 12 7s-1.5-.673-1.5-1.5S11.173 4 12 4z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

MoreIcon.displayName = 'MoreIcon';
export {MoreIcon};
