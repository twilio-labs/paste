/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface ErrorIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const ErrorIcon: React.FC<ErrorIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `ErrorIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[ErrorIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg role="img" aria-hidden={decorative} width="100%" height="100%" viewBox="0 0 20 20" aria-labelledby={titleId}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.247 2.517l6.236 6.236a1.764 1.764 0 010 2.494l-6.236 6.236a1.764 1.764 0 01-2.494 0l-6.236-6.236a1.764 1.764 0 010-2.494l6.236-6.236a1.764 1.764 0 012.494 0zM10 12a1 1 0 100 2 1 1 0 000-2zm.01-5h-.02c-.604 0-1.073.592-.978 1.244l.428 2.238c.04.296.278.518.557.518h.006c.279 0 .516-.222.557-.518l.428-2.238c.095-.652-.367-1.237-.978-1.244z"
        />
      </svg>
    </IconWrapper>
  );
};

ErrorIcon.displayName = 'ErrorIcon';
export {ErrorIcon};
