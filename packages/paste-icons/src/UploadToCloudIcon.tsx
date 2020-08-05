/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface UploadToCloudIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const UploadToCloudIcon: React.FC<UploadToCloudIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[UploadToCloudIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12.5 11h.012c.02 0 .041.002.062.005L12.5 11a.502.502 0 01.284.089l.018.013c.014.01.027.02.04.033l.012.011 2.142 2.143a.5.5 0 01-.637.765l-.07-.058L13 12.707V18.5a.5.5 0 01-.992.09L12 18.5v-5.793l-1.29 1.29a.5.5 0 01-.637.057l-.07-.058a.5.5 0 01-.057-.637l.058-.07 2.142-2.143.013-.011a.503.503 0 01.039-.033l-.052.044A.502.502 0 0112.5 11zM12 6c1.817 0 3.457.968 4.356 2.49l.071.127.073.004a3.746 3.746 0 013.495 3.541l.005.198c0 1.448-.652 2.465-1.717 3.082a4.246 4.246 0 01-1.554.54l-.164.018H16.5a.5.5 0 01-.09-.992L16.5 15l.02.002c.068-.006.202-.027.381-.073a3.44 3.44 0 00.88-.352c.77-.446 1.219-1.146 1.219-2.217 0-1.5-1.196-2.714-2.693-2.747l-.167.001-.33.012-.14-.297A4.06 4.06 0 0012 7c-2.105 0-3.814 1.508-4.035 3.526l-.017.203-.032.54-.536-.074C6.128 11.022 5 11.902 5 13.17c0 .876.36 1.37.997 1.635.312.13.64.186.915.196L8.5 15a.5.5 0 01.09.992L8.5 16H7.101a3.625 3.625 0 01-1.489-.272C4.618 15.314 4 14.468 4 13.17c0-1.656 1.28-2.869 2.82-2.987l.184-.009.026-.153c.432-2.255 2.373-3.918 4.746-4.016L12 6z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

UploadToCloudIcon.displayName = 'UploadToCloudIcon';
export {UploadToCloudIcon};
