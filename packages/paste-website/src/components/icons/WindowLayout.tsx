import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

export interface WindowLayoutProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
}

const WindowLayout = React.memo(
  ({ title = 'Window Layout', decorative = true, className, color, size }: WindowLayoutProps) => {
    const uid = useUID();
    return (
      <div style={{ color, width: size, height: size }} className={className}>
        <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.016 23.04V5.969H.96v15.548c0 .84.683 1.523 1.523 1.523h6.533zm.96 0h11.54c.842 0 1.524-.682 1.524-1.523V5.969H9.976V23.04zM23.04 5.009V2.483c0-.84-.682-1.523-1.523-1.523H2.483C1.643.96.96 1.643.96 2.483V5.01h22.08zM24 21.517A2.484 2.484 0 0121.517 24H2.483A2.484 2.484 0 010 21.517V2.483A2.484 2.484 0 012.483 0h19.034A2.484 2.484 0 0124 2.483v19.034zM3.986 3.965a.98.98 0 110-1.962.98.98 0 010 1.962zm3.005 0a.98.98 0 110-1.962.98.98 0 010 1.962zm3.006 0a.98.98 0 110-1.962.98.98 0 010 1.962zm-6.48 5.009a.48.48 0 110-.96h2.99a.48.48 0 110 .96h-2.99zm0 2.003a.48.48 0 110-.96h2.99a.48.48 0 110 .96h-2.99zm0 2.004a.48.48 0 010-.96h2.99a.48.48 0 110 .96h-2.99zm0 2.003a.48.48 0 110-.96h2.99a.48.48 0 110 .96h-2.99zm0 2.004a.48.48 0 110-.96h2.99a.48.48 0 110 .96h-2.99zm0 2.003a.48.48 0 110-.96h2.99a.48.48 0 010 .96h-2.99zm0 2.004a.48.48 0 110-.96h2.99a.48.48 0 110 .96h-2.99zM12.02 8.494a.48.48 0 01.48-.48h8.014a.48.48 0 01.48.48v5.009a.48.48 0 01-.48.48H12.5a.48.48 0 01-.48-.48v-5.01zm.96.48v4.049h7.054v-4.05H12.98zm-.96 7.534a.48.48 0 01.48-.48h3.005a.48.48 0 01.48.48v2.003a.48.48 0 01-.48.48h-3.005a.48.48 0 01-.48-.48v-2.003zm.96 1.523h2.045v-1.043h-2.045v1.043zm4.049-1.523a.48.48 0 01.48-.48h3.005a.48.48 0 01.48.48v2.003a.48.48 0 01-.48.48H17.51a.48.48 0 01-.48-.48v-2.003zm.96 1.523h2.045v-1.043H17.99v1.043z"
          />
        </svg>
      </div>
    );
  },
);

export { WindowLayout };
