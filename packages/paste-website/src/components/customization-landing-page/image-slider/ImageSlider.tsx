import * as React from 'react';
import type {MutableRefObject, LegacyRef} from 'react';
import {Box} from '@twilio-paste/core/box';

import {SVGThumb} from './SVGThumb';
import {ImageBox} from './partials';
import {DEFAULT_MIN_CHANGE, MAX_VALUE, MIN_VALUE} from './constants';
import {convertPositionToInputValue} from './utils';

const ID = 'input-range-image-slider-control';

export const ImageSlider: React.FC<{frontPath: string; backPath: string}> = ({frontPath, backPath}) => {
  const [value, setValue] = React.useState<number>(MAX_VALUE / 2);
  const [shouldMeasure, setShouldMeasure] = React.useState(false);
  const [refsAreInitiated, setRefsAreInitiated] = React.useState(false);

  const circleRef = React.useRef<SVGCircleElement>();
  const containerRef = React.useRef<HTMLElement>();
  const svgContainerRef = React.useRef<SVGSVGElement>();

  const {width: containerWidth, x: containerX, height: containerHeight} = containerRef?.current
    ? (containerRef.current as HTMLElement).getBoundingClientRect()
    : {width: undefined, height: 460, x: undefined};

  const {width: svgWidth, height: svgHeight} = svgContainerRef?.current
    ? (svgContainerRef.current as SVGSVGElement).getBoundingClientRect()
    : {width: undefined, height: 396};

  const svgOffset = `-${Math.abs(svgHeight - containerHeight) / 2}px`;

  const minimumChange = svgWidth ? svgWidth / 2 : DEFAULT_MIN_CHANGE;

  const clipX = (value / MAX_VALUE) * (containerWidth as number);

  React.useEffect(() => {
    if (!refsAreInitiated) {
      setRefsAreInitiated(true);
    }
  }, [refsAreInitiated]);

  return (
    <Box
      display={['none', 'block']}
      minHeight="460px"
      position="absolute"
      right="spaceNegative150"
      top="50px"
      height="100%"
      width="60%"
      zIndex="zIndex10"
      ref={containerRef as MutableRefObject<HTMLElement>}
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
          cursor={shouldMeasure ? 'grabbing' : 'grab'}
          onMouseDown={(e) => {
            e.persist();
            setShouldMeasure(true);
          }}
          onMouseUp={(e) => {
            const {clientX} = e;

            setShouldMeasure((currentShouldMeasure) => {
              if (currentShouldMeasure) {
                setValue(
                  convertPositionToInputValue(containerWidth as number, clientX - (containerX as number), minimumChange)
                );
              }

              return false;
            });
          }}
          onMouseMove={(e) => {
            e.persist();
            if (shouldMeasure) {
              const {clientX} = e;

              setValue(
                convertPositionToInputValue(containerWidth as number, clientX - (containerX as number), minimumChange)
              );
            }
          }}
          onMouseLeave={(e) => {
            e.persist();
            setShouldMeasure(false);
          }}
        />

        <ImageBox label="Image of hero with customized Paste theme" src={backPath} />
        <ImageBox label="Image of hero with default Paste theme" clipPath="url(#input-range-clip)" src={frontPath} />

        {typeof clipX === 'number' && !Number.isNaN(clipX) ? (
          <>
            <SVGThumb
              left={`${clipX - minimumChange}px`}
              top={svgOffset}
              circleRef={circleRef as LegacyRef<SVGCircleElement>}
              svgContainerRef={svgContainerRef as LegacyRef<SVGSVGElement>}
            />
            <svg height="0" width="0">
              <defs>
                <clipPath id="input-range-clip">
                  <rect y="0" x={clipX} width={containerWidth} height={(containerHeight as number) * 2} />
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
          if (circleRef.current) {
            (circleRef.current as SVGCircleElement).setAttribute('stroke', 'rgba(2, 99, 224, 0.7)');
          }
        }}
        onBlur={() => {
          if (circleRef.current) {
            (circleRef.current as SVGCircleElement).removeAttribute('stroke');
          }
        }}
        onChange={({target: {value: inputTargetValue}}: React.ChangeEvent<HTMLInputElement>) => {
          setValue(Number(inputTargetValue));
        }}
      />
    </Box>
  );
};

ImageSlider.displayName = 'ImageSlider';
