/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface MicrophoneOffIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MicrophoneOffIcon: React.FC<MicrophoneOffIconProps> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `MicrophoneOffIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[MicrophoneOffIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 20 20"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.78 2.246a.5.5 0 010 .708L2.924 17.81a.5.5 0 01-.707-.707L17.073 2.246a.5.5 0 01.708 0z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.998 3.1a2.357 2.357 0 00-2.357 2.357v4.001a2.346 2.346 0 00.942 1.884.5.5 0 01-.598.801 3.345 3.345 0 01-1.344-2.686v-4a3.357 3.357 0 016.715 0v1.714a.5.5 0 11-1 0V5.457A2.357 2.357 0 009.999 3.1zm2.802 7.091a.5.5 0 01.247.663 3.357 3.357 0 01-1.705 1.678.5.5 0 11-.401-.916c.53-.232.956-.652 1.197-1.178a.5.5 0 01.663-.247z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.712 9.529a.5.5 0 01.5.498 5.631 5.631 0 01-5.643 5.644H9.44h.119-.132.013a6.503 6.503 0 01-.68 0 .5.5 0 11.054-.999 5.52 5.52 0 00.613 0h1.144a4.63 4.63 0 004.642-4.642.5.5 0 01.499-.501zm-11.437 0a.5.5 0 00-.5.498 5.632 5.632 0 001.649 3.995.5.5 0 10.707-.707 4.631 4.631 0 01-1.357-3.285.5.5 0 00-.499-.501z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.999 14.671a.5.5 0 01.5.5v2.286a.5.5 0 11-1 0v-2.286a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

MicrophoneOffIcon.displayName = 'MicrophoneOffIcon';
export {MicrophoneOffIcon};
