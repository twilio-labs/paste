export const BasicExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo">
      <RadioButton value="1">One</RadioButton>
      <RadioButton value="2" defaultChecked>Two</RadioButton>
      <RadioButton value="3">Three</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const TextExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo">
      <RadioButton value="m">Mon</RadioButton>
      <RadioButton value="t" defaultChecked>Tues</RadioButton>
      <RadioButton value="w">Wed</RadioButton>
      <RadioButton value="th">Thu</RadioButton>
      <RadioButton value="f">Fri</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const IconExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo">
      <Tooltip text="Bar chart"><RadioButton value="bar chart"><DataBarChartIcon decorative={false} title="data bar chart icon"/></RadioButton></Tooltip>
      <Tooltip text="Line chart"><RadioButton value="line chart"><DataLineChartIcon decorative={false} title="data line chart icon"/></RadioButton></Tooltip>
      <Tooltip text="Pie chart"><RadioButton value="pie chart"><DataPieChartIcon decorative={false} title="data pie chart icon"/></RadioButton></Tooltip>
      <Tooltip text="Table"><RadioButton value="table"><DataTableIcon decorative={false} title="data table icon"/></RadioButton></Tooltip>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const TextAndIconExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo">
      <RadioButton value="phone"><CallIcon decorative={false} title="phone icon"/>Phone</RadioButton>
      <RadioButton value="text"><SMSCapableIcon decorative={false} title="text icon"/>Text</RadioButton>
      <RadioButton value="email"><EmailIcon decorative={false} title="email icon"/>Email</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const ErrorExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo" legend="What is your preferred programming language?" errorText="Choose a programming language">
      <RadioButton value="js" hasError>JavaScript</RadioButton>
      <RadioButton value="py" hasError>Python</RadioButton>
      <RadioButton value="c" hasError>C++</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const DisabledExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo">
      <RadioButton value="a" hasError>A</RadioButton>
      <RadioButton value="b" hasError>B</RadioButton>
      <RadioButton value="c" hasError disabled>C</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();
