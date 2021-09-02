/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface FileIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const FileIcon: React.FC<FileIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `FileIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[FileIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} element={element} size={size} color={color}>
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
          d="M5.5 6a.5.5 0 000 1h6a.5.5 0 000-1h-6zM5 10a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 10zM5.5 13a.5.5 0 000 1h8a.5.5 0 000-1h-8z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-13zM3.5 3h13a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5z"
        />
      </svg>
    </IconWrapper>
  );
};

FileIcon.displayName = 'FileIcon';
export {FileIcon};
