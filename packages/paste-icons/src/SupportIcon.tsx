/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface SupportIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SupportIcon: React.FC<SupportIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `SupportIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[SupportIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.657 4.343A8 8 0 114.343 15.657 8 8 0 0115.657 4.343zm-9.34 4.095L4.102 6.226a7.01 7.01 0 000 7.55l2.214-2.213a4.013 4.013 0 010-3.125zm7.457 7.459l-2.212-2.213a4.014 4.014 0 01-3.124 0l-2.212 2.213a7.01 7.01 0 007.548 0zm-1.653-8.018A3 3 0 107.88 12.12 3 3 0 0012.12 7.88zM6.225 4.104l2.212 2.213a4.013 4.013 0 013.126 0l2.212-2.213a7.01 7.01 0 00-7.31-.147l-.24.147zm9.672 2.122l-2.213 2.212a4.014 4.014 0 010 3.125l2.212 2.212a7.01 7.01 0 00.001-7.55z"
        />
      </svg>
    </IconWrapper>
  );
};

SupportIcon.displayName = 'SupportIcon';
export {SupportIcon};
