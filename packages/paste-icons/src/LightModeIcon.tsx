/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {IconWrapper} from './helpers/IconWrapper';
import type {IconWrapperProps} from './helpers/IconWrapper';

export interface LightModeIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const LightModeIcon: React.FC<LightModeIconProps> = ({as, display, size, color, title, decorative}) => {
  const titleId = `LightModeIcon-${useUID()}`;

  if (!decorative && title == null) {
    throw new Error('[LightModeIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} display={display} size={size} color={color}>
      <svg
        role="img"
        aria-hidden={decorative}
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 20 20"
        aria-labelledby={titleId}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
          fill="currentColor"
          d="M10 1.5c.345 0 .625.28.625.625v1.05a.625.625 0 11-1.25 0v-1.05c0-.345.28-.625.625-.625z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.217 6.217a5.35 5.35 0 117.566 7.566 5.35 5.35 0 01-7.566-7.566zM10 5.9a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M16.01 4.873a.625.625 0 10-.883-.884l-.744.744a.625.625 0 10.884.884l.744-.744zM16.2 10c0-.345.28-.625.625-.625h1.05a.625.625 0 110 1.25h-1.05A.625.625 0 0116.2 10zm-.933 4.383a.625.625 0 10-.883.884l.743.744a.625.625 0 10.884-.884l-.744-.744zM10 16.2c.345 0 .625.28.625.625v1.05a.625.625 0 11-1.25 0v-1.05c0-.346.28-.625.625-.625zm-4.383-.933a.625.625 0 00-.884-.883l-.743.743a.625.625 0 00.883.884l.744-.744zM1.5 10c0-.345.28-.625.625-.625h1.05a.625.625 0 010 1.25h-1.05A.625.625 0 011.5 10zm3.372-6.012a.625.625 0 10-.883.884l.743.744a.625.625 0 00.884-.884l-.744-.744z"
        />
      </svg>
    </IconWrapper>
  );
};

LightModeIcon.displayName = 'LightModeIcon';
export {LightModeIcon};
