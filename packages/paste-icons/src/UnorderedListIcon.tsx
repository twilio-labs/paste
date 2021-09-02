/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface UnorderedListIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UnorderedListIcon: React.FC<UnorderedListIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `UnorderedListIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[UnorderedListIcon]: Missing a title for non-decorative icon.');
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
          d="M3 5.25a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0zM3 10a1.25 1.25 0 102.5 0A1.25 1.25 0 003 10zM3 14.75a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.374 5.25c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999a.625.625 0 01-.625-.625zM7.374 10c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999A.625.625 0 017.374 10zM7.374 14.75c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999a.625.625 0 01-.625-.625z"
        />
      </svg>
    </IconWrapper>
  );
};

UnorderedListIcon.displayName = 'UnorderedListIcon';
export {UnorderedListIcon};
