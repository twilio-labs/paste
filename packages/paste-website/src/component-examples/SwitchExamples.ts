export const basicSwitch = `
const SwitchExample = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text">
      <Switch />
    </SwitchContainer>
  )
}
render(
  <SwitchExample />
)
`.trim();

export const helpTextSwitch = `
const SwitchExample = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" helpText="This is help text">
      <Switch />
    </SwitchContainer>
  )
}
render(
  <SwitchExample />
)
`.trim();

export const requiredSwitch = `
const SwitchExample = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" required>
      <Switch />
    </SwitchContainer>
  )
}
render(
  <SwitchExample />
)
`.trim();

export const onSwitch = `
const SwitchExample = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text">
      <Switch on />
    </SwitchContainer>
  )
}
render(
  <SwitchExample />
)
`.trim();

export const disabledSwitch = `
const SwitchExample = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" disabled>
      <Switch />
    </SwitchContainer>
  )
}
render(
  <SwitchExample />
)
`.trim();

export const disabledOnSwitch = `
const SwitchExample = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="This is label text" disabled>
      <Switch on />
    </SwitchContainer>
  )
}
render(
  <SwitchExample />
)
`.trim();
