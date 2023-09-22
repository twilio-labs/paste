import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

export interface TwilioIconProps {
  className?: string;
  color?: string;
  decorative?: boolean;
  display?: string;
  size?: number;
  title?: string;
}

const TwilioIcon = React.memo(
  ({ title = 'Twilio Icon', className, color, decorative = true, display, size }: TwilioIconProps) => {
    const uid = useUID();
    return (
      <span style={{ color, display, width: size, height: size }} className={className}>
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} viewBox="0 0 30 30" width="100%" height="100%">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11zm6.8-14.7c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1zm0 7.4c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm-7.4 0c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1zm0-7.4c0 1.7-1.4 3.1-3.1 3.1S8.2 13 8.2 11.3s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1z"
          />
        </svg>
      </span>
    );
  },
);

export { TwilioIcon };
