import * as React from 'react';
import type {MutableRefObject, LegacyRef} from 'react';
import {Box} from '@twilio-paste/box';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {StaticImage} from 'gatsby-plugin-image';
import {SVGThumb} from './SVGThumb';
import {DEFAULT_MIN_CHANGE, MAX_VALUE, MIN_VALUE} from './constants';
import {convertPositionToInputValue, clampValueToRange} from './utils';
import {useSvgResize} from './useSvgResize';

const INPUT_ID = 'input-range-id';
const CLIP_PATH_ID = 'clip-path-id';

const imageContainerStyleProps: React.CSSProperties = {
  pointerEvents: 'none',
  position: 'absolute',
  width: '100%',
  height: '100%',
  maxWidth: '640px',
};

const imageStyleProps: React.CSSProperties = {
  objectFit: 'scale-down',
  objectPosition: 'center center',
};

export const ImageSlider: React.FC = () => {
  const uidSeed = useUIDSeed();

  // Set the initial state of the slider to be roughly at the 60% position.
  const [value, setValue] = React.useState<number>(MAX_VALUE * 0.6);
  const [isDragging, setIsDragging] = React.useState(false);
  const [refsAreInitiated, setRefsAreInitiated] = React.useState(false);

  const containerRef = React.useRef<HTMLElement>();
  const svgCircleRef = React.useRef<SVGCircleElement>();

  const {
    width: containerWidth,
    x: containerX,
    height: containerHeight,
  } = containerRef?.current ? containerRef.current.getBoundingClientRect() : {width: 0, height: 0, x: 0};

  const {svgOffset, svgHeight, svgWidth} = useSvgResize(containerHeight, containerWidth);

  // Minimum change defines the absolute distance threshold for value to change.
  // Calculated by half the width of the SVG, default is half of the absolute width.
  const minimumChange = svgWidth ? svgWidth / 2 : DEFAULT_MIN_CHANGE;

  // Width of SVG Clip used to conditionally show/hide part of the each image
  // SVG clip is calculated from right to left, since the dynamic value here is the width.
  const clip = (value / MAX_VALUE) * containerWidth;

  const handleMouseMove = React.useCallback(
    (event): void => {
      const {clientX} = event;
      const computedValue = convertPositionToInputValue(containerWidth, clientX - containerX);

      setValue(computedValue);
    },
    [containerWidth, containerX]
  );

  const handleMouseUp = React.useCallback(
    (event): void => {
      setIsDragging(false);

      // We must unbind these manually managed events
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);

      const {clientX} = event;
      const computedValue = convertPositionToInputValue(containerWidth, clientX - containerX);

      setValue(computedValue);
    },
    [containerWidth, containerX]
  );

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
      userSelect="none"
    >
      <Box
        as="label"
        position="absolute"
        width="100%"
        height="100%"
        display="inherit"
        maxWidth="640px"
        cursor={isDragging ? 'grabbing' : 'grab'}
        aria-label="Controls the width of the customizable image."
        // @ts-expect-error "htmlFor" is an allowed attribute for Label elements.
        htmlFor={uidSeed(INPUT_ID)}
        color="colorTextWeaker"
        _hover={{color: 'colorTextWeak'}}
        onMouseDown={() => {
          setIsDragging(true);
          document.addEventListener('mouseup', handleMouseUp);
          document.addEventListener('mousemove', handleMouseMove);
        }}
      >
        <StaticImage
          src="../../../assets/images/customization/hero-back.png"
          alt="Sample components with a customized Paste theme"
          placeholder="blurred"
          layout="fullWidth"
          style={imageContainerStyleProps}
          imgStyle={imageStyleProps}
        />
        <StaticImage
          src="../../../assets/images/customization/hero-front.png"
          alt="Sample components with a default Paste theme"
          placeholder="blurred"
          layout="fullWidth"
          style={imageContainerStyleProps}
          imgStyle={{...imageStyleProps, clipPath: `url(#${uidSeed(CLIP_PATH_ID)})`}}
        />

        {typeof clip === 'number' && !Number.isNaN(clip) ? (
          <>
            <SVGThumb
              left={Math.round(clip - minimumChange)}
              top={svgOffset}
              svgCircleRef={svgCircleRef as LegacyRef<SVGCircleElement>}
              initRefs={setRefsAreInitiated}
              width={svgWidth}
              height={svgHeight}
            />
            <svg height="0" width="0" viewBox="0 0 0 0">
              <defs>
                <clipPath id={uidSeed(CLIP_PATH_ID)}>
                  <rect
                    y="0"
                    x={-1 * containerWidth}
                    width={containerWidth}
                    height={containerHeight * 2}
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
            (svgCircleRef.current as SVGCircleElement).setAttribute('stroke-width', '0.22rem');
          }
        }}
        onBlur={() => {
          if (svgCircleRef.current) {
            (svgCircleRef.current as SVGCircleElement).setAttribute('stroke-width', '0');
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
