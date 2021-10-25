import * as React from 'react';
import type {MutableRefObject, LegacyRef} from 'react';
import {Box} from '@twilio-paste/core/box';
import type {FluidObject} from 'gatsby-image';
import {SVGThumb} from './SVGThumb';
import {ImageBox} from './ImageBox';
import {DEFAULT_MIN_CHANGE, MAX_VALUE, MIN_VALUE} from './constants';
import {convertPositionToInputValue, getValueInRange} from './utils';

const ID = 'input-range-image-slider-control';

export const ImageSlider: React.FC<{frontFluidObject: FluidObject; backFluidObject: FluidObject}> = ({
  frontFluidObject,
  backFluidObject,
}) => {
  // Set the initial state of the slider to be roughly at the 60% position.
  const [value, setValue] = React.useState<number>(MAX_VALUE * 0.6);
  const [shouldMeasure, setShouldMeasure] = React.useState(false);
  const [refsAreInitiated, setRefsAreInitiated] = React.useState(false);

  const containerRef = React.useRef<HTMLElement>();
  const svgContainerRef = React.useRef<SVGSVGElement>();
  const svgCircleRef = React.useRef<SVGCircleElement>();

  const {width: containerWidth, x: containerX, height: containerHeight} = containerRef?.current
    ? containerRef.current.getBoundingClientRect()
    : {width: undefined, height: undefined, x: undefined};

  const {width: svgWidth, height: svgHeight} = svgContainerRef?.current
    ? svgContainerRef.current.getBoundingClientRect()
    : {width: undefined, height: undefined};

  // SVG offset defines the offset from the top position of the SVG that is required to center it against the images.
  // The default value reflects the relative height ratio of the thumb to the container, allowing a render before the Ref Object is attached and the SVG can be measured.
  // This value is only a fallback, the actual measurement is taken after mount (in an update cycle)
  const svgOffset = svgHeight
    ? `-${Math.abs(svgHeight - (containerHeight as number)) / 2}px`
    : `-${Math.abs(containerHeight as number) / 8}px`;

  // Minimum change defines the absolute distance threshold for value to change.
  // Calculated by half the width of the SVG, default is half of the absolute width.
  const minimumChange = svgWidth ? svgWidth / 2 : DEFAULT_MIN_CHANGE;

  // Width of SVG Clip used to conditionally show/hide part of the each image
  // SVG clip is calculated from right to left, since the dynamic value here is the width.
  const clip = (value / MAX_VALUE) * (containerWidth as number);

  React.useEffect(() => {
    if (!refsAreInitiated) {
      setRefsAreInitiated(true);
    }
  }, [refsAreInitiated]);

  return (
    <Box
      display={['none', 'block']}
      height="100%"
      minHeight="460px"
      maxWidth="size60"
      position="absolute"
      top="50px"
      ref={containerRef as MutableRefObject<HTMLElement>}
      right="spaceNegative150"
      width="60%"
      zIndex="zIndex10"
    >
      <Box
        as="label"
        display="inherit"
        aria-label="Controls the width of the customizable image."
        // @ts-expect-error "htmlFor" is an allowed attribute for Label elements.
        htmlFor={ID}
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
                const newValue = getValueInRange(computedValue);

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
              const newValue = getValueInRange(computedValue);

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
          clipPath="url(#input-range-clip)"
          fluid={frontFluidObject}
        />

        {typeof clip === 'number' && !Number.isNaN(clip) ? (
          <>
            <SVGThumb
              left={`${clip - minimumChange}px`}
              top={svgOffset}
              svgContainerRef={svgContainerRef as LegacyRef<SVGSVGElement>}
              svgCircleRef={svgCircleRef as LegacyRef<SVGCircleElement>}
              initRefs={setRefsAreInitiated}
            />
            <svg height="0" width="0">
              <defs>
                <clipPath id="input-range-clip">
                  <rect y="0" x="0" width={clip} height={(containerHeight as number) * 2} />
                </clipPath>
              </defs>
            </svg>
          </>
        ) : null}
      </Box>

      <Box
        as="input"
        opacity="0"
        id={ID}
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
          }
        }}
        onBlur={() => {
          if (svgCircleRef.current) {
            (svgCircleRef.current as SVGCircleElement).removeAttribute('stroke');
          }
        }}
        onChange={({target: {value: inputTargetValue}}: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = getValueInRange(Number(inputTargetValue));

          setValue(newValue);
        }}
      />
    </Box>
  );
};

ImageSlider.displayName = 'ImageSlider';
