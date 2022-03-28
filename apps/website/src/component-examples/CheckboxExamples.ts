export const checkedCheckbox = `
const CheckboxChecked = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      checked={checked}
      id="blm"
      value="blm"
      name="blm"
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      Black lives matter
    </Checkbox>
  );
};

render(
  <CheckboxChecked />
)
`.trim();

export const uncontrolledCheckbox = `
const UncontrolledCheckbox = () => {
  return (
    <Checkbox
      id="uncontrolled"
      value="uncontrolled"
      name="uncontrolled"
      defaultChecked
    >
      I am an uncontrolled checkbox
    </Checkbox>
  );
};

render(
  <UncontrolledCheckbox />
)
`.trim();

export const controlledCheckbox = `
const ControlledCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      id="controlled"
      value="controlled"
      name="controlled"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    >
      I am a controlled checkbox
    </Checkbox>
  );
};

render(
  <ControlledCheckbox />
)
`.trim();

export const indeterminateExample = `
const Results = () => {
  const [checkedItems, setCheckedItems] = React.useState([true, false]);

  const allChecked = checkedItems.every(Boolean);
  const indeterminate = checkedItems.some(Boolean) && !allChecked;

  const checkboxRef = React.createRef();

  return (
    <CheckboxGroup isSelectAll name="results" legend="Include in Results">
      <Checkbox
        id="select_all"
        checked={allChecked}
        indeterminate={indeterminate}
        ref={checkboxRef}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Select all
      </Checkbox>
      <Checkbox
        id="identity"
        checked={checkedItems[0]}
        onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
      >
        Identity Carrier
      </Checkbox>
      <Checkbox
        id="caller_name"
        checked={checkedItems[1]}
        onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
      >
        Caller Name
      </Checkbox>
    </CheckboxGroup>
  );
};

render(
  <Results />
)
`.trim();
