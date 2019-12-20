/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface CloseIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const CloseIcon: React.FC<CloseIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[CloseIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M.67.847L.753.753A1 1 0 012.073.67l.094.083 9.835 9.835L21.836.753a1 1 0 011.32-.083l.094.083a1 1 0 01.084 1.32l-.084.094-9.834 9.835 9.834 9.834a1 1 0 01.084 1.32l-.084.094a1 1 0 01-1.32.084l-.094-.084-9.834-9.834-9.835 9.834a1 1 0 01-1.32.084l-.094-.084a1 1 0 01-.083-1.32l.083-.094 9.835-9.834L.753 2.167A1 1 0 01.67.847L.753.753.67.847z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

CloseIcon.displayName = 'CloseIcon';
export {CloseIcon};
