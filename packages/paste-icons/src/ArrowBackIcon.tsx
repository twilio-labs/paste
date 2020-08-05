/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ArrowBackIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ArrowBackIcon: React.FC<ArrowBackIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[ArrowBackIcon]: Missing a title for non-decorative icon.');
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
              d="M9.75 15.947l-.07-.058-3.535-3.536a.502.502 0 01-.067-.082l-.043-.083-.03-.1L6 12.043v-.088l.01-.067.01-.038.034-.081.047-.074.044-.05L9.68 8.111a.5.5 0 01.765.638l-.058.069L7.706 11.5H16.5a.5.5 0 01.09.992l-.09.008H7.706l2.681 2.682a.5.5 0 01.058.638l-.058.069a.5.5 0 01-.638.058z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

ArrowBackIcon.displayName = 'ArrowBackIcon';
export {ArrowBackIcon};
