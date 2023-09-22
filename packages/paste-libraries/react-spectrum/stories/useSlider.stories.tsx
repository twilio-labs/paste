import type { Meta, StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { ScreenReaderOnly } from '@twilio-paste/screen-reader-only';
import * as React from 'react';

import { type SliderState, type SliderStateOptions, useSlider, useSliderState, useSliderThumb } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Libraries/React-Spectrum/useSlider',
  parameters: {},
} as Meta;

interface ThumbProps {
  index: number;
  state: SliderState;
  trackRef: React.RefObject<HTMLDivElement>;
  isDisabled?: boolean;
}

const Thumb: React.FC<ThumbProps> = ({ state, trackRef, index, isDisabled }) => {
  const inputRef = React.useRef(null);
  const [focused, setFocused] = React.useState(false);
  const { thumbProps, inputProps, isDragging } = useSliderThumb(
    {
      index,
      trackRef,
      inputRef,
    },
    state,
  );

  return (
    <Box
      {...thumbProps}
      backgroundColor={isDisabled ? 'colorBackgroundPrimaryWeak' : 'colorBackgroundPrimaryStrong'}
      borderRadius="borderRadiusCircle"
      boxShadow={isDragging || focused ? 'shadowFocus' : 'none'}
      width="18px"
      height="18px"
      marginTop="space10"
    >
      <ScreenReaderOnly>
        <input ref={inputRef} {...inputProps} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      </ScreenReaderOnly>
    </Box>
  );
};

const Slider: React.FC<SliderStateOptions<number | number[]>> = (props) => {
  const trackRef = React.useRef(null);
  const state = useSliderState(props);
  const { groupProps, trackProps, labelProps, outputProps } = useSlider(props, state, trackRef);

  return (
    <Box {...groupProps} className={`slider ${state.orientation}`}>
      {/* Create a container for the label and output element. */}
      {props.label && (
        <div className="label-container">
          <label {...labelProps}>{props.label}</label>
          <output {...outputProps}>{state.getThumbValueLabel(0)}</output>
        </div>
      )}
      {/* The track element holds the visible track line and the thumb. */}
      <Box {...trackProps} ref={trackRef} height="13px" width="100%" display="flex" alignItems="center">
        <Box
          backgroundColor={props.isDisabled ? 'colorBackgroundPrimaryWeak' : 'colorBackgroundPrimary'}
          height="4px"
          width="100%"
          borderRadius="borderRadius20"
        >
          <Thumb index={0} state={state} trackRef={trackRef} isDisabled={props.isDisabled} />
        </Box>
      </Box>
    </Box>
  );
};

export const Default: StoryFn = () => {
  return <Slider label="Opacity" numberFormatter={new Intl.NumberFormat()} />;
};

export const Disabled: StoryFn = () => {
  return <Slider isDisabled value={42} label="Opacity" numberFormatter={new Intl.NumberFormat()} />;
};
