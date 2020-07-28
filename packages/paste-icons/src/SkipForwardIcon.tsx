/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SkipForwardIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SkipForwardIcon: React.FC<SkipForwardIconProps> = ({as, display, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[SkipForwardIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} iconColor={iconColor}>
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
              d="M15.784 6.089l.07.057 3 3 .011.013a.503.503 0 01.033.039l-.044-.052A.502.502 0 0119 9.5v.02a.503.503 0 01-.005.052L19 9.5a.502.502 0 01-.089.284l-.013.018a.503.503 0 01-.033.04l-.011.012-3 3a.5.5 0 01-.765-.638l.057-.07L17.293 10H9.5a3.5 3.5 0 00-.192 6.995L9.5 17h5a.5.5 0 01.09.992L14.5 18h-5a4.5 4.5 0 01-.212-8.995L9.5 9h7.793l-2.147-2.146a.5.5 0 01-.057-.638l.057-.07a.5.5 0 01.638-.057z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

SkipForwardIcon.displayName = 'SkipForwardIcon';
export {SkipForwardIcon};
