import { Box, type BoxProps } from "@twilio-paste/box";
import { useSlider, useSliderState, useSliderThumb } from "@twilio-paste/react-spectrum-library";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { useMergeRefs } from "@twilio-paste/utils";
import * as React from "react";

import { SliderThumb } from "./SliderThumb";
import { SliderTrack } from "./SliderTrack";

const DefaultNumberFormatter = new Intl.NumberFormat("en-US");

export interface SliderProps {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SLIDER"
   * @type {BoxProps["element"]}
   * @memberof SliderProps
   */
  element?: BoxProps["element"];
  /**
   * Must provide an id to match with a label
   *
   * @type {string}
   * @memberof SliderProps
   */
  id: string;
  /**
   * Optional id to pair the input to its help text
   *
   * @type {string}
   * @memberof SliderProps
   */
  "aria-describedby"?: string;
  /**
   * Optional id to pair the input to its label text (if not using a regular label with `htmlFor`)
   *
   * @type {string}
   * @memberof SliderProps
   */
  "aria-labelledby"?: string;
  /**
   * Disables the slider
   *
   * @default false
   * @type {boolean}
   * @memberof SliderProps
   */
  disabled?: boolean;
  /**
   * Shows error styling on the Slider
   *
   * @type {boolean}
   * @memberof SliderProps
   */
  hasError?: boolean;
  /**
   * Hides the min and max values that appear over the slider
   *
   * @default false
   * @type {boolean}
   * @memberof SliderProps
   */
  hideRangeLabels?: boolean;
  /**
   * The smallest number in the slider range
   *
   * @default 1
   * @type {number}
   * @memberof SliderProps
   */
  minValue?: number;
  /**
   * The largest number in the slider range
   *
   * @default 100
   * @type {number}
   * @memberof SliderProps
   */
  maxValue?: number;
  /**
   * The incremented value as you drag along the range
   *
   * @type {number}
   * @memberof SliderProps
   */
  step?: number;
  /**
   * Used to adjust how the numbers are rendered and interpreted.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   */
  numberFormatter?: Intl.NumberFormat;
  /**
   * The current selected value
   *
   * @default 1
   * @type {number}
   * @memberof SliderProps
   */
  value?: number;
  /**
   * Fired on every change as the thumb is dragged along the track.
   *
   * @memberof SliderProps
   */
  onChange?: (value: number) => void;
  /**
   * Fired at the end of the dragging event once.
   *
   * @memberof SliderProps
   */
  onChangeEnd?: (value: number) => void;
  /**
   * Used to internationlize the max range label.
   *
   * @default "Maximum value:"
   * @type {string}
   * @memberof SliderProps
   */
  i18nMaxRangeLabel?: string;
  /**
   * Used to internationlize the min range label.
   *
   * @default "Minimum value:"
   * @type {string}
   * @memberof SliderProps
   */
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
    element = "SLIDER",
    minValue = 0,
    maxValue = 100,
    hideRangeLabels = false,
    disabled: isDisabled = false,
    id,
    i18nMaxRangeLabel = "Maximum value:",
    i18nMinRangeLabel = "Minimum value:",
  } = props;

  // Our API differs from the underlying library, so we need to remap props
  const remappedProps = {
    ...props,
    id,
    isDisabled,
    // needed to silence react-aria a11y guardrails
    "aria-labelledby": id,
    numberFormatter: props.numberFormatter || DefaultNumberFormatter,
  };

  // These hooks manage the state of the slider
  const state = useSliderState(remappedProps);
  const { trackProps } = useSlider(remappedProps, state, trackRef);
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index: 0,
      trackRef,
      inputRef,
    },
    state,
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
        cursor={isDisabled ? "not-allowed" : "pointer"}
        onClick={onClickHandler}
      >
        <SliderTrack
          {...uiStateProps}
          fillPercent={thumbProps?.style?.left}
          element={`${element}_TRACK`}
          onClick={onClickHandler}
        >
          <SliderThumb {...thumbProps} {...uiStateProps} element={`${element}_THUMB`} onClick={onClickHandler}>
            <ScreenReaderOnly>
              <input
                ref={mergedInputRef}
                {...inputProps}
                aria-labelledby={props["aria-labelledby"]}
                aria-describedby={props["aria-describedby"]}
                id={inputProps.id?.replace("-0", "")}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </ScreenReaderOnly>
          </SliderThumb>
        </SliderTrack>
      </Box>
      {/* Create a container for the optional min and max values */}
      {!hideRangeLabels && (
        <Box
          element={`${element}_RANGE_LABELS`}
          display="flex"
          justifyContent="space-between"
          columnGap="space20"
          fontSize="fontSize30"
          lineHeight="lineHeight30"
          fontWeight="fontWeightNormal"
          color="colorTextWeak"
          overflowWrap="anywhere"
        >
          <Box element={`${element}_RANGE_LABELS_MIN`}>
            <ScreenReaderOnly>{i18nMinRangeLabel}</ScreenReaderOnly>
            {remappedProps.numberFormatter.format(minValue)}
          </Box>
          <Box element={`${element}_RANGE_LABELS_MAX`} textAlign="end">
            <ScreenReaderOnly>{i18nMaxRangeLabel}</ScreenReaderOnly>
            {remappedProps.numberFormatter.format(maxValue)}
          </Box>
        </Box>
      )}
    </Box>
  );
});

Slider.displayName = "Slider";
