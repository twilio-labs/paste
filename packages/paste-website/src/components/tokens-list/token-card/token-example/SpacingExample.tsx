import { remToPx } from '@twilio-paste/theme';
import type { Properties } from 'csstype';
import * as React from 'react';

interface SpacingExampleProps {
  tokenName: string;
  spacing: string | number;
  color: Properties['color'];
}

export const SpacingExample: React.FC<React.PropsWithChildren<SpacingExampleProps>> = ({
  tokenName,
  spacing,
  color,
}) => {
  if (spacing === '0') return null;

  const lineStart = 1;
  const spacingPx = Math.abs(remToPx(spacing) as number);
  const lineEnd = lineStart + spacingPx;
  const svgWidth = lineEnd + 2;
  const strokeDash = tokenName.toLowerCase().includes('negative') ? 4 : 1;

  return (
    <svg
      width={`${svgWidth}px`}
      height="64px"
      viewBox={`-1 0 ${svgWidth} 64`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
        {/* Horizontal Line */}
        <line
          x1={lineStart}
          x2={lineEnd}
          y1="31"
          y2="31"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={`1,${strokeDash}`}
        />
        {/* Vertical Lines */}
        <line x1="0" y1="27" x2="0" y2="35" stroke={color} strokeWidth="2" />
        <line x1={lineEnd} y1="27" x2={lineEnd} y2="35" stroke={color} strokeWidth="2" />
      </g>
    </svg>
  );
};
