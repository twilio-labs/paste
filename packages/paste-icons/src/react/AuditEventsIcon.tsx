/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface AuditEventsIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const AuditEventsIcon: React.FC<AuditEventsIconProps> = ({title, decorative, ...props}) => (
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
            d="M845.2 1024H179.6c-15.36 0-25.6-10.24-25.6-25.6V153.6h51.2v819.2h614.4V153.6h51.2v844.8c0 15.36-10.24 25.6-25.6 25.6m-384-665.6v51.2h250.88v-51.2H461.2m-153.6 0v51.2h51.2v-51.2h-51.2m153.6 102.4V512h250.88v-51.2H461.2m-153.6 0V512h51.2v-51.2h-51.2m153.6 102.4v51.2h250.88v-51.2H461.2m-153.6 0v51.2h51.2v-51.2h-51.2m153.6 102.4v51.2h250.88v-51.2H461.2m-153.6 0v51.2h51.2v-51.2h-51.2M461.2 768v51.2h250.88V768H461.2m-153.6 0v51.2h51.2V768h-51.2m460.8-563.2h-76.8c-15.36 0-25.6-10.24-25.6-20.48-15.36-76.8-76.8-133.12-153.6-133.12s-143.36 56.32-153.6 133.12c-5.12 10.24-15.36 20.48-25.6 20.48h-76.8v-51.2h56.32C333.2 66.56 420.24 0 512.4 0c92.16 0 174.08 61.44 199.68 153.6h56.32v51.2"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

AuditEventsIcon.defaultProps = {
  title: 'Audit Events Icon',
  decorative: true,
};

AuditEventsIcon.displayName = 'AuditEventsIcon';

export {AuditEventsIcon};
