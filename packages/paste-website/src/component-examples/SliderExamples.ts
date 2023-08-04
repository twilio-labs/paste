export const defaultSlider = `
const DefaultSliderExample = () => {
  const [value, setValue] = React.useState(0.75);
  const id = useUID();

  const PercentFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Volume</Label>
        <Slider
          id={id}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={PercentFormatter}
        />
        <HelpText>
          I saw an ad yesterday that said “Radio for sale $1, volume is stuck on full blast”.
          I said to myself “well, I can’t turn that down.”
        </HelpText>
      </FormControl>
    </Form>
  );
};

render(
  <DefaultSliderExample />
)
`.trim();

export const disabledSlider = `
const DisabledSliderExample = () => {
  const [value, setValue] = React.useState(0.75);
  const id = useUID();

  const PercentFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Volume</Label>
        <Slider
          disabled
          id={id}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={PercentFormatter}
        />
        <HelpText>
          I saw an ad yesterday that said “Radio for sale $1, volume is stuck on full blast”.
          I said to myself “well, I can’t turn that down.”
        </HelpText>
      </FormControl>
    </Form>
  );
};

render(
  <DisabledSliderExample />
)
`.trim();

export const errorSlider = `
const ErrorSliderExample = () => {
  const [value, setValue] = React.useState(20);
  const id = useUID();

  const NumberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US');
  }, []);

  const hasError = value > 10;

  return (
    <Form>
      <FormControl>
        <Label required htmlFor={id}>How many radios to purchase?</Label>
        <Slider
          hasError={hasError}
          id={id}
          value={value}
          minValue={0}
          maxValue={100}
          step={1}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={NumberFormatter}
        />
        <HelpText variant={hasError ? "error" : "default"}>
          {hasError ? "Too many radios! You can only buy 10 radios." : "The number of radios you've selected for purchase."}
        </HelpText>
      </FormControl>
    </Form>
  );
};

render(
  <ErrorSliderExample />
)
`.trim();

export const customRangeSlider = `
const CustomRangeSliderExample = () => {
  const [value, setValue] = React.useState(0.55);
  const id = useUID();

  const PercentFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

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

render(
  <CustomRangeSliderExample />
)
`.trim();

export const customStepSlider = `
const CustomStepSliderExample = () => {
  const [value, setValue] = React.useState(32);
  const id = useUID();

  const NumberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US');
  }, []);

  return (
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
  );
};

render(
  <CustomStepSliderExample />
)
`.trim();

export const hiddenRangeLabelsSlider = `
const HiddenRangeLabelsSlider = () => {
  const [value, setValue] = React.useState(32);
  const id = useUID();

  const NumberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US');
  }, []);

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

render(
  <HiddenRangeLabelsSlider />
)
`.trim();
