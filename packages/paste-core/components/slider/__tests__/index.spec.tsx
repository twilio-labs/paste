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

      // wrapper
      expect(screen.getByRole('group')).toBeInTheDocument();
      // Range
      expect(screen.getByRole('presentation')).toBeInTheDocument();

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

      // Fires events correctly
      fireEvent.keyDown(input, {key: 'ArrowDown', code: 'ArrowDown'});
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeEndMock).toHaveBeenCalledTimes(1);

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

      /*
       * Check that range isn't rendering
       * queryByRole returns null if no element is found, getByRole throws an error
       */
      expect(screen.queryByRole('presentation')).toBe(null);

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

      const slider = screen.getByRole('group');
      expect(slider).toHaveAttribute('data-paste-element', 'SLIDER');

      expect(slider.querySelector('[data-paste-element="SLIDER_RANGE_LABELS"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="SLIDER_RANGE_LABELS_MIN"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="SLIDER_RANGE_LABELS_MAX"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="SLIDER_TRACK_CONTAINER"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="SLIDER_TRACK"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="SLIDER_THUMB"]')).toBeInTheDocument();
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

      const slider = screen.getByRole('group');
      expect(slider).toHaveAttribute('data-paste-element', 'PASTA');

      expect(slider.querySelector('[data-paste-element="PASTA_RANGE_LABELS"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="PASTA_RANGE_LABELS_MIN"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="PASTA_RANGE_LABELS_MAX"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="PASTA_TRACK_CONTAINER"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="PASTA_TRACK"]')).toBeInTheDocument();
      expect(slider.querySelector('[data-paste-element="PASTA_THUMB"]')).toBeInTheDocument();
    });
  });
});
