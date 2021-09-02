/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface PauseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const PauseIcon: React.FC<PauseIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `PauseIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[PauseIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.5 4c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09H7c-.552 0-1-.488-1-1.09V5.09C6 4.489 6.448 4 7 4h1.5zM13 4c.552 0 1 .488 1 1.09v9.82c0 .602-.448 1.09-1 1.09h-1.5c-.552 0-1-.488-1-1.09V5.09c0-.602.448-1.09 1-1.09H13zM8.5 5.09H7v9.82h1.5V5.09zm4.5 0h-1.5v9.82H13V5.09z"
        />
      </svg>
    </IconWrapper>
  );
};

PauseIcon.displayName = 'PauseIcon';
export {PauseIcon};
