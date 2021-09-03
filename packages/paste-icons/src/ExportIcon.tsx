/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ExportIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ExportIcon: React.FC<ExportIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `ExportIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ExportIcon]: Missing a title for non-decorative icon.');
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.625 3.5a.625.625 0 10-1.25 0v8.491L7.342 9.958a.625.625 0 10-.884.884l3.125 3.125c.244.244.64.244.884 0l3.125-3.125a.625.625 0 00-.884-.884l-2.083 2.083V3.5zm-7.75 13c0-.345.28-.625.625-.625h13a.625.625 0 110 1.25h-13a.625.625 0 01-.625-.625z"
        />
      </svg>
    </IconWrapper>
  );
};

ExportIcon.displayName = 'ExportIcon';
export {ExportIcon};
