/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface WarningIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const WarningIcon: React.FC<WarningIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `WarningIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[WarningIcon]: Missing a title for non-decorative icon.');
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
          d="M17.798 14.791L11.316 3.744c-.582-.992-2.05-.992-2.632 0L2.202 14.79C1.625 15.776 2.354 17 3.518 17h12.964c1.164 0 1.893-1.224 1.316-2.209zM9.99 8h.02c.611.007 1.073.592.978 1.244l-.428 2.238c-.04.296-.278.518-.557.518h-.006c-.279 0-.516-.222-.557-.518l-.428-2.238C8.917 8.592 9.386 8 9.99 8zm.01 7a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
    </IconWrapper>
  );
};

WarningIcon.displayName = 'WarningIcon';
export {WarningIcon};
