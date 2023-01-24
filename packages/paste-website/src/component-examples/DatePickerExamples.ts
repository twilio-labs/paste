export const RequiredDatePicker = `
const RequiredDatePicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} required>
        When was the abolition of slavery announced in Galveston Bay, Texas (also known as Juneteenth)?
      </Label>
      <DatePicker required id={uidDP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>
        Enter a date above.
        <Anchor href="https://nmaahc.si.edu/blog-post/historical-legacy-juneteenth" showExternal>
          Read more about Juneteenth
        </Anchor>
      </HelpText>
    </>
  );
};
render(<RequiredDatePicker />)
`.trim();

export const DateRangePicker = `
const DateRangePicker = (props) => {
  const [startDate, setStartDate] = React.useState('');
  const startUidDP = useUID();
  const endUidDP = useUID();
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box>
      <Label htmlFor={startUidDP}>Start date</Label>
      <DatePicker id={startUidDP} onChange={(evt) => setStartDate(evt.target.value)} {...props} />
      </Box>
      <Box>
      <Label htmlFor={endUidDP}>End date</Label>
      <DatePicker id={endUidDP} min={startDate} {...props} />
      </Box>
    </Stack>
  );
}
render(<DateRangePicker />)`.trim();

export const OnChangePicker = `
const OnChangePicker = (props) => {
  const [value, setValue] = React.useState('');
  const [dateFormat, setDateFormat] = React.useState('MM dd yy');
  const uidDP = useUID();
  const uidHT = useUID();
  const dateFormatOptions = ['MM dd yyyy', 'MMMM do yyyy', 'EEEEEE MMM do yy', 'MM/dd/yyyy'];
  const handleChange = (val, format) => {
    setValue(formatReturnDate(val, format));
    return value;
  };
  return (
    <>
      <Box marginBottom="space60">
        <Combobox
          items={dateFormatOptions}
          labelText="Return date format:"
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) setDateFormat(inputValue);
          }}
        />
      </Box>
      <Label htmlFor={uidDP}>On what day was Apartheid legislation repealed in South Africa?</Label>
      <DatePicker
        id={uidDP}
        aria-describedby={uidHT}
        onChange={(evt) => handleChange(evt.target.value, dateFormat)}
        {...props}
      />
      <HelpText id={uidHT}>
        Enter a date above.
        <Anchor href="https://www.sahistory.org.za/article/history-apartheid-south-africa" showExternal>
          Read more about Apartheid in South Africa
        </Anchor>
      </HelpText>
      <Box marginTop="space60">
        <b>Return value </b>(will only change when the onChange event fires): {value}
      </Box>
    </>
  );
}
render(<OnChangePicker />)
`.trim();

export const HasErrorPicker = `
const HasErrorPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When did the Jallianwala Bagh massacre take place?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} hasError {...props} />
      <HelpText id={uidHT} variant="error">
        Enter a date above.
        <Anchor
          href="https://www.hindustantimes.com/india-news/jallianwala-bagh-massacre-here-is-how-the-deadly-incident-transpired-102-years-ago-101618276752335.html"
          showExternal
        >
          Read more about the Jallianwala Bagh massacre
        </Anchor>
      </HelpText>
    </>
  );
}
render(<HasErrorPicker />)
`.trim();

export const DisabledPicker = `
const DisabledPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} disabled>
        When did the Supreme Court ban anti-miscegenation laws (in Loving v. Virginia)?
      </Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} disabled defaultValue="1967-06-12" {...props} />
      <HelpText id={uidHT}>
        <Anchor href="https://www.oyez.org/cases/1966/395" showExternal>
          Read more about Loving Day
        </Anchor>
      </HelpText>
    </>
  );
}
render(<DisabledPicker />)`.trim();

export const ReadOnlyPicker = `
const ReadOnlyPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>In what month was the Combahee River Collective (CRC) Statement published?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} readOnly defaultValue="1977-04-01" {...props} />
      <HelpText id={uidHT}>
        {' '}
        <Anchor href="https://combaheerivercollective.weebly.com/" showExternal>
          Read more about the CRC
        </Anchor>{' '}
      </HelpText>
    </>
  );
}
render(<ReadOnlyPicker />)
`.trim();

export const LabelOnlyPicker = `
const LabelOnlyPicker = (props) => {
  const uidDP = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When does this year&apos;s LGBTQ+ Pride month begin in the US?</Label>
      <DatePicker id={uidDP} {...props} />
    </>
  );
}
render(<LabelOnlyPicker />)
`.trim();

export const StackOfPickers = `
const StackOfPickers = (props) => {
  const uidDPOne = useUID();
  const uidHTOne = useUID();
  const uidDPTwo = useUID();
  const uidHTTwo = useUID();
  return (
    <Stack orientation="vertical" spacing="space80">
      <Box>
        <Label htmlFor={uidDPOne}>When was the NAACP Legal Defense Fund (LDF) founded?</Label>
        <DatePicker id={uidDPOne} aria-describedby={uidHTOne} {...props} />
        <HelpText id={uidHTOne}>
          Enter a date above.
          <Anchor href="https://www.naacpldf.org/about-us/history/" showExternal>
            Read more about the NAACP LDF
          </Anchor>
        </HelpText>
      </Box>
      <Box>
        <Label htmlFor={uidDPTwo}>
          When did Thurgood Marshall become the first African American Supreme Court Justice?
        </Label>
        <DatePicker id={uidDPTwo} aria-describedby={uidHTTwo} {...props} />
        <HelpText id={uidHTTwo}>
          Enter a date above.
          <Anchor
            href="https://constitutioncenter.org/blog/thurgood-marshalls-unique-supreme-court-legacy"
            showExternal
          >
            Read more about Marshall&apos;s legacy
          </Anchor>
        </HelpText>
      </Box>
    </Stack>
  );
}
render(<StackOfPickers/>)
`.trim();

export const MinAndMaxPicker = `
const MinAndMaxPicker = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When was Grace Hopper awarded the Presidential Medal of Freedom?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} min="2016-10-15" max="2016-10-25" {...props} />
      <HelpText id={uidHT}>
        Hint: it was awarded posthumously by President Obama.
        <Anchor
          href="https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service"
          showExternal
        >
          Read more about Grace Hopper
        </Anchor>
      </HelpText>
    </>
  );
}
render(<MinAndMaxPicker />)
`.trim();

export const DateTimeRangePicker = `
const DateTimeRangePicker = (props) => {
  const [selectedItem, setSelectedItem] = React.useState('')
  const uidStartDP = useUID();
  return selectedItem === "Custom" ? (
    <>
      <Box margin="space60">
        <Label htmlFor="uidStartDP">Date range</Label>
      </Box>
      <Stack orientation="horizontal" spacing="space80">
        <Box marginLeft="space60">
          <DatePicker id="uidStartDP" aria-describedby="start-date" />
          <HelpText id="start-date">Start date</HelpText>
        </Box>
        <Box>
          <TimePicker aria-describedby="start-time" />
          <HelpText id="start-time">Start time</HelpText>
        </Box>
      </Stack>
      <Stack orientation="horizontal" spacing="space80">
        <Box marginLeft="space60" marginTop="space60">
          <DatePicker aria-describedby="end-date" />
          <HelpText id="end-date">End date</HelpText>
        </Box>
        <Box marginTop="space60">
          <TimePicker aria-describedby="end-time" />
          <HelpText id="end-time">End time</HelpText>
        </Box>
      </Stack>
    </>
    ) : (
      <Box margin="space60">
        <Combobox
          insertAfter={<CalendarIcon color="colorTextIcon" decorative />}
          items={["Last 7 days", "Last 30 days", "Last 6 months", "Custom"]}
          labelText="Date range"
          onSelectedItemChange={(changes) => {
            setSelectedItem(changes.selectedItem)
          }}
        />
      </Box>
    )
  }

render(<DateTimeRangePicker />)
`.trim();
