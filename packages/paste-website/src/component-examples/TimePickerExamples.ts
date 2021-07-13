export const RequiredTimePicker = `
const RequiredTimePicker = (props) => {
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
render(<RequiredTimePicker/>)
`.trim();

export const TimeRangePicker = `
const TimeRangePicker = (props) => {
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
        <TimePicker id={endUidTP} {...props} />
      </Box>
    </Stack>
  );
};
render(<TimeRangePicker/>)

`.trim();

export const OnChangePicker = `
const OnChangePicker = (props) => {
  const [value, setValue] = React.useState('');
  const [timeFormat, setTimeFormat] = React.useState('HH:mm');
  const uidTP = useUID();
  const uidHT = useUID();
  const timeFormatOptions = ['hh:mm aa', 'hh:mm a', 'HH:mm'];
  const handleChange = (val, format) => {
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
render(<OnChangePicker/>)
`.trim();

export const HasErrorPicker = `
const HasErrorPicker = (props) => {
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
render(<HasErrorPicker/>)
`.trim();

export const DisabledPicker = `
const DisabledPicker = (props) => {
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
render(<DisabledPicker/>)
`.trim();

export const ReadOnlyPicker = `
const ReadOnlyPicker = (props) => {
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
render(<ReadOnlyPicker/>)
`.trim();

export const LabelOnlyPicker = `
const LabelOnlyPicker = (props) => {
  const uidTP = useUID();
  return (
    <>
      <Label htmlFor={uidTP}>What time is it locally?</Label>
      <TimePicker id={uidTP} {...props} />
    </>
  );
};
render(<LabelOnlyPicker/>)
`.trim();

export const StackOfPickers = `
const StackOfPickers = (props) => {
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
render(<StackOfPickers/>)
`.trim();
