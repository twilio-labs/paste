export const VisualPickerRadioVertical = `
const VisualPickerExample = () => {
    const [value, setValue] = React.useState('')
    return (
        <VisualPickerRadioGroup
          name={useUID()}
          id={useUID()} 
          legend={
            <Text as="span" color="currentColor">
              This is a Visual Picker Radio Group label with a{' '}
              <Anchor href="http://paste.twilio.com">
                link
              </Anchor>
            </Text>
          }
          onChange={(newValue) => {
            setValue(newValue);
          }}
          helpText="Help text should go here."
          value={value}
        >
          <VisualPickerRadio id={useUID()} value='1' labelText="one">
            One
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='2' labelText="two">
            Two
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='3' labelText="three">
            Three
          </VisualPickerRadio>
        </VisualPickerRadioGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerRadioHorizontal = `
const VisualPickerExample = () => {
    const [value, setValue] = React.useState('')
    return (
        <VisualPickerRadioGroup
          orientation="horizontal"
          name={useUID()}
          id={useUID()} 
          legend={
            <Text as="span" color="currentColor">
              This is a Visual Picker Radio Group label with a{' '}
              <Anchor href="http://paste.twilio.com">
                link
              </Anchor>
            </Text>
          }
          onChange={(newValue) => {
            setValue(newValue);
          }}
          helpText="Help text should go here."
          value={value}
        >
          <VisualPickerRadio id={useUID()} value='1' labelText="one">
            One
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='2' labelText="two">
            Two
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='3' labelText="three">
            Three
          </VisualPickerRadio>
        </VisualPickerRadioGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerCheckboxVertical = `
const VisualPickerExample = () => {
    const [checked1, setChecked1] = React.useState(false)
    const [checked2, setChecked2] = React.useState(false)
    const [checked3, setChecked3] = React.useState(false)
    const handleChange1 = (event) => setChecked1(event.target.checked)
    const handleChange2 = (event) => setChecked2(event.target.checked)
    const handleChange3 = (event) => setChecked3(event.target.checked)
    return (
        <VisualPickerCheckboxGroup
            name={useUID()}
            id={useUID()} 
            legend={
              <Text as="span" color="currentColor">
                This is a Visual Picker Radio Group label with a{' '}
                <Anchor href="http://paste.twilio.com">
                link
                </Anchor>
              </Text>
            }
            helpText="Help text should go here."
        >
            <VisualPickerCheckbox id={useUID()} labelText="one" checked={checked1} onChange={handleChange1}>
            One
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="two" checked={checked2} onChange={handleChange2}>
            Two
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="three" checked={checked3} onChange={handleChange3}>
            Three
            </VisualPickerCheckbox>
        </VisualPickerCheckboxGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerCheckboxHorizontal = `
const VisualPickerExample = () => {
    const [checked1, setChecked1] = React.useState(false)
    const [checked2, setChecked2] = React.useState(false)
    const [checked3, setChecked3] = React.useState(false)
    const handleChange1 = (event) => setChecked1(event.target.checked)
    const handleChange2 = (event) => setChecked2(event.target.checked)
    const handleChange3 = (event) => setChecked3(event.target.checked)
    return (
        <VisualPickerCheckboxGroup
            orientation="horizontal"
            name={useUID()}
            id={useUID()} 
            legend={
              <Text as="span" color="currentColor">
                This is a Visual Picker Radio Group label with a{' '}
                <Anchor href="http://paste.twilio.com">
                link
                </Anchor>
              </Text>
            }
            helpText="Help text should go here."
        >
            <VisualPickerCheckbox id={useUID()} labelText="one" checked={checked1} onChange={handleChange1}>
            One
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="two" checked={checked2} onChange={handleChange2}>
            Two
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="three" checked={checked3} onChange={handleChange3}>
            Three
            </VisualPickerCheckbox>
        </VisualPickerCheckboxGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerCheckboxI18n = `
const VisualPickerExample = () => {
    const [checked1, setChecked1] = React.useState(false)
    const [checked2, setChecked2] = React.useState(false)
    const [checked3, setChecked3] = React.useState(false)
    const handleChange1 = (event) => setChecked1(event.target.checked)
    const handleChange2 = (event) => setChecked2(event.target.checked)
    const handleChange3 = (event) => setChecked3(event.target.checked)
    return (
        <VisualPickerCheckboxGroup
            name={useUID()}
            id={useUID()} 
            legend={
              <Text as="span" color="currentColor">
                Días de la semana
              </Text>
            }
            i18nRequiredLabel="(requirido)"
            required
        >
            <VisualPickerCheckbox id={useUID()} labelText="lunes" checked={checked1} onChange={handleChange1}>
              Lunes
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="martes" checked={checked2} onChange={handleChange2}>
              Martes
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="miércoles" checked={checked3} onChange={handleChange3}>
              Miércoles
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="jueves" checked={checked3} onChange={handleChange3}>
              Jueves
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="viernes" checked={checked3} onChange={handleChange3}>
              Viernes
            </VisualPickerCheckbox>
        </VisualPickerCheckboxGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerRadioChecked = `
const VisualPickerExample = () => {
    const [value, setValue] = React.useState('1')
    return (
        <VisualPickerRadioGroup
          name={useUID()}
          id={useUID()} 
          legend={
            <Text as="span" color="currentColor">
              This is a Visual Picker Radio Group label with a{' '}
              <Anchor href="http://paste.twilio.com">
                link
              </Anchor>
            </Text>
          }
          onChange={(newValue) => {
            setValue(newValue);
          }}
          helpText="Help text should go here."
          value={value}
        >
          <VisualPickerRadio id={useUID()} value='1' labelText="one">
            One
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='2' labelText="two">
            Two
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='3' labelText="three">
            Three
          </VisualPickerRadio>
        </VisualPickerRadioGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerCheckboxDisabled = `
const VisualPickerExample = () => {
    const [checked1, setChecked1] = React.useState(true)
    const [checked2, setChecked2] = React.useState(false)
    const [checked3, setChecked3] = React.useState(true)
    const handleChange1 = (event) => setChecked1(event.target.checked)
    const handleChange2 = (event) => setChecked2(event.target.checked)
    const handleChange3 = (event) => setChecked3(event.target.checked)
    return (
        <VisualPickerCheckboxGroup
            disabled
            name={useUID()}
            id={useUID()} 
            legend={
              <Text as="span" color="currentColor">
                This is a Visual Picker Radio Group label with a{' '}
                <Anchor href="http://paste.twilio.com">
                link
                </Anchor>
              </Text>
            }
            helpText="Help text should go here."
        >
            <VisualPickerCheckbox id={useUID()} labelText="one" checked={checked1} onChange={handleChange1}>
            One
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="two" checked={checked2} onChange={handleChange2}>
            Two
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="three" checked={checked3} onChange={handleChange3}>
            Three
            </VisualPickerCheckbox>
        </VisualPickerCheckboxGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerRadioIndividualError = `
const VisualPickerExample = () => {
    const [value, setValue] = React.useState('2')
    return (
        <VisualPickerRadioGroup
          name={useUID()}
          id={useUID()} 
          legend={
            <Text as="span" color="currentColor">
              This is a Visual Picker Radio Group label with a{' '}
              <Anchor href="http://paste.twilio.com">
                link
              </Anchor>
            </Text>
          }
          onChange={(newValue) => {
            setValue(newValue);
          }}
          helpText="Help text should go here."
          value={value}
        >
          <VisualPickerRadio id={useUID()} value='1' labelText="one">
            One
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='2' labelText="two" hasError>
            Two
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='3' labelText="three">
            Three
          </VisualPickerRadio>
        </VisualPickerRadioGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();

export const VisualPickerCheckboxGroupError = `
const VisualPickerExample = () => {
    const [checked1, setChecked1] = React.useState(false)
    const [checked2, setChecked2] = React.useState(false)
    const [checked3, setChecked3] = React.useState(false)
    const handleChange1 = (event) => setChecked1(event.target.checked)
    const handleChange2 = (event) => setChecked2(event.target.checked)
    const handleChange3 = (event) => setChecked3(event.target.checked)
    return (
        <VisualPickerCheckboxGroup
            name={useUID()}
            id={useUID()} 
            legend={
              <Text as="span" color="currentColor">
                This is a Visual Picker Radio Group label with a{' '}
                <Anchor href="http://paste.twilio.com">
                link
                </Anchor>
              </Text>
            }
            helpText="Help text should go here."
            errorText="There is an error."
        >
            <VisualPickerCheckbox id={useUID()} labelText="one" checked={checked1} onChange={handleChange1}>
            One
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="two" checked={checked2} onChange={handleChange2}>
            Two
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="three" checked={checked3} onChange={handleChange3}>
            Three
            </VisualPickerCheckbox>
        </VisualPickerCheckboxGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();
