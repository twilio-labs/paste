export const basicToggle = `
const ToggleExample = () => {
  const id = useUID()
  return (
    <Toggle id={id} >
      Label
    </Toggle>
  )
};

render(
  <ToggleExample />
)
`.trim();

export const helpTextToggle = `
const ToggleExample = () => {
  const id = useUID()
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>}>
      Label
    </Toggle>
  )
};

render(
  <ToggleExample />
)
`.trim();

export const requiredToggle = `
const ToggleExample = () => {
  const id = useUID()
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} required>
      Label
    </Toggle>
  )
};

render(
  <ToggleExample />
)
`.trim();

export const onToggle = `
const ToggleExample = () => {
  const id = useUID()
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} on>
      Label
    </Toggle>
  )
};

render(
  <ToggleExample />
)
`.trim();

export const disabledToggle = `
const ToggleExample = () => {
  const id = useUID()
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} disabled>
      Label
    </Toggle>
  )
};

render(
  <ToggleExample />
)
`.trim();

export const disabledOnToggle = `
const ToggleExample = () => {
  const id = useUID()
  return (
    <Toggle id={id} helpText={<>Info that helps a user with this field.</>} disabled on>
      Label
    </Toggle>
  )
};

render(
  <ToggleExample />
)
`.trim();
