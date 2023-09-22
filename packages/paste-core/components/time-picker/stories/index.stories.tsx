import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { useUID, useUIDSeed } from '@twilio-paste/uid-library';
import { Label } from '@twilio-paste/label';
import { HelpText } from '@twilio-paste/help-text';
import { Box } from '@twilio-paste/box';
import { Combobox } from '@twilio-paste/combobox';
import { Stack } from '@twilio-paste/stack';
import { useTheme } from '@twilio-paste/theme';
import { CustomizationProvider } from '@twilio-paste/customization';

import { TimePicker, formatReturnTime } from '../src';
import type { TimePickerProps } from '../src';

export const DefaultTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>What time is your appointment?</Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>Select a time above.</HelpText>
    </>
  );
};

export const InverseTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidTP} variant="inverse">
        What time is your appointment?
      </Label>
      <TimePicker variant="inverse" aria-describedby={uidHT} id={uidTP} {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Select a time above.
      </HelpText>
    </Box>
  );
};

export const RequiredTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP} required>
        What time is your workday over?
      </Label>
      <TimePicker required id={uidTP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>Select a time.</HelpText>
    </>
  );
};

export const InverseRequiredTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidTP} variant="inverse" required>
        What time is your workday over?
      </Label>
      <TimePicker variant="inverse" id={uidTP} aria-describedby={uidHT} required {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Pick a time
      </HelpText>
    </Box>
  );
};

export const ErrorTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>When does your workday start?</Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} hasError {...props} />
      <HelpText id={uidHT} variant="error">
        Select a time.
      </HelpText>
    </>
  );
};

export const InverseErrorTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidTP} variant="inverse">
        When does your workday start?
      </Label>
      <TimePicker variant="inverse" aria-describedby={uidHT} id={uidTP} hasError {...props} />
      <HelpText variant="error_inverse" id={uidHT}>
        Choose a time.
      </HelpText>
    </Box>
  );
};

export const DisabledTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP} disabled>
        Set a curfew for your child
      </Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} disabled {...props} />
      <HelpText id={uidHT}>Choose a time.</HelpText>
    </>
  );
};

export const InverseDisabledTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidTP} variant="inverse" disabled>
        Set a curfew for your child
      </Label>
      <TimePicker variant="inverse" aria-describedby={uidHT} disabled id={uidTP} {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Choose a time above.
      </HelpText>
    </Box>
  );
};

export const ReadonlyTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>What&apos;s your favorite time of day?</Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} readOnly value="13:00" {...props} />
      <HelpText id={uidHT}>Choose a time.</HelpText>
    </>
  );
};

export const InverseReadonlyTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidTP} variant="inverse">
        What&apos;s your favorite time of day?
      </Label>
      <TimePicker variant="inverse" aria-describedby={uidHT} readOnly id={uidTP} value="13:00" {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Select a time above.
      </HelpText>
    </Box>
  );
};

export const DefaultValueTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>When should we reach out to you for an update?</Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} defaultValue="12:47" {...props} />
      <HelpText id={uidHT}>Change the time above if necessary.</HelpText>
    </>
  );
};

export const OnChangeTimePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const [value, setValue] = React.useState('');
  const [timeFormat, setTimeFormat] = React.useState('HH:mm');
  const uidTP = useUID();
  const uidHT = useUID();
  const timeFormatOptions = ['hh:mm aa', 'hh:mm aaaa', 'HH:mm'];
  const handleChange = (val: string, format: string): string => {
    setValue(formatReturnTime(val, format));
    return value;
  };
  return (
    <>
      <Box marginBottom="space60">
        <Combobox
          items={timeFormatOptions}
          labelText="Return time format:"
          onInputValueChange={({ inputValue }) => {
            if (inputValue !== undefined) setTimeFormat(inputValue);
          }}
        />
      </Box>
      <Label htmlFor={uidTP}>What time were you born?</Label>
      <TimePicker
        id={uidTP}
        aria-describedby={uidHT}
        onChange={(evt) => {
          handleChange(evt.target.value, timeFormat);
        }}
        {...props}
      />
      <HelpText id={uidHT}>Select a time above.</HelpText>
      <Box marginTop="space60">
        {' '}
        <b>Return value:</b> {value}{' '}
      </Box>
    </>
  );
};

export const LabelOnlyPicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTP = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>What time is it locally?</Label>
      <TimePicker id={uidTP} {...props} />
    </>
  );
};

export const TimeRangePicker: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const startUidTP = useUID();
  const endUidTP = useUID();
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box>
        <Label htmlFor={startUidTP}>Start time</Label>
        <TimePicker id={startUidTP} {...props} />
      </Box>
      <Box>
        <Label htmlFor={endUidTP}>End time</Label>
        <TimePicker id={endUidTP} {...props} />
      </Box>
    </Stack>
  );
};

export const StackOfPickers: React.FC<React.PropsWithChildren<TimePickerProps>> = (props) => {
  const uidTPOne = useUID();
  const uidHTOne = useUID();
  const uidTPTwo = useUID();
  const uidHTTwo = useUID();
  return (
    <Stack orientation="vertical" spacing="space80">
      <Box>
        <Label htmlFor={uidTPOne}>What time is it now?</Label>
        <TimePicker id={uidTPOne} aria-describedby={uidHTOne} {...props} />
        <HelpText id={uidHTOne}>Select a time above.</HelpText>
      </Box>
      <Box>
        <Label htmlFor={uidTPTwo}>What time was it 5 minutes ago?</Label>
        <TimePicker id={uidTPTwo} aria-describedby={uidHTTwo} {...props} />
        <HelpText id={uidHTTwo}>Select a time above.</HelpText>
      </Box>
    </Stack>
  );
};

export const CustomizedTimePicker: StoryFn = (_args, { parameters: { isTestEnvironment }, props }) => {
  const activeTheme = useTheme();
  const uidSeed = useUIDSeed();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={activeTheme}
      elements={{
        TIMEPICKER: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth10',
          borderColor: 'colorBorderPrimary',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
              borderColor: 'colorBorderDestructive',
            },
          },
        },
        TIMEPICKER_ELEMENT: {
          color: 'colorTextLinkStronger',
          padding: 'space50',
          '::placeholder': {
            color: 'colorTextLink',
          },
          variants: {
            default: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
            },
          },
        },
        CUSTOM_TIME: {
          backgroundColor: 'colorBackgroundDestructiveWeakest',
          borderRadius: 'borderRadius30',
          boxShadow: 'none',
          borderStyle: 'solid',
          borderWidth: 'borderWidth20',
          borderColor: 'colorBorderDestructive',
          variants: {
            default: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderColor: 'colorBorderPrimary',
            },
          },
        },
        CUSTOM_TIME_ELEMENT: {
          color: 'colorTextLinkDestructive',
          padding: 'space70',
          '::placeholder': {
            color: 'colorTextLinkDestructive',
          },
          variants: {
            default: {
              backgroundColor: 'colorBackgroundDestructiveWeakest',
            },
            inverse: {
              backgroundColor: 'colorBackgroundPrimaryWeakest',
              borderRadius: 'borderRadius30',
            },
          },
        },
      }}
    >
      <Stack orientation="vertical" spacing="space40">
        <div>
          <Label htmlFor={uidSeed('appointment')}>What time is your appointment?</Label>
          <TimePicker id={uidSeed('appointment')} {...props} />
        </div>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space80">
          <Label variant="inverse" htmlFor={uidSeed('appointment2')}>
            What time is your appointment?
          </Label>
          <TimePicker variant="inverse" id={uidSeed('appointment2')} {...props} />
        </Box>
        <div>
          <Label htmlFor={uidSeed('appointment3')}>What time is your appointment?</Label>
          <TimePicker element="CUSTOM_TIME" id={uidSeed('appointment3')} {...props} />
        </div>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space80">
          <Label variant="inverse" htmlFor={uidSeed('appointment4')}>
            What time is your appointment?
          </Label>
          <TimePicker variant="inverse" element="CUSTOM_TIME" id={uidSeed('appointment4')} {...props} />
        </Box>
      </Stack>
    </CustomizationProvider>
  );
};
CustomizedTimePicker.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Time Picker',
  component: TimePicker,
};
