import * as React from 'react';
import type {LegacyRef} from 'react';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {useUIDSeed} from 'react-uid';

interface SVGThumbProps {
  left: string;
  top: string;
  svgContainerRef: LegacyRef<SVGSVGElement>;
  svgCircleRef: LegacyRef<SVGCircleElement>;
  initRefs: (bool: boolean) => void;
}

const FILTER_1 = 'filter-1';
const FILTER_2 = 'filter-2';

const widthRatio = 640 / (35 * 1.3);
const heightRatio = 583 / (578 * 1.3);

export const SVGThumb: React.FC<SVGThumbProps> = ({
  left,

  svgContainerRef,
  svgCircleRef,
  initRefs,
  containerHeight,
  containerWidth,
}) => {
  const seed = useUIDSeed();
  const {
    backgroundColors: {colorBackground},
  } = useTheme();
  const [thumbHeight, setThumbHeight] = React.useState<number>();
  const [thumbWidth, setThumbWidth] = React.useState<number>();

  // Force update of this child component to ensure that the refs are correctly set on the initial render.
  // Required to measure the actual rendered dimensions and resize accordingly.
  React.useEffect(() => {
    initRefs(true);
  }, []);

  React.useEffect(() => {
    if (typeof containerHeight === 'number' && !Number.isNaN(containerHeight)) {
      setThumbHeight(containerHeight / heightRatio);
    }
  }, [containerHeight]);
  React.useEffect(() => {
    if (typeof containerWidth === 'number' && !Number.isNaN(containerWidth)) {
      setThumbWidth(containerWidth / widthRatio);
    }
  }, [containerWidth]);

  const svgOffset =
    thumbHeight && containerHeight ? `-${Math.abs((thumbHeight as number) - (containerHeight as number)) / 2}px` : 0;
  console.log({containerHeight, thumbHeight, containerWidth, thumbWidth, svgOffset});

  return (
    <Box
      display="flex"
      // height={thumbHeight}
      minHeight="fit-content"
      // width={thumbWidth}
      pointerEvents="none"
      position="absolute"
      left={left}
      top={svgOffset}
    >
      <svg
        ref={svgContainerRef}
        role="img"
        // width="35"
        // height="578"
        width={thumbWidth}
        height={thumbHeight}
        viewBox="0 0 35 578"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter={`url(#${seed(FILTER_1)})`}>
          <rect x="12.5" y="3" width="10" height="577" rx="5" fill="#121C2D" fillOpacity="0.1" />
        </g>
        <rect x="13" y="0.5" width="9" height="576" rx="4.5" fill="white" stroke="#E1E3EA" />
        <g filter={`url(#${seed(FILTER_2)})`}>
          <circle cx="17.5" cy="289" r="16" fill="#121C2D" fillOpacity="0.1" />
        </g>
        <circle ref={svgCircleRef} strokeWidth="4px" cx="17.5" cy="289" r="15.5" fill={colorBackground} />
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
            x="0"
            y="263"
            width="52"
            height="52"
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
