export const basicToggle = `
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
