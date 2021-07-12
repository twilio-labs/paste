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

export const TimeRangePicker = ``.trim();

export const OnChangePicker = ``.trim();

export const HasErrorPicker = ``.trim();

export const DisabledPicker = ``.trim();

export const ReadOnlyPicker = ``.trim();

export const LabelOnlyPicker = ``.trim();

export const StackOfPickers = ``.trim();
