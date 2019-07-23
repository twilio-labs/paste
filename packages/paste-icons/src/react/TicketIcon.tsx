/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface TicketIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const TicketIcon: React.FC<TicketIconProps> = ({title, decorative, ...props}) => (
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
            d="M417.959 1019.051l-151.51-151.51 20.898-20.898c15.673-15.674 26.122-36.572 26.122-57.47 0-20.898-10.449-41.795-26.122-57.469-31.347-31.347-83.592-31.347-114.939 0l-20.898 20.898L0 601.092 606.041 5.5l151.51 151.51-20.898 20.898c-15.673 15.674-26.122 36.572-26.122 57.47 0 20.897 10.449 41.795 26.122 57.469 31.347 31.347 83.592 31.347 114.939 0l20.898-20.898L1024 423.459l-606.041 595.592m-78.367-151.51l78.367 78.367 527.674-527.673-78.368-78.368c-52.245 31.347-125.387 26.123-167.183-15.673-26.123-26.123-36.572-57.47-36.572-94.041 0-26.122 5.225-52.245 20.898-73.143l-78.367-78.367L78.367 606.316l78.368 78.368c52.245-31.347 125.387-26.123 167.183 15.673 26.123 26.123 36.572 57.47 36.572 94.041 0 26.122-5.225 52.245-20.898 73.143m146.286-88.817L245.551 538.398l292.571-292.571 240.327 240.326-292.571 292.571M318.694 538.398l167.184 167.184 219.428-219.429-167.184-167.184-219.428 219.429"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

TicketIcon.defaultProps = {
  title: 'Ticket Icon',
  decorative: true,
};

export {TicketIcon};
