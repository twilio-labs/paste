export const TextExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo" legend="Choose a day" helpText="The message will be sent on the day you choose">
      <RadioButton value="m">Mon</RadioButton>
      <RadioButton value="t" defaultChecked>Tues</RadioButton>
      <RadioButton value="w">Wed</RadioButton>
      <RadioButton value="th">Thu</RadioButton>
      <RadioButton value="f">Fri</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const TextAndIconExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo" legend="Choose a product" helpText="The product you choose will be used for your new role">
      <RadioButton value="phone"><CallIcon decorative={false} title="phone icon"/>Phone</RadioButton>
      <RadioButton value="text"><SMSCapableIcon decorative={false} title="text icon"/>Text</RadioButton>
      <RadioButton value="email"><EmailIcon decorative={false} title="email icon"/>Email</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const ErrorExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup
      attached
      name="foo"
      legend="What is your preferred programming language?"
      errorText="Select a programming language."
      helpText="Select the language with which you are most familiar."
    >
      <RadioButton value="js" hasError>JavaScript</RadioButton>
      <RadioButton value="py" hasError>Python</RadioButton>
      <RadioButton value="c" hasError>C++</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();

export const DisabledExample = `const RadioButtonGroupExample = () => {
  return (
    <RadioButtonGroup attached name="foo" legend="Choose a letter" helpText="Don't get it wrong!">
      <RadioButton value="a">A</RadioButton>
      <RadioButton value="b">B</RadioButton>
      <RadioButton value="c" disabled>C</RadioButton>
    </RadioButtonGroup>
  )
}

render(<RadioButtonGroupExample />)`.trim();
