/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface ExclamationCircleIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const ExclamationCircleIcon: React.FC<ExclamationCircleIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1536 1536"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M768 0q209 0 385.5 103T1433 382.5 1536 768t-103 385.5-279.5 279.5T768 1536t-385.5-103T103 1153.5 0 768t103-385.5T382.5 103 768 0zm128 1247v-190q0-14-9-23.5t-22-9.5H673q-13 0-23 10t-10 23v190q0 13 10 23t23 10h192q13 0 22-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8H658q-14 0-24 8-10 6-10 18l17 621q0 10 10 17.5t24 7.5h185q14 0 23.5-7.5T894 903z"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

ExclamationCircleIcon.defaultProps = {
  title: 'Exclamation Circle Icon',
  decorative: true,
};

ExclamationCircleIcon.displayName = 'ExclamationCircleIcon';

export {ExclamationCircleIcon};
