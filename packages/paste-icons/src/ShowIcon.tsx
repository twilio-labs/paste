/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ShowIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ShowIcon: React.FC<ShowIconProps> = ({as, display, element = 'ICON', size, color, title, decorative}) => {
  const titleId = `ShowIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ShowIcon]: Missing a title for non-decorative icon.');
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
          d="M10.107 4.5c3.252 0 6.477 2.268 8.425 4.41a1.806 1.806 0 01.002 2.424c-1.949 2.145-5.174 4.414-8.427 4.414h-.234c-3.236 0-6.46-2.27-8.405-4.413a1.806 1.806 0 01-.002-2.423C3.436 6.744 6.716 4.463 10 4.5h.004l.104-.001zm-.016 10.123c2.903 0 5.824-2.08 7.609-4.044a.683.683 0 00-.002-.914c-1.783-1.961-4.705-4.04-7.589-4.04H9.889c-2.885 0-5.805 2.079-7.589 4.042a.683.683 0 00.002.914c1.802 1.985 4.763 4.091 7.687 4.041l.102.001zm-.092-7.874H10a3.373 3.373 0 013.373 3.373v.003A3.379 3.379 0 0110 13.498h-.002a3.375 3.375 0 010-6.75zm1.59 4.965c.422-.422.659-.994.66-1.59v-.002A2.249 2.249 0 0010 7.874h-.002a2.25 2.25 0 000 4.5c.597-.002 1.168-.239 1.59-.66z"
        />
      </svg>
    </IconWrapper>
  );
};

ShowIcon.displayName = 'ShowIcon';
export {ShowIcon};
