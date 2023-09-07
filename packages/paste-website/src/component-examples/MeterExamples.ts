export const defaultMeter = `
const DefaultMeterExample = () => {
  const meterId = useUID()
  const helpTextId = useUID()
  return (
    <Box maxWidth="size30">
      <MeterLabel htmlFor={meterId} valueLabel="89%">Emails delivered</MeterLabel>
      <Meter value={89} id={meterId} />
      <HelpText id={helpTextId}>Showing successful deliveries of June email campaign.</HelpText>
    </Box>
  );
};

render(
  <DefaultMeterExample />
)
`.trim();

export const minMaxMeter = `
const DefaultMeterExample = () => {
  const meterId = useUID()
  const helpTextId = useUID()
  return (
    <Box maxWidth="size60">
      <MeterLabel htmlFor={meterId} valueLabel="$4,500.00">Account balance paid</MeterLabel>
      <Meter minValue={2000} value={4500} maxValue={50000} minLabel="$2,000.00" maxLabel="$50,000.00" id={meterId}/>
      <HelpText id={helpTextId}>Remaining balance must be paid by the end of the billing period. </HelpText>
    </Box>
  );
};

render(
  <DefaultMeterExample />
)
`.trim();
