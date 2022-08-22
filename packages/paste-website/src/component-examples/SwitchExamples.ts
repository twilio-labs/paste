export const basicSwitch = `
const SwitchExample = () => {
  const id = useUID()
  return (
    <SwitchContainer id={id} label="Enable notifications">
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
    <SwitchContainer id={id} label="Enroll in Privacy Program" helpText={<Anchor href="#" showExternal>Read more about the program</Anchor>}>
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
    <SwitchContainer id={id} label="Opt into newsletter updates" required>
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
    <SwitchContainer id={id} label="Enable SMS notifications">
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
    <SwitchContainer id={id} label="Enable email notifications" disabled>
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
    <SwitchContainer id={id} label="Enroll in paperless notifications" disabled>
      <Switch on />
    </SwitchContainer>
  )
}
render(
  <SwitchExample />
)
`.trim();
