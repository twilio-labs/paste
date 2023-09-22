import type {
  DisplayOptions,
  LeftOptions,
  OpacityProperty,
  PositionOptions,
  TextColorOptions,
  TopOptions,
  TransitionProperty,
} from '@twilio-paste/style-props';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

export interface PasteIconProps {
  decorative?: boolean;
  size?: number;
  title?: string;
  color?: TextColorOptions;
  display?: DisplayOptions;
  position?: PositionOptions;
  top?: TopOptions;
  left?: LeftOptions;
  opacity?: OpacityProperty;
  transition?: TransitionProperty;
}

const PasteIcon = React.memo(
  ({
    title = 'Twilio Icon',
    color,
    decorative = true,
    display,
    size,
    opacity,
    transition,
    position,
    top,
    left,
  }: PasteIconProps) => {
    const uid = useUID();
    return (
      <span style={{ color, display, opacity, transition, position, top, left, width: size, height: size }}>
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          viewBox="0 0 785.65 785.65"
          width="100%"
          height="100%"
        >
          <title id={uid}>{title}</title>
          <g data-name="Layer 2">
            <g data-name="Paste Logo">
              <rect fill="currentColor" width="785.65" height="785.65" rx="60" />
              <path
                fill="#fff"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="25px"
                d="M530.84,447.84H254a62.82,62.82,0,0,1-62.75-62.75V385l1.82-199.25a62.81,62.81,0,0,1,62.75-62.68H532.67a62.81,62.81,0,0,1,62.74,62.74v.11l-1.82,199.24A62.82,62.82,0,0,1,530.84,447.84Zm-316.37-62.7A39.55,39.55,0,0,0,254,424.59H530.84a39.55,39.55,0,0,0,39.5-39.5V385l1.83-199.24a39.55,39.55,0,0,0-39.5-39.45H255.8a39.55,39.55,0,0,0-39.5,39.5v.11Z"
              />
              <path
                fill="#fff"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="25px"
                d="M242.63,662.59a52.5,52.5,0,0,1-52.4-52.46V488a63.16,63.16,0,0,1,63.09-63.09h104L475.18,160.68a63.09,63.09,0,0,1,120.19,26.84V385.07a63.16,63.16,0,0,1-63.09,63.09H372.35L290.11,632.44a52.61,52.61,0,0,1-47.48,30.15Zm10.69-214.43A39.9,39.9,0,0,0,213.47,488V610.13A29.19,29.19,0,0,0,269,622.64l77.86-174.48Zm129.4-23.24H532.28a39.9,39.9,0,0,0,39.85-39.85V187.52a39.85,39.85,0,0,0-75.87-17.05Z"
              />
            </g>
          </g>
        </svg>
      </span>
    );
  },
);

export { PasteIcon };
