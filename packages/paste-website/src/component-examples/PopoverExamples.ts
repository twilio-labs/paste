export const defaultExample = `
const PopoverExample = () => {
  return (
    <PopoverContainer baseId="popover-example">
      <PopoverButton variant="primary">✊ Action</PopoverButton>
      <Popover aria-label="Popover">
        <Heading as="h3" variant="heading30">Heads up!</Heading>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Text as="span">
          Black Lives Matter. We stand with the Black community
        </Text>
        <Separator orientation="horizontal" verticalSpacing="space50" />
        <Button onClick={() => {}} variant="primary">Agree</Button>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverExample />
)
`.trim();

export const interactiveContent = `
const PopoverExample = () => {
  const saveButtonRef = React.createRef();

  return (
    <PopoverContainer baseId="popover-interactive-example">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Update API key permissions" initialFocusRef={saveButtonRef}>
        <Heading as="h3" variant="heading30">Update API key permissions</Heading>
        <Paragraph>
          It is really important to update your permissions.
        </Paragraph>
        <CheckboxGroup name="permissions" legend="API key permissions">
          <Checkbox id="full_access" value="full_access">
            Full access
          </Checkbox>
          <Checkbox id="restricted_access" value="restricted_access">
            Restricted access
          </Checkbox>
        </CheckboxGroup>
        <Box marginTop='space70'>
          <ButtonGroup>
            <Button onClick={() => {}} variant="primary" ref={saveButtonRef}>Save</Button>
            <Button onClick={() => {}} variant="secondary">Cancel</Button>
          </ButtonGroup>
        </Box>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverExample />
)`.trim();

export const initialFocus = `
const countryList = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '44'},
  {code: 'BS', label: 'Bahamas', phone: '43'},
  {code: 'BH', label: 'Bahrain', phone: '48'},
  {code: 'BD', label: 'Bangladesh', phone: '50'},
  {code: 'BB', label: 'Barbados', phone: '52'},
  {code: 'BY', label: 'Belarus', phone: '112'},
  {code: 'BE', label: 'Belgium', phone: '56'},
  {code: 'BZ', label: 'Belize', phone: '84'},
  {code: 'BJ', label: 'Benin', phone: '204'},
  {code: 'BM', label: 'Bermuda', phone: '60'},
  {code: 'BT', label: 'Bhutan', phone: '64'},
  {code: 'BO', label: 'Bolivia', phone: '68'},
  {code: 'BW', label: 'Botswana', phone: '72'},
  {code: 'BR', label: 'Brazil', phone: '76'},
  {code: 'KH', label: 'Cambodia', phone: '116'},
  {code: 'CA', label: 'Canada', phone: '124'},
];

const PopoverExample = () => {
  const phoneInputRef = React.createRef();
  const seed = useUIDSeed();

  return (
    <PopoverContainer baseId="popover-interactive-example">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover
        aria-label="Edit phone number"
        initialFocusRef={phoneInputRef}
        width='size40'
      >
        <Form aria-labelledby={seed('phone-heading')}>
          <Heading
            as="h3"
            variant="heading40"
            id={seed('phone-heading')}
            marginBottom='space0'
          >
            Edit phone number
          </Heading>
          <FormControl>
            <Label htmlFor={seed('phone-input')}>Phone number</Label>
            <Input type='text' id={seed('phone-input')} ref={phoneInputRef} />
          </FormControl>
          <FormControl>
            <Label htmlFor={seed('country-input')}>Country</Label>
            <Select id={seed('country-input')}>
              {
                countryList.map(({code, label}) => (
                  <Option value={code}>{label}</Option>
                ))
              }
            </Select>
          </FormControl>
          <FormActions>
            <Button onClick={() => {}} variant="primary">Save</Button>
            <Button onClick={() => {}} variant="secondary">Cancel</Button>
          </FormActions>
        </Form>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <PopoverExample />
)`.trim();

export const postionExample = `
const PopoverPositionExample = () => {
  return (
    <Box display='flex' columnGap='space40'>
      <PopoverContainer baseId="popover-top-example" placement="top-start">
        <PopoverButton variant="primary">Open top</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-right-example" placement="right-start">
        <PopoverButton variant="primary">Open right</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-bottom-example" placement="bottom-start">
        <PopoverButton variant="primary">Open bottom</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-left-example" placement="left-start">
        <PopoverButton variant="primary">Open left</PopoverButton>
        <Popover aria-label="Popover" width={['size20', 'size40']}>
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverPositionExample />
)
`.trim();

export const StateHookPopoverExample = `
const StateHookExample = () => {
  const popover = usePopoverState({baseId: 'test-id'});
  return (
    <Box display='flex' columnGap='space40'>
      <PopoverContainer state={popover}>
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
      <Button variant="primary" onClick={() => popover.show()}>
        Open popover on click
      </Button>
      <Button variant="primary" onClick={() => popover.hide()}>
        Close popover on click
      </Button>
    </Box>
  );
};

render(
  <StateHookExample />
)
`.trim();

export const buttonVariantsExample = `
const PopoverBadgeExample = () => {
  return (
    <Box display="flex" columnGap="space40">
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary" size="small">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="secondary_icon" size="icon_small">
          <PlusIcon decorative={false}  title="Open popover" />
        </PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="reset" size="reset">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverBadgeExample />
)
`.trim();

export const badgeExample = `
const PopoverBadgeExample = () => {
  return (
    <Box display="flex" columnGap="space40">
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="decorative10">Open popover</PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="neutral">
          <>
            <InformationIcon decorative={false} title="Information" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="warning">
          <>
            <WarningIcon decorative={false} title="Warning" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverBadgeButton variant="new">
          <>
            <NewIcon decorative={false} title="New" />
            Open popover
          </>
        </PopoverBadgeButton>
        <Popover aria-label="Popover">
          <Text as="span">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverBadgeExample />
)
`.trim();

export const setWidthExample = `
const countryList = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '44'},
  {code: 'BS', label: 'Bahamas', phone: '43'},
  {code: 'BH', label: 'Bahrain', phone: '48'},
  {code: 'BD', label: 'Bangladesh', phone: '50'},
  {code: 'BB', label: 'Barbados', phone: '52'},
  {code: 'BY', label: 'Belarus', phone: '112'},
  {code: 'BE', label: 'Belgium', phone: '56'},
  {code: 'BZ', label: 'Belize', phone: '84'},
  {code: 'BJ', label: 'Benin', phone: '204'},
  {code: 'BM', label: 'Bermuda', phone: '60'},
  {code: 'BT', label: 'Bhutan', phone: '64'},
  {code: 'BO', label: 'Bolivia', phone: '68'},
  {code: 'BW', label: 'Botswana', phone: '72'},
  {code: 'BR', label: 'Brazil', phone: '76'},
  {code: 'KH', label: 'Cambodia', phone: '116'},
  {code: 'CA', label: 'Canada', phone: '124'},
];

const PopoverExample = () => {
  const seed = useUIDSeed();
  return (
    <Box display='flex' columnGap='space40'>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary">Auto width popover</PopoverButton>
        <Popover aria-label="Edit phone number">
          <Form aria-labelledby={seed('phone-heading-0')}>
            <Heading
              as="h3"
              variant="heading40"
              id={seed('phone-heading-0')}
              marginBottom='space0'
            >
              Edit phone number
            </Heading>
            <FormControl>
              <Label htmlFor={seed('phone-input-0')}>Phone number</Label>
              <Input type='text' id={seed('phone-input-0')} />
            </FormControl>
            <FormControl>
              <Label htmlFor={seed('country-input-0')}>Country</Label>
              <Select id={seed('country-input-0')}>
                {
                  countryList.map(({code, label}) => (
                    <Option value={code}>{label}</Option>
                  ))
                }
              </Select>
            </FormControl>
            <FormActions>
              <Button onClick={() => {}} variant="primary">Save</Button>
              <Button onClick={() => {}} variant="secondary">Cancel</Button>
            </FormActions>
          </Form>
        </Popover>
      </PopoverContainer>
      <PopoverContainer baseId="popover-example">
        <PopoverButton variant="primary">size40 popover</PopoverButton>
        <Popover aria-label="Edit phone number" width="size40">
          <Form aria-labelledby={seed('phone-heading-1')}>
            <Heading
              as="h3"
              variant="heading40"
              id={seed('phone-heading-1')}
              marginBottom='space0'
            >
              Edit phone number
            </Heading>
            <FormControl>
              <Label htmlFor={seed('phone-input-1')}>Phone number</Label>
              <Input type='text' id={seed('phone-input-1')} />
            </FormControl>
            <FormControl>
              <Label htmlFor={seed('country-input-1')}>Country</Label>
              <Select id={seed('country-input-1')}>
                {
                  countryList.map(({code, label}) => (
                    <Option value={code}>{label}</Option>
                  ))
                }
              </Select>
            </FormControl>
            <FormActions>
              <Button onClick={() => {}} variant="primary">Save</Button>
              <Button onClick={() => {}} variant="secondary">Cancel</Button>
            </FormActions>
          </Form>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <PopoverExample />
)
`.trim();

export const i18nExample = `
const I18nExample = () => {
  return (
    <PopoverContainer baseId="popover-example">
      <PopoverButton variant="primary">Abrir popover</PopoverButton>
      <Popover aria-label="Popover" i18nDismissLabel="Cerrar popover">
        <Text as="span">
          "Vivir en las fronteras y en los márgenes, mantener intacta la identidad múltiple y la integridad, es
          como tratar de nadar en un nuevo elemento, un elemento 'extranjero'" — Gloria E. Anzaldúa
        </Text>
      </Popover>
    </PopoverContainer>
  );
};

render(
  <I18nExample />
)
`.trim();

export const popoverFormPillExample = `
const PopoverFormPillExample = () => {
  const uniqueBaseID = useUID();
  const pillState = useFormPillState();
  const [selected, setSelected] = useState(true);

  return (
    <FormPillGroup {...pillState} aria-label="filter-group">
      <PopoverContainer baseId={uniqueBaseID}>
        <PopoverFormPillButton
          {...pillState}
          selected={selected}
          onDismiss={() => {}}
        >
          Open popover
        </PopoverFormPillButton>
        <Popover aria-label="Popover" data-testid="form-pill-popover">
          <Box margin="space60">
            <Button
              variant="primary"
              size="small"
              onClick={() => {
                setSelected(!selected);
              }}
            >
              Select Form Pill
            </Button>
          </Box>
        </Popover>
      </PopoverContainer>
    </FormPillGroup>
  );
};

render(
  <PopoverFormPillExample />
)
`.trim();
