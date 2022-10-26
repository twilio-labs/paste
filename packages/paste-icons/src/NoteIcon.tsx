/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface NoteIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const NoteIcon = React.forwardRef<HTMLElement, NoteIconProps>(
  ({as, display, element = 'ICON', size, color, title, decorative}, ref) => {
    const titleId = `NoteIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[NoteIcon]: Missing a title for non-decorative icon.');
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
            d="M5.635 8.35c0-.227.185-.412.412-.412h7.906a.412.412 0 010 .825H6.047a.412.412 0 01-.412-.412zm.412 1.568a.412.412 0 000 .824h7.906a.412.412 0 000-.824H6.047zm-.412 2.392c0-.229.185-.413.412-.413h7.906a.412.412 0 010 .825H6.047a.412.412 0 01-.412-.413zm.412 1.566a.412.412 0 000 .825h4.612a.412.412 0 000-.825H6.047z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.047 2c.227 0 .412.185.412.412v.908H8.27v-.908a.412.412 0 11.823 0v.908h1.812v-.908a.412.412 0 11.823 0v.908h1.812v-.908a.412.412 0 11.823 0v.908h1.565c.592 0 1.071.48 1.071 1.072v12.536A1.07 1.07 0 0115.93 18H4.07C3.48 18 3 17.52 3 16.928V4.392C3 3.8 3.48 3.32 4.07 3.32h1.565v-.908c0-.227.184-.412.412-.412zm4.859 2.144v.908a.412.412 0 10.823 0v-.908h1.812v.908a.412.412 0 10.823 0v-.908h1.565c.137 0 .248.111.248.248v12.536a.248.248 0 01-.248.247H4.071a.247.247 0 01-.247-.247V4.392c0-.137.11-.248.247-.248h1.564v.908a.412.412 0 10.824 0v-.908H8.27v.908a.412.412 0 10.823 0v-.908h1.812z"
            clipRule="evenodd"
          />
        </svg>
      </IconWrapper>
    );
  }
);

NoteIcon.displayName = 'NoteIcon';
export {NoteIcon};
