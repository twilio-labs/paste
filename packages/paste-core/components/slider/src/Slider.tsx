import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {useSliderState, useSlider, useSliderThumb} from '@twilio-paste/react-spectrum-library';
import {useMergeRefs} from '@twilio-paste/utils';

import {SliderThumb} from './SliderThumb';
import {StyledTrack} from './StyledTrack';

const DefaultNumberFormatter = new Intl.NumberFormat('en-US');

export interface SliderProps {
  element?: BoxProps['element'];
  id: string;
  'aria-describedby'?: string;
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
  numberFormatter?: Intl.NumberFormat;
  value?: number;
  onChange?: (value: number) => void;
  /** Fired when the slider stops moving, due to being let go. */
  onChangeEnd?: (value: number) => void;
  i18nMaxRangeLabel?: string;
  i18nMinRangeLabel?: string;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const mergedInputRef = useMergeRefs(inputRef, ref) as React.RefObject<HTMLInputElement>;
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
    i18nMaxRangeLabel = 'Maximum value:',
    i18nMinRangeLabel = 'Minimum value:',
  } = props;

  // Our API differs from the underlying library, so we need to remap props
  const remappedProps = {
    ...props,
    id,
    isDisabled,
    // needed to silence react-aria a11y guardrails
    'aria-labelledby': id,
    numberFormatter: props.numberFormatter || DefaultNumberFormatter,
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

  const onClickHandler = React.useCallback(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  return (
    <Box element={element}>
      {/* Create a container for the optional min and max values */}
      {!hideRangeLabels && (
        <Box
          element={`${element}_RANGE_LABELS`}
          display="flex"
          justifyContent="space-between"
          fontSize="fontSize30"
          lineHeight="lineHeight30"
          fontWeight="fontWeightSemibold"
          color="colorTextWeak"
        >
          <Box element={`${element}_RANGE_LABELS_MIN`}>
            <ScreenReaderOnly>{i18nMinRangeLabel}</ScreenReaderOnly>
            {remappedProps.numberFormatter.format(minValue)}
          </Box>
          <Box element={`${element}_RANGE_LABELS_MAX`}>
            <ScreenReaderOnly>{i18nMaxRangeLabel}</ScreenReaderOnly>
            {remappedProps.numberFormatter.format(maxValue)}
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
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        onClick={onClickHandler}
      >
        <StyledTrack
          {...uiStateProps}
          element={`${element}_TRACK`}
          left={thumbProps.style?.left}
          height="4px"
          width="100%"
          borderRadius="borderRadius20"
          onClick={onClickHandler}
        >
          <SliderThumb {...thumbProps} {...uiStateProps} element={`${element}_THUMB`} onClick={onClickHandler}>
            <ScreenReaderOnly>
              <input
                ref={mergedInputRef}
                {...inputProps}
                aria-labelledby={undefined}
                aria-describedby={props['aria-describedby']}
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
});

Slider.displayName = 'Slider';
