export const basicSwitch = `
const basicSwitch = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text">
      <Switch />
    </SwitchContainer>
  )
}
`.trim();

export const helpTextSwitch = `
const helpTextSwitch = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" helpText="This is help text">
      <Switch />
    </SwitchContainer>
  )
}
`.trim();

export const requiredSwitch = `
const requiredSwitch = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" required>
      <Switch />
    </SwitchContainer>
  )
}
`.trim();

export const onSwitch = `
const onSwitch = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text">
      <Switch on />
    </SwitchContainer>
  )
}
`.trim();

export const disabledSwitch = `
const disabledSwitch = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" disabled>
      <Switch />
    </SwitchContainer>
  )
}
`.trim();

export const disabledOnSwitch = `
const disabledOnSwitch = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" disabled>
      <Switch on />
    </SwitchContainer>
  )
}
`.trim();
