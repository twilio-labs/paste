import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {Box} from '@twilio-paste/box';
import {Combobox} from '@twilio-paste/combobox';
import {Stack} from '@twilio-paste/stack';
import {TimePicker, formatReturnTime} from '../src';

export const DefaultTimePicker: React.FC = (props) => {
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

export const InverseTimePicker: React.FC = (props) => {
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

export const RequiredTimePicker: React.FC = (props) => {
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

export const InverseRequiredTimePicker: React.FC = (props) => {
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

export const ErrorTimePicker: React.FC = (props) => {
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

export const InverseErrorTimePicker: React.FC = (props) => {
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

export const DisabledTimePicker: React.FC = (props) => {
  const uidTP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidTP} disabled>
        Set a curfew for your child
      </Label>
      <TimePicker id={uidTP} aria-describedby={uidHT} disabled {...props} />
      <HelpText id={uidHT}>Choose a time</HelpText>
    </>
  );
};

export const InverseDisabledTimePicker: React.FC = (props) => {
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

export const ReadonlyTimePicker: React.FC = (props) => {
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

export const InverseReadonlyTimePicker: React.FC = (props) => {
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

export const DefaultValueTimePicker: React.FC = (props) => {
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

export const OnChangeTimePicker: React.FC = (props) => {
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
          onInputValueChange={({inputValue}) => {
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

export const LabelOnlyPicker: React.FC = (props) => {
  const uidTP = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>What time is it locally?</Label>
      <TimePicker id={uidTP} {...props} />
    </>
  );
};

export const TimeRangePicker: React.FC = (props) => {
  const [startTime, setStartTime] = React.useState('');
  const startUidTP = useUID();
  const endUidTP = useUID();
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box>
        <Label htmlFor={startUidTP}>Start time</Label>
        <TimePicker id={startUidTP} onChange={(evt) => setStartTime(evt.target.value)} {...props} />
      </Box>
      <Box>
        <Label htmlFor={endUidTP}>End time</Label>
        <TimePicker id={endUidTP} min={startTime} {...props} />
      </Box>
    </Stack>
  );
};

export const StackOfPickers: React.FC = (props) => {
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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Time Picker',
  component: TimePicker,
};
