/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface MmsEnabledIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const MmsEnabledIcon: React.FC<MmsEnabledIconProps> = ({as, display, size, color, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[MmsEnabledIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <UID>
        {titleId => (
          <svg
            role="img"
            aria-hidden={decorative}
            height="100%"
            width="100%"
            viewBox="0 0 1024 1024"
            aria-labelledby={titleId}
          >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
              fill="currentColor"
              d="M128 944V720H0V80h1024v640H441.6L128 944M64 656h128v160l224-160h544V144H64v512m64-384c0 49.28 53.312 80.064 96 55.424 19.776-11.456 32-32.576 32-55.424 0-49.28-53.312-80.064-96-55.424-19.776 11.456-32 32.576-32 55.424m454.4 6.4l-192 192-44.8-44.8L179.2 592h89.6l76.8-76.8 44.8 44.8 44.8-44.8L582.4 368l224 224H896L582.4 278.4"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

MmsEnabledIcon.displayName = 'MmsEnabledIcon';
export {MmsEnabledIcon};
