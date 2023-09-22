import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';

export interface FigmaIconProps {
  className?: string;
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
  display?: 'block' | 'inline-block' | 'inline-flex';
}

const FigmaIcon = React.forwardRef<HTMLDivElement, FigmaIconProps>(
  ({ title, decorative, className, color = 'currentColor', display = 'block', size = 'sizeIcon30', ...props }, ref) => {
    const titleId = `FigmaIcon-${useUID()}`;

    if (!decorative && title == null) {
      throw new Error('[FigmaIcon]: Missing a title for non-decorative icon.');
    }

    return (
      <div
        style={{ color, display, width: size, height: size, lineHeight: 0 }}
        className={className}
        ref={ref}
        {...props}
      >
        <svg
          role="img"
          aria-hidden={decorative}
          fill="none"
          width="100%"
          height="100%"
          viewBox="0 0 42 61"
          aria-labelledby={titleId}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            d="M21 30.5C21 27.9804 22.0009 25.5641 23.7825 23.7825C25.5641 22.0009 27.9804 21 30.5 21C33.0196 21 35.4359 22.0009 37.2175 23.7825C38.9991 25.5641 40 27.9804 40 30.5C40 33.0196 38.9991 35.4359 37.2175 37.2175C35.4359 38.9991 33.0196 40 30.5 40C27.9804 40 25.5641 38.9991 23.7825 37.2175C22.0009 35.4359 21 33.0196 21 30.5V30.5Z"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path
            d="M2 49.5C2 46.9804 3.00089 44.5641 4.78249 42.7825C6.56408 41.0009 8.98044 40 11.5 40H21V49.5C21 52.0196 19.9991 54.4359 18.2175 56.2175C16.4359 57.9991 14.0196 59 11.5 59C8.98044 59 6.56408 57.9991 4.78249 56.2175C3.00089 54.4359 2 52.0196 2 49.5Z"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path
            d="M21 2V21H30.5C33.0196 21 35.4359 19.9991 37.2175 18.2175C38.9991 16.4359 40 14.0196 40 11.5C40 8.98044 38.9991 6.56408 37.2175 4.78249C35.4359 3.00089 33.0196 2 30.5 2L21 2Z"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path
            d="M2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21H21V2H11.5C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5Z"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path
            d="M2 30.5C2 33.0196 3.00089 35.4359 4.78249 37.2175C6.56408 38.9991 8.98044 40 11.5 40H21V21H11.5C8.98044 21 6.56408 22.0009 4.78249 23.7825C3.00089 25.5641 2 27.9804 2 30.5Z"
            stroke="currentColor"
            strokeWidth="3.5"
          />
        </svg>
      </div>
    );
  },
);

FigmaIcon.displayName = 'FigmaIcon';
export { FigmaIcon };
