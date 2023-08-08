import * as React from 'react';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {useUID} from '@twilio-paste/uid-library';
import {Form, FormControl} from '@twilio-paste/form';
import {Paragraph} from '@twilio-paste/paragraph';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';

import {Slider} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Slider',
};

const NumberFormatter = new Intl.NumberFormat('en-US');
const PercentFormatter = new Intl.NumberFormat('en-US', {style: 'percent'});

export const Default = (): React.ReactNode => {
  const [value, setValue] = React.useState<number>(0.75);
  const sliderId = useUID();
  const helpTextId = useUID();

  return (
    <Form>
      <FormControl>
        <Label htmlFor={sliderId}>Volume</Label>
        <Slider
          id={sliderId}
          aria-describedby={helpTextId}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={PercentFormatter}
        />
        <HelpText id={helpTextId}>
          I saw an ad yesterday that said “Radio for sale $1, volume is stuck on full blast”. I said to myself “well, I
          can’t turn that down.”
        </HelpText>
      </FormControl>
    </Form>
  );
};

export const Disabled = (): React.ReactNode => {
  const [value, setValue] = React.useState<number>(0.01);
  const sliderId = useUID();
  const helpTextId = useUID();

  return (
    <Form>
      <FormControl>
        <Label disabled htmlFor={sliderId}>
          Volume
        </Label>
        <Slider
          disabled
          id={sliderId}
          aria-describedby={helpTextId}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={PercentFormatter}
        />
        <HelpText id={helpTextId}>
          I saw an ad yesterday that said “Radio for sale $1, volume is stuck on full blast”. I said to myself “well, I
          can’t turn that down.”
        </HelpText>
      </FormControl>
    </Form>
  );
};

export const Error = (): React.ReactNode => {
  const [value, setValue] = React.useState<number>(32);
  const sliderId = useUID();
  const helpTextId = useUID();

  return (
    <Form>
      <FormControl>
        <Label required htmlFor={sliderId}>
          How many radios do you own?
        </Label>
        <Slider
          hasError
          id={sliderId}
          aria-describedby={helpTextId}
          value={value}
          minValue={0}
          maxValue={100}
          step={1}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={NumberFormatter}
        />
        <HelpText id={helpTextId} variant="error">
          I saw an ad yesterday that said “Radio for sale $1, volume is stuck on full blast”. I said to myself “well, I
          can’t turn that down.”
        </HelpText>
      </FormControl>
    </Form>
  );
};

export const CustomRange = (): React.ReactNode => {
  const [value, setValue] = React.useState<number>(0.55);
  const id = useUID();

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Screen brightness</Label>
        <Slider
          id={id}
          value={value}
          minValue={0.5}
          maxValue={0.8}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={PercentFormatter}
        />
      </FormControl>
    </Form>
  );
};

export const CustomStep = (): React.ReactNode => {
  const [value, setValue] = React.useState<number>(25);
  const id = useUID();

  return (
    <>
      <Form>
        <FormControl>
          <Label htmlFor={id}>Player count</Label>
          <Slider
            id={id}
            value={value}
            step={25}
            onChange={(newValue) => setValue(newValue)}
            numberFormatter={NumberFormatter}
          />
        </FormControl>
      </Form>
      <Box marginTop="space70">
        <Paragraph>You selected: {NumberFormatter.format(value)}</Paragraph>
      </Box>
    </>
  );
};

export const HiddenRangeLabels = (): React.ReactNode => {
  const [value, setValue] = React.useState<number>(32);
  const id = useUID();

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Scale</Label>
        <Slider
          id={id}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={NumberFormatter}
          hideRangeLabels
        />
      </FormControl>
    </Form>
  );
};

export const CustomizedSlider = (): React.ReactNode => {
  const activeTheme = useTheme();
  const [value, setValue] = React.useState<number>(32);
  const id = useUID();

  return (
    <CustomizationProvider
      theme={activeTheme}
      elements={{
        // SLIDER
        SLOODER: {borderWidth: 'borderWidth10', borderRadius: 'borderRadius20', padding: 'space20'},
        // TRACK
        SLOODER_TRACK_CONTAINER: {
          height: '32px',
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorder',
        },
        SLOODER_TRACK: {height: '8px'},
        SLOODER_TRACK_BACKGROUND: {backgroundColor: 'colorBackgroundStrongest'},
        SLOODER_TRACK_FILL: {backgroundColor: 'colorBackgroundSuccess'},
        // THUMB
        SLOODER_THUMB: {
          width: '32px',
          height: '32px',
          borderRadius: 'borderRadius0',
          backgroundColor: 'colorBackgroundStrongest',
        },
        // RANGE LABELS
        SLOODER_RANGE_LABELS: {color: 'colorTextSuccess', fontSize: 'fontSize50', fontWeight: 'fontWeightBold'},
        SLOODER_RANGE_LABELS_MIN: {fontSize: 'fontSize70', fontWeight: 'fontWeightBold'},
        SLOODER_RANGE_LABELS_MAX: {fontSize: 'fontSize80', fontWeight: 'fontWeightBold'},
      }}
    >
      <Form>
        <FormControl>
          <Label htmlFor={id}>Player count</Label>
          <Slider
            element="SLOODER"
            id={id}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            numberFormatter={NumberFormatter}
          />
        </FormControl>
      </Form>
    </CustomizationProvider>
  );
};
