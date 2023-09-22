import { useUID } from '@twilio-paste/core/uid-library';
import * as React from 'react';

type PasteIconInverseProps = {
  className?: string;
  color?: string;
  decorative?: boolean;
  display?: string;
  size?: number;
  title?: string;
};

const PasteIconInverse: React.FC<React.PropsWithChildren<PasteIconInverseProps>> = React.memo(
  ({ title = 'Twilio Paste', className, color, decorative = true, display, size }) => {
    const titleId = `paste-icon-${useUID()}`;
    return (
      <span style={{ color, display, width: size, height: size }} className={className}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            d="M26.852 9c1.68.002 3.052 1.339 3.143 3.023l.005.185-.002.063v8.4c-.002 1.714-1.324 3.115-2.99 3.208l-.173.005h-6.353l-3.307 7.53a2.729 2.729 0 01-2.093 1.56l-.182.02-.185.006c-1.446-.003-2.627-1.151-2.71-2.6L12 30.238v-5.193c0-.858.333-1.637.873-2.214a3.207 3.207 0 01-.825-1.985l-.005-.184.076-8.467c.003-1.706 1.32-3.098 2.976-3.19L15.268 9h11.584zM18.27 23.884h-3.106c-.593 0-1.08.458-1.14 1.043l-.005.12v5.19c0 .331.226.618.544.69a.694.694 0 00.727-.283l.051-.09 2.93-6.67zm5.638-12.834h-8.64c-.586.002-1.067.453-1.125 1.032l-.006.126-.077 8.464a1.143 1.143 0 001.016 1.14l.115.007 3.99-.001 4.727-10.768zm2.02.514l-.069.1-.058.11-4.413 10.044h5.387c.585 0 1.065-.452 1.124-1.03l.006-.126.074-8.245v-.146c0-.544-.37-1.015-.893-1.134-.442-.101-.892.073-1.159.427z"
          />
        </svg>
      </span>
    );
  },
);

export { PasteIconInverse };
