import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Slider} from '../src';

const onChangeMock: jest.Mock = jest.fn();
const onChangeEndMock: jest.Mock = jest.fn();

const PercentFormatter = new Intl.NumberFormat('en-US', {style: 'percent'});

describe('Slider', () => {
  describe('base usage', () => {
    it('should render correctly', () => {
      const {rerender} = render(
        <Theme.Provider theme="twilio">
          <Slider
            id="test-slider"
            aria-label="test-label"
            aria-labelledby="test-labelledby"
            aria-describedby="test-description"
            value={0.5}
            minValue={0}
            maxValue={1}
            step={0.01}
            onChange={onChangeMock}
            onChangeEnd={onChangeEndMock}
            numberFormatter={PercentFormatter}
          />
        </Theme.Provider>
      );

      // Slider input
      const input = screen.getByRole('slider');
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('min', '0');
      expect(input).toHaveAttribute('max', '1');
      expect(input).toHaveAttribute('step', '0.01');
      expect(input).toHaveAttribute('value', '0.5');
      expect(input).toHaveAttribute('type', 'range');
      expect(input).toHaveAttribute('aria-valuetext', '50%');
      expect(input).toHaveAttribute('tabindex', '0');
      expect(input).toHaveAttribute('id', 'test-slider');
      expect(input).toHaveAttribute('aria-describedby', 'test-description');
      expect(input).toHaveAttribute('aria-labelledby', 'test-labelledby');
      expect(input).not.toHaveAttribute('aria-label');

      // Fires events correctly
      fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeEndMock).toHaveBeenCalledTimes(1);

      // Check that the range is being rendered
      const minValue = screen.getByText('0%');
      expect(minValue).toBeInTheDocument();

      // New render to test other conditions
      rerender(
        <Theme.Provider theme="twilio">
          <Slider
            disabled
            hideRangeLabels
            id="test-slider"
            value={0.5}
            minValue={0}
            maxValue={1}
            step={0.01}
            onChange={onChangeMock}
            onChangeEnd={onChangeEndMock}
            numberFormatter={PercentFormatter}
          />
        </Theme.Provider>
      );

      // Check that range isn't rendering anymore
      expect(minValue).not.toBeInTheDocument();

      fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
      // Disabled so unchanged in call count
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeEndMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Customization', () => {
    it('should set default data-paste-element attribute on Slider and its children', (): void => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Slider
            id="test-slider"
            value={0.5}
            minValue={0}
            maxValue={1}
            step={0.01}
            onChange={onChangeMock}
            onChangeEnd={onChangeEndMock}
            numberFormatter={PercentFormatter}
          />
        </CustomizationProvider>
      );

      const minValue = screen.getByText('0%');
      expect(minValue).toHaveAttribute('data-paste-element', 'SLIDER_RANGE_LABELS_MIN');
      const rangeLabelsWrapper = minValue.parentElement;
      expect(rangeLabelsWrapper).toHaveAttribute('data-paste-element', 'SLIDER_RANGE_LABELS');
      const sliderWrapper = rangeLabelsWrapper?.parentElement;
      expect(sliderWrapper).toHaveAttribute('data-paste-element', 'SLIDER');

      expect(rangeLabelsWrapper?.querySelector('[data-paste-element="SLIDER_RANGE_LABELS_MAX"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="SLIDER_TRACK_CONTAINER"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="SLIDER_TRACK"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="SLIDER_TRACK_BACKGROUND"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="SLIDER_TRACK_FILL"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="SLIDER_THUMB"]')).toBeInTheDocument();
    });

    it('should set custom data-paste-element attribute on Slider and its children', (): void => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Slider
            element="PASTA"
            id="test-slider"
            value={0.5}
            minValue={0}
            maxValue={1}
            step={0.01}
            onChange={onChangeMock}
            onChangeEnd={onChangeEndMock}
            numberFormatter={PercentFormatter}
          />
        </CustomizationProvider>
      );

      const minValue = screen.getByText('0%');
      expect(minValue).toHaveAttribute('data-paste-element', 'PASTA_RANGE_LABELS_MIN');
      const rangeLabelsWrapper = minValue.parentElement;
      expect(rangeLabelsWrapper).toHaveAttribute('data-paste-element', 'PASTA_RANGE_LABELS');
      const sliderWrapper = rangeLabelsWrapper?.parentElement;
      expect(sliderWrapper).toHaveAttribute('data-paste-element', 'PASTA');

      expect(rangeLabelsWrapper?.querySelector('[data-paste-element="PASTA_RANGE_LABELS_MAX"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="PASTA_TRACK_CONTAINER"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="PASTA_TRACK"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="PASTA_TRACK_BACKGROUND"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="PASTA_TRACK_FILL"]')).toBeInTheDocument();
      expect(sliderWrapper?.querySelector('[data-paste-element="PASTA_THUMB"]')).toBeInTheDocument();
    });
  });
});
