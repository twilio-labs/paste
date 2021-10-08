export const defaultExample = `
const BasicFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Your favorite sports:">
        <FormPill {...pillState}>
          <CalendarIcon decorative size="sizeIcon10" />
          Tennis
        </FormPill>
        <FormPill {...pillState}>
          Baseball
        </FormPill>
        <FormPill {...pillState}>Football</FormPill>
        <FormPill {...pillState}>
          Soccer
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <BasicFormPillGroup />
)
`.trim();

export const selectableExample = `
const SelectableFormPillGroup = () => {
  const [pills] = React.useState(['Tennis', 'Baseball', 'Football', 'Soccer']);
  const [selectedSet, updateSelectedSet] = React.useState(new Set(['Football']));
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Your favorite sports:">
        {pills.map((pill) => (
          <FormPill
            key={pill}
            {...pillState}
            selected={selectedSet.has(pill)}
            onSelect={() => {
              const newSelectedSet = new Set(selectedSet);
              if (newSelectedSet.has(pill)) {
                newSelectedSet.delete(pill);
              } else {
                newSelectedSet.add(pill);
              }
              updateSelectedSet(newSelectedSet);
            }}
          >
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

render(
  <SelectableFormPillGroup />
)
`.trim();

export const removableExample = `
const RemovableFormPillGroup = () => {
  const [pills, setPills] = React.useState(['Tennis', 'Baseball', 'Football', 'Soccer']);
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Your favorite sports:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            {...pillState}
            onDismiss={() => {
              setPills(pills.filter((_, i) => i !== index));
            }}
          >
            {pill}
          </FormPill>
        ))}
        {pills.length === 0 ? <Text as="p">No sports remaining</Text> : null}
      </FormPillGroup>
    </form>
  );
};

render(
  <RemovableFormPillGroup />
)
`.trim();
