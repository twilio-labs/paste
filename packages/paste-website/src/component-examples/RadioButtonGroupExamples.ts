export const BasicExample = `const RadioButtonGroup = () => {
  return (
    <RadioButtonGroup attached>
      <RadioButton value="1">One</RadioButton>
      <RadioButton value="2">Two</RadioButton>
      <RadioButton value="3">Three</RadioButton>
    </ RadioButtonGroup>
  )
}

render(<RadioButtonGroup />)`.trim();

export const TextExample = `const RadioButtonGroup = () => {
  return (
    <RadioButtonGroup attached>
      <RadioButton value="m">Mon</RadioButton>
      <RadioButton value="t" defaultChecked>Tues</RadioButton>
      <RadioButton value="w">Wed</RadioButton>
      <RadioButton value="th">Thu</RadioButton>
      <RadioButton value="f">Fri</RadioButton>
    </ RadioButtonGroup>
  )
}

render(<RadioButtonGroup />)`.trim();

export const IconExample = `const RadioButtonGroup = () => {
  return (
    <RadioButtonGroup attached>
      <Tooltip text="Bar chart"><RadioButton value="bar chart"><DataBarChartIcon decorative={false} title="data bar chart icon"/></RadioButton></Tooltip>
      <Tooltip text="Line chart"><RadioButton value="line chart"><DataLineChartIcon decorative={false} title="data line chart icon"/></RadioButton></Tooltip>
      <Tooltip text="Pie chart"><RadioButton value="pie chart"><DataPieChartIcon decorative={false} title="data pie chart icon"/></RadioButton></Tooltip>
      <Tooltip text="Table"><RadioButton value="table"><DataTableIcon decorative={false} title="data table icon"/></RadioButton></Tooltip>
    </ RadioButtonGroup>
  )
}

render(<RadioButtonGroup />)`.trim();

export const TextAndIconExample = `const RadioButtonGroup = () => {
  return (
    <RadioButtonGroup attached>
      <RadioButton value="phone"><CallIcon decorative={false} title="phone icon"/>Phone</RadioButton>
      <RadioButton value="text"><SMSCapableIcon decorative={false} title="text icon"/>Text</RadioButton>
      <RadioButton value="email"><EmailIcon decorative={false} title="email icon"/>Email</RadioButton>
    </ RadioButtonGroup>
  )
}

render(<RadioButtonGroup />)`.trim();

export const ErrorExample = `const RadioButtonGroup = () => {
  return (
    <RadioButtonGroup attached legend="What is your preferred programming language?" errorText="Choose a programming language">
      <RadioButton value="js" hasError>JavaScript</RadioButton>
      <RadioButton value="py" hasError>Python</RadioButton>
      <RadioButton value="c" hasError>C++</RadioButton>
    </ RadioButtonGroup>
  )
}

render(<RadioButtonGroup />)`.trim();

export const DisabledExample = `const RadioButtonGroup = () => {
  return (
    <RadioButtonGroup attached>
      <RadioButton value="a" hasError>A</RadioButton>
      <RadioButton value="b" hasError>B</RadioButton>
      <RadioButton value="c" hasError disabled>C</RadioButton>
    </ RadioButtonGroup>
  )
}

render(<RadioButtonGroup />)`.trim();
