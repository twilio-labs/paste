import { useUID } from '@twilio-paste/uid-library';
/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';

import { IconWrapper } from './helpers/IconWrapper';
import type { IconWrapperProps } from './helpers/IconWrapper';

export interface SortAlphabeticalIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SortAlphabeticalIcon = React.forwardRef<HTMLElement, SortAlphabeticalIconProps>(
  ({ as, display, element = 'ICON', size, color, title, decorative }, ref) => {
    const titleId = `SortAlphabeticalIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[SortAlphabeticalIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <IconWrapper as={as} display={display} element={element} size={size} color={color} ref={ref}>
        <svg
          role="img"
          aria-hidden={decorative}
          xmlns="http://www.w3.org/2000/svg"
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
            d="M14 2a2 2 0 00-2 2v4.5a.5.5 0 001 0V6.999h2v1.5a.5.5 0 001 0V4a2 2 0 00-2-2zm1 3.999V4a1 1 0 00-2 0v1.999h2z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M7.374 2.012a.401.401 0 00-.331.326c-.011.046-.012.308-.013 6.998l-.002 6.95-1.102-1.1-.138-.139c-.941-.94-1.01-1.01-1.095-1.043l-.02-.008-.014-.005a.272.272 0 00-.127-.02.32.32 0 00-.182.042.78.78 0 00-.307.31c-.072.146-.054.29.058.442.024.034.523.537 1.509 1.525 1.264 1.266 1.476 1.48 1.495 1.516.04.074.096.114.241.176.04.017.04.017.189.015h.011a.667.667 0 00.155-.01.585.585 0 00.106-.046l.008-.005a.359.359 0 00.147-.142c.02-.036.21-.229 1.505-1.527 1.16-1.161 1.489-1.494 1.512-1.53.13-.2.104-.385-.085-.58-.174-.18-.348-.232-.521-.155l-.014.005-.005.003c-.08.037-.145.103-1.187 1.144l-1.134 1.133V9.394c0-4.375-.003-6.92-.007-6.966a.447.447 0 00-.124-.305.396.396 0 00-.192-.106.982.982 0 00-.336-.005zM12.505 11a.5.5 0 000 1h2.315l-2.724 4.884A.75.75 0 0012.75 18h2.75a.5.5 0 000-1h-2.325l2.724-4.884A.75.75 0 0015.245 11h-2.74z"
          />
        </svg>
      </IconWrapper>
    );
  },
);

SortAlphabeticalIcon.displayName = 'SortAlphabeticalIcon';
export { SortAlphabeticalIcon };
