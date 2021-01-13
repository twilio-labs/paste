/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CalendarIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `CalendarIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[CalendarIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.5 2a.5.5 0 01.492.41L14 2.5v1.499L17.5 4a.5.5 0 01.492.41L18 4.5v13a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5L6 3.999V2.5a.5.5 0 01.992-.09L7 2.5v1.499h6V2.5a.5.5 0 01.5-.5zm3.499 6.999h-14v8h14V9zM5.745 14l.118.008a.748.748 0 01.325.133l.091.077a.75.75 0 11-.63-.211L5.745 14zm4.252 0l.118.009a.75.75 0 01.324.132l.09.077a.75.75 0 11-.63-.212L9.997 14zm4.253 0l.116.009a.75.75 0 01.323.132l.09.077a.75.75 0 11-.53-.218zm-8.5-3.5l.115.008a.75.75 0 01.324.134l.091.077a.75.75 0 11-.53-.22zm8.5 0l.094.005a.75.75 0 11-.188 0l.094-.006zm-4.25 0l.094.005a.75.75 0 11-.194.001l.1-.007zM6 4.998H3l-.001 3h14v-3H14v1a.5.5 0 01-.992.09L13 6V5H7v1a.5.5 0 01-.992.09L6 6V5z"
        />
      </svg>
    </IconWrapper>
  );
};

CalendarIcon.displayName = 'CalendarIcon';
export {CalendarIcon};
