/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowForwardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowForwardIcon: React.FC<ArrowForwardIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ArrowForwardIcon]: Missing a title for non-decorative icon.');
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
              d="M14.25 15.947l.07-.058 3.535-3.536a.502.502 0 00.067-.082l.043-.083.03-.1.005-.044v-.088l-.01-.067-.01-.038-.034-.081-.047-.074-.044-.05-3.535-3.535a.5.5 0 00-.765.638l.058.069 2.681 2.682H7.5a.5.5 0 00-.09.992l.09.008h8.794l-2.681 2.682a.5.5 0 00-.058.638l.058.069a.5.5 0 00.638.058z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ArrowForwardIcon.displayName = 'ArrowForwardIcon';
export {ArrowForwardIcon};
