import * as React from 'react';
import type {MutableRefObject, LegacyRef} from 'react';
import {Box} from '@twilio-paste/box';
import {useUIDSeed} from '@twilio-paste/uid-library';

import type {FluidObject} from 'gatsby-image';
import {SVGThumb} from './SVGThumb';
import {ImageBox} from './ImageBox';
import {DEFAULT_MIN_CHANGE, MAX_VALUE, MIN_VALUE} from './constants';
import {convertPositionToInputValue, clampValueToRange} from './utils';
import {useSvgResize} from './useSvgResize';

const INPUT_ID = 'input-range-id';
const CLIP_PATH_ID = 'clip-path-id';

export const ImageSlider: React.FC<{frontFluidObject: FluidObject; backFluidObject: FluidObject}> = ({
  frontFluidObject,
  backFluidObject,
}) => {
  const uidSeed = useUIDSeed();

  // Set the initial state of the slider to be roughly at the 60% position.
  const [value, setValue] = React.useState<number>(MAX_VALUE * 0.6);
  const [shouldMeasure, setShouldMeasure] = React.useState(false);
  const [refsAreInitiated, setRefsAreInitiated] = React.useState(false);

  const containerRef = React.useRef<HTMLElement>();
  const svgCircleRef = React.useRef<SVGCircleElement>();

  const {width: containerWidth, x: containerX, height: containerHeight} = containerRef?.current
    ? containerRef.current.getBoundingClientRect()
    : {width: undefined, height: undefined, x: undefined};

  const {svgOffset, svgHeight, svgWidth} = useSvgResize(containerHeight, containerWidth);

  // Minimum change defines the absolute distance threshold for value to change.
  // Calculated by half the width of the SVG, default is half of the absolute width.
  const minimumChange = svgWidth ? svgWidth / 2 : DEFAULT_MIN_CHANGE;

  // Width of SVG Clip used to conditionally show/hide part of the each image
  // SVG clip is calculated from right to left, since the dynamic value here is the width.
  // const clip = (value / MAX_VALUE) * (containerWidth as number);
  const clip = containerWidth && (value / MAX_VALUE) * (containerWidth as number);

  React.useEffect(() => {
    if (!refsAreInitiated) {
      setRefsAreInitiated(true);
    }
  }, [refsAreInitiated]);

  return (
    <Box
      display={['none', 'block']}
      minHeight={['size0', '260px', '460px']}
      maxWidth="size60"
      position="absolute"
      top="space150"
      ref={containerRef as MutableRefObject<HTMLElement>}
      right="spaceNegative150"
      width="60%"
      zIndex="zIndex10"
      marginRight={['space0', 'space0', 'space100']}
    >
      <Box
        as="label"
        display="inherit"
        aria-label="Controls the width of the customizable image."
        // @ts-expect-error "htmlFor" is an allowed attribute for Label elements.
        htmlFor={uidSeed(INPUT_ID)}
        color="colorTextWeaker"
        _hover={{color: 'colorTextWeak'}}
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          maxWidth="640px"
          cursor={shouldMeasure ? 'grabbing' : 'grab'}
          onMouseDown={(e) => {
            e.persist();
            setShouldMeasure(true);
          }}
          onMouseUp={(e) => {
            const {clientX} = e;
            setShouldMeasure((currentShouldMeasure) => {
              if (currentShouldMeasure) {
                const computedValue = convertPositionToInputValue(
                  containerWidth as number,
                  clientX - (containerX as number),
                  minimumChange
                );
                const newValue = clampValueToRange(computedValue);

                setValue(newValue);
              }

              return false;
            });
          }}
          onMouseMove={(e) => {
            const {clientX} = e;
            if (shouldMeasure) {
              const computedValue = convertPositionToInputValue(
                containerWidth as number,
                clientX - (containerX as number),
                minimumChange
              );
              const newValue = clampValueToRange(computedValue);

              setValue(newValue);
            }
          }}
          onMouseLeave={(e) => {
            e.persist();
            setShouldMeasure(false);
          }}
        />

        <ImageBox label="Sample components with a customized Paste theme" fluid={backFluidObject} />
        <ImageBox
          label="Sample components with a default Paste theme"
          clipPath={`url(#${uidSeed(CLIP_PATH_ID)})`}
          fluid={frontFluidObject}
        />

        {typeof clip === 'number' && !Number.isNaN(clip) ? (
          <>
            <SVGThumb
              left={`${clip - minimumChange}px`}
              top={svgOffset}
              svgCircleRef={svgCircleRef as LegacyRef<SVGCircleElement>}
              initRefs={setRefsAreInitiated}
              width={svgWidth}
              height={svgHeight}
            />
            <svg height="0" width="0">
              <defs>
                <clipPath id={uidSeed(CLIP_PATH_ID)}>
                  <rect
                    y="0"
                    x={-1 * (containerWidth as number)}
                    width={containerWidth}
                    height={(containerHeight as number) * 2}
                    style={{
                      transform: `translateX(${clip}px)`,
                    }}
                  />
                </clipPath>
              </defs>
            </svg>
          </>
        ) : null}
      </Box>

      <Box
        as="input"
        opacity="0"
        id={uidSeed(INPUT_ID)}
        // @ts-expect-error Allowed attribute "max" for input range
        max={MAX_VALUE}
        min={MIN_VALUE}
        minHeight="size0"
        minWidth="size0"
        value={value}
        type="range"
        onFocus={() => {
          if (svgCircleRef.current) {
            (svgCircleRef.current as SVGCircleElement).setAttribute('stroke', 'rgba(2, 99, 224, 0.7)');
            (svgCircleRef.current as SVGCircleElement).setAttribute('transform', 'scale(1.1)');
          }
        }}
        onBlur={() => {
          if (svgCircleRef.current) {
            (svgCircleRef.current as SVGCircleElement).removeAttribute('stroke');
            (svgCircleRef.current as SVGCircleElement).removeAttribute('transform');
          }
        }}
        onChange={({target: {value: inputTargetValue}}: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = clampValueToRange(Number(inputTargetValue));

          setValue(newValue);
        }}
      />
    </Box>
  );
};

ImageSlider.displayName = 'ImageSlider';
