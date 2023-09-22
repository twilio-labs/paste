import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

export interface ComponentsIconProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
}

const ComponentsIcon = React.memo(
  ({ title = 'Components Icon', decorative = true, className, color, size }: ComponentsIconProps) => {
    const titleId = useUID();
    return (
      <span style={{ color, width: size, height: size, display: 'inline-block' }} className={className}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          viewBox="0 0 24 24"
          height="100%"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M2.344.192h-1.5A.559.559 0 00.286.75v1.5a.563.563 0 001.125 0v-.94h.94a.563.563 0 000-1.125l-.007.008zm7.954 1.117h2.655a.562.562 0 100-1.125h-2.655a.563.563 0 000 1.125zm-5.302 0h2.65a.563.563 0 000-1.125h-2.65a.563.563 0 000 1.125zM18.256.192h-2.652a.562.562 0 100 1.124h2.651a.562.562 0 100-1.125zm4.15 0h-1.5a.562.562 0 100 1.124h.942v.934a.562.562 0 101.125 0V.75a.559.559 0 00-.566-.558zm0 4.23a.563.563 0 00-.558.562v2.73a.562.562 0 101.125 0v-2.73a.563.563 0 00-.566-.563zm0 5.463a.563.563 0 00-.558.563v2.73a.562.562 0 101.125 0v-2.73a.563.563 0 00-.566-.563zm0 5.468a.559.559 0 00-.558.558v2.73a.562.562 0 101.125 0v-2.73a.559.559 0 00-.566-.558zm0 5.463a.559.559 0 00-.558.56v.94h-.941a.562.562 0 100 1.125h1.5a.559.559 0 00.558-.566v-1.5a.559.559 0 00-.558-.559zm-4.15 1.5h-2.652a.562.562 0 100 1.125h2.651a.562.562 0 100-1.125zm-10.61 0h-2.65a.562.562 0 100 1.125h2.65a.562.562 0 100-1.125zm5.307 0h-2.655a.562.562 0 100 1.125h2.655a.562.562 0 100-1.125zm-10.609 0h-.941v-.94a.562.562 0 10-1.125 0v1.5c0 .308.25.558.559.558h1.5a.562.562 0 100-1.125l.007.007zm-1.5-8.576a.563.563 0 00.559-.562v-2.73a.562.562 0 10-1.125 0v2.73a.563.563 0 00.566.562zm0-5.467c.309 0 .559-.25.559-.559v-2.73a.562.562 0 10-1.125 0v2.73a.559.559 0 00.566.559zm0 10.931a.563.563 0 00.559-.563v-2.73a.562.562 0 10-1.125 0v2.73a.563.563 0 00.566.563zm4.849-3.255a2.393 2.393 0 002.122 1.253h7.523a2.423 2.423 0 002.048-3.702l-3.75-5.947a2.423 2.423 0 00-4.092 0L5.768 13.5a2.393 2.393 0 00-.075 2.449zm1.02-1.875l3.75-5.948a1.301 1.301 0 012.197 0l3.75 5.948a1.301 1.301 0 01-1.102 1.995H7.815a1.301 1.301 0 01-1.102-1.995z"
          />
        </svg>
      </span>
    );
  },
);

export default ComponentsIcon;
