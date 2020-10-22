/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface DownloadIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const DownloadIcon: React.FC<DownloadIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `DownloadIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[DownloadIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.5 16a.5.5 0 01.09.992L16.5 17h-13a.5.5 0 01-.09-.992L3.5 16h13zM10 3a.5.5 0 01.492.41l.008.09v8.842l2.296-2.296a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-3.125 3.125a.5.5 0 01-.638.057l-.07-.057-3.125-3.125a.5.5 0 01.638-.765l.07.057L9.5 12.292V3.5A.5.5 0 0110 3z"
        />
      </svg>
    </IconWrapper>
  );
};

DownloadIcon.displayName = 'DownloadIcon';
export {DownloadIcon};
