export const defaultSlider = `
const DefaultSliderExample = () => {
  const [value, setValue] = React.useState(0.75);
  const id = useUID();

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US');
  }, []);

  return (
    <Form>
      <FormControl>
        <Label htmlFor={id}>Brightness</Label>
        <Slider
          id={id}
          numberFormatter={numberFormatter}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
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
  const [value, setValue] = React.useState(0.5);
  const id = useUID();

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

  return (
    <Form>
      <FormControl>
        <Label disabled htmlFor={id}>Volume</Label>
        <Slider
          disabled
          id={id}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={numberFormatter}
        />
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
  const [value, setValue] = React.useState(0.2);
  const id = useUID();
  const helpTextId = useUID();

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US', { style: 'percent' });
  }, []);

  const hasError = value < 0.3;

  return (
    <Form>
      <FormControl>
        <Label required htmlFor={id}>Delivery alerts</Label>
        <Slider
          hasError={hasError}
          id={id}
          aria-describedby={helpTextId}
          value={value}
          minValue={0}
          maxValue={1}
          step={0.01}
          onChange={(newValue) => setValue(newValue)}
          numberFormatter={numberFormatter}
        />
        <HelpText id={helpTextId} variant={hasError ? "error" : "default"}>
          The delivery rate's threshold must be greater than 30%.
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
        <Label htmlFor={id}>Partition size</Label>
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
