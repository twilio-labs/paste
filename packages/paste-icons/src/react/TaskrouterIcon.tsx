/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface TaskrouterIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const TaskrouterIcon: React.FC<TaskrouterIconProps> = ({title, decorative, ...props}) => (
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
            d="M853.85 711.383H740.084L515.93 512.267 740.084 313.15H853.85v113.766l170.65-142.182L853.85 142.5v113.767H732.66L484.084 480.42 235.457 256.267H.5v56.883h227.584l223.539 199.117-223.539 199.116H.5v56.884h234.957l248.627-224.154L732.66 768.267h121.19v113.766l170.65-142.182-170.65-142.234v113.766"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

TaskrouterIcon.defaultProps = {
  title: 'Taskrouter Icon',
  decorative: true,
};

export {TaskrouterIcon};
