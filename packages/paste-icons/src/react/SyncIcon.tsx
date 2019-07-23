/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SyncIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const SyncIcon: React.FC<SyncIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M511.999 51.326c103.07 0 203.049 34.871 283.815 98.897L692.796 253.241h231.275V21.451l-91.686 91.686C678.992-9.918 468.732-34.23 291.283 50.502 113.886 135.285.67 314.176 0 510.786h51.509c.567-253.939 206.551-459.46 460.49-459.46m460.491 459.46c-.052 176.315-100.958 337.075-259.657 413.875-158.751 76.8-347.377 56.093-485.678-53.312h3.09l103.018-103.018H99.927v231.791l90.141-90.14c153.549 124.187 364.838 148.963 543.008 63.664 178.118-85.247 291.335-265.374 290.923-462.86H972.49M511.999 304.75c-113.783 0-206.036 92.253-206.036 206.036h51.509c0-85.35 69.177-154.527 154.527-154.527V304.75m206.036 206.036h-51.509c0 85.35-69.176 154.527-154.527 154.527v51.51c113.784 0 206.036-92.254 206.036-206.037"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

SyncIcon.defaultProps = {
  title: 'Sync Icon',
  decorative: true,
};

export {SyncIcon};
