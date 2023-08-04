import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {useSliderState, useSlider, useSliderThumb} from '@twilio-paste/react-spectrum-library';

import {SliderThumb} from './SliderThumb';
import {StyledTrack} from './StyledTrack';

export interface SliderProps {
  element?: BoxProps['element'];
  id: string;
  disabled?: boolean;
  hasError?: boolean;
  hideRangeLabels?: boolean;
  minValue?: number;
  maxValue?: number;
  step?: number;
  /**
   * Used to adjust how the numbers are rendered and interpreted.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat \
   */
  numberFormatter: Intl.NumberFormat;
  value?: number;
  onChange?: (value: number) => void;
  /** Fired when the slider stops moving, due to being let go. */
  onChangeEnd?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = (props) => {
  const inputRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  /*
   * We deconstruct the props here to get the values we need
   * and to preserve the underlying props object variable
   */
  const {
    element = 'SLIDER',
    minValue = 0,
    maxValue = 100,
    hideRangeLabels = false,
    disabled: isDisabled = false,
    id,
  } = props;

  // Our API differs from the underlying library, so we need to remap props
  const remappedProps = {
    ...props,
    id,
    isDisabled,
    // needed to silence react-aria a11y guardrails
    'aria-labelledby': id,
  };

  // These hooks manage the state of the slider
  const state = useSliderState(remappedProps);
  const {trackProps} = useSlider(remappedProps, state, trackRef);
  const {thumbProps, inputProps, isDragging} = useSliderThumb(
    {
      index: 0,
      trackRef,
      inputRef,
    },
    state
  );

  // Used to determine the UI styling of the track and thumb
  const uiStateProps = React.useMemo(() => {
    return {
      disabled: isDisabled,
      error: props.hasError,
      hovered,
      focused,
      dragging: isDragging,
    };
  }, [isDisabled, props.hasError, hovered, focused, isDragging]);

  return (
    <Box role="group" element={element}>
      {/* Create a container for the optional min and max values */}
      {!hideRangeLabels && (
        <Box
          role="presentation"
          element={`${element}_RANGE_LABELS`}
          display="flex"
          justifyContent="space-between"
          fontSize="fontSize30"
          lineHeight="lineHeight30"
          fontWeight="fontWeightSemibold"
          color="colorTextWeak"
        >
          <Box as="span" element={`${element}_RANGE_LABELS_MIN`}>
            {props.numberFormatter.format(minValue)}
          </Box>
          <Box as="span" element={`${element}_RANGE_LABELS_MAX`}>
            {props.numberFormatter.format(maxValue)}
          </Box>
        </Box>
      )}
      {/* The track element holds the visible track line and the thumb */}
      <Box
        {...trackProps}
        element={`${element}_TRACK_CONTAINER`}
        ref={trackRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        display="flex"
        alignItems="center"
        height="20px"
        width="100%"
        cursor="pointer"
      >
        <StyledTrack
          {...uiStateProps}
          element={`${element}_TRACK`}
          left={thumbProps.style?.left}
          height="4px"
          width="100%"
          borderRadius="borderRadius20"
          cursor="pointer"
        >
          <SliderThumb {...thumbProps} {...uiStateProps} element={`${element}_THUMB`}>
            <ScreenReaderOnly>
              <input
                ref={inputRef}
                {...inputProps}
                aria-labelledby={undefined}
                id={inputProps.id?.replace('-0', '')}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </ScreenReaderOnly>
          </SliderThumb>
        </StyledTrack>
      </Box>
    </Box>
  );
};

Slider.displayName = 'Slider';
