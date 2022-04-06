import * as React from 'react';
import type {LegacyRef} from 'react';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {useUIDSeed} from '@twilio-paste/uid-library';

interface SVGThumbProps {
  left: number;
  top: number;
  svgCircleRef: LegacyRef<SVGCircleElement>;
  initRefs: (bool: boolean) => void;
  height: number | undefined;
  width: number | undefined;
}

const FILTER_1 = 'filter-1';
const FILTER_2 = 'filter-2';

export const SVGThumb: React.FC<SVGThumbProps> = ({left, svgCircleRef, initRefs, height, width, top}) => {
  const seed = useUIDSeed();
  const {
    backgroundColors: {colorBackground},
  } = useTheme();

  // "Force" update of this child component to ensure that the refs are correctly set on the initial render.
  // Required to measure the actual rendered dimensions and resize accordingly.
  React.useEffect(() => {
    initRefs(true);
  }, []);

  return (
    <Box
      display="flex"
      minHeight="fit-content"
      pointerEvents="none"
      position="absolute"
      top={`${top}px`}
      transform={`translateX(${left}px)`}
      transformOrigin="50% 50%"
      height={height}
      width={width}
    >
      <svg
        role="img"
        width="100%"
        height="100%"
        viewBox="0 0 35 578"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <g filter={`url(#${seed(FILTER_1)})`}>
          <rect x="12.5" y="3" width="10" height="577" rx="5" fill="#121C2D" fillOpacity="0.2" />
        </g>
        <rect x="13" y="0.5" width="9" height="576" rx="4.5" fill="white" stroke="#E1E3EA" />
        <g filter={`url(#${seed(FILTER_2)})`}>
          <circle cx="17.5" cy="289" r="16" fill="#121C2D" fillOpacity="0.3" />
        </g>

        <circle
          ref={svgCircleRef}
          strokeWidth="0px"
          stroke="rgba(2, 99, 224, 0.7)"
          cx="17.5"
          cy="289"
          r="15.5"
          fill={colorBackground}
          style={{transition: 'stroke-width 0.2s ease'}}
        />
        <circle cx="17.5" cy="289" r="8" fill="currentColor" />

        <defs>
          <filter
            id={seed(FILTER_1)}
            x="13"
            y="-5"
            width="26"
            height="593"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_287:39576" />
          </filter>
          <filter
            id={seed(FILTER_2)}
            x="-10"
            y="263"
            width="60"
            height="60"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_287:39576" />
          </filter>
        </defs>
      </svg>
    </Box>
  );
};

SVGThumb.displayName = 'SVGThumb';
