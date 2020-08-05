/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface PauseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PauseIcon: React.FC<PauseIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[PauseIcon]: Missing a title for non-decorative icon.');
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
              d="M10.5 6c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09H9c-.552 0-1-.488-1-1.09V7.09C8 6.489 8.448 6 9 6h1.5zM15 6c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09h-1.5c-.552 0-1-.488-1-1.09V7.09c0-.602.448-1.09 1-1.09H15zm-4.5 1.09H9v9.82h1.5V7.09zm4.5 0h-1.5v9.82H15V7.09z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

PauseIcon.displayName = 'PauseIcon';
export {PauseIcon};
