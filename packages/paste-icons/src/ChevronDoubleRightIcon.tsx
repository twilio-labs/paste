/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ChevronDoubleRightIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ChevronDoubleRightIcon: React.FC<ChevronDoubleRightIconProps> = ({
  as,
  display,
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `ChevronDoubleRightIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ChevronDoubleRightIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.382 5.175l.081.07L15.75 9.41c.309.3.333.773.071 1.1l-.071.078-4.286 4.167a.875.875 0 01-1.212 0 .816.816 0 01-.071-1.1l.071-.079L13.93 10l-3.679-3.577a.816.816 0 01-.071-1.1l.071-.079a.876.876 0 011.131-.07zm-6 0l.081.07L9.75 9.41c.309.3.333.773.071 1.1l-.071.078-4.286 4.167a.875.875 0 01-1.212 0 .816.816 0 01-.071-1.1l.071-.079L7.93 10 4.251 6.423a.816.816 0 01-.071-1.1l.071-.079a.876.876 0 011.131-.07z"
        />
      </svg>
    </IconWrapper>
  );
};

ChevronDoubleRightIcon.displayName = 'ChevronDoubleRightIcon';
export {ChevronDoubleRightIcon};
