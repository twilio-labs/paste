/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface OrderedListIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const OrderedListIcon: React.FC<OrderedListIconProps> = ({
  as,
  display,
  element = 'ICON',
  size,
  color,
  title,
  decorative,
}) => {
  const titleId = `OrderedListIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[OrderedListIcon]: Missing a title for non-decorative icon.');
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
          d="M5.625 4.63a.625.625 0 00-.993-.505l-1.37 1a.625.625 0 10.736 1.01l.377-.275v2.52a.625.625 0 101.25 0V4.63zM7.374 5.25c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999a.625.625 0 01-.625-.625zM7.374 10c0-.345.28-.625.625-.625h8.376a.625.625 0 110 1.25H7.999A.625.625 0 017.374 10zM7.999 14.125a.625.625 0 100 1.25h8.376a.625.625 0 100-1.25H7.999zM4.668 12.255a.398.398 0 00-.285.124.463.463 0 00-.128.322.625.625 0 11-1.25 0c0-.444.17-.873.48-1.192.31-.32.736-.504 1.183-.504.448 0 .873.183 1.183.504.31.32.48.748.48 1.192 0 .231-.026.452-.117.682a2.426 2.426 0 01-.36.595c-.12.156-.416.467-.718.777h.744a.625.625 0 110 1.25H3.63a.625.625 0 01-.439-1.07l.063-.062a95.09 95.09 0 00.698-.697c.415-.419.812-.831.915-.964a1.25 1.25 0 00.184-.286.575.575 0 00.03-.225.463.463 0 00-.127-.322.398.398 0 00-.286-.124z"
        />
      </svg>
    </IconWrapper>
  );
};

OrderedListIcon.displayName = 'OrderedListIcon';
export {OrderedListIcon};
