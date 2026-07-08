"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4047],{28627:(e,t,r)=>{r.r(t),r.d(t,{SearchIcon:()=>i});var a=r(36669),o=r(55729),n=r(96316);let i=o.forwardRef(({as:e,display:t,element:r="ICON",size:i,color:l,title:s,decorative:d},m)=>{let c=`SearchIcon-${(0,a.GV)()}`;if(!d&&null==s)throw Error("[SearchIcon]: Missing a title for non-decorative icon.");return o.createElement(n.IconWrapper,{as:e,display:t,element:r,size:i,color:l,ref:m},o.createElement("svg",{role:"img","aria-hidden":d,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},s?o.createElement("title",{id:c},s):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.43 5.43a4.882 4.882 0 017.383 6.347l2.973 2.973a.732.732 0 01-1.036 1.036l-2.973-2.973A4.883 4.883 0 015.43 5.43zm1.035 1.035a3.417 3.417 0 104.833 4.833 3.417 3.417 0 00-4.833-4.833z"})))});i.displayName="SearchIcon"},41621:(e,t,r)=>{r.d(t,{Sw:()=>d,sx:()=>m,z6:()=>c});var a=r(79559),o=r(76127),n=r(36669),i=r(55729),l=r(22275),s=i.createContext({name:"",value:"",disabled:!1,hasError:!1,onChange:()=>{}}),d=i.forwardRef((e,t)=>i.createElement(o.az,{as:"input",type:"radio",size:"size0",border:"none",overflow:"hidden",padding:"space0",margin:"space0",whiteSpace:"nowrap",textTransform:"none",position:"absolute",clip:"rect(0 0 0 0)",ref:t,...e}));d.displayName="HiddenRadio";var m=i.forwardRef(({id:e,name:t,element:r="RADIO",value:l,checked:m,defaultChecked:c,disabled:u,hasError:p,onChange:h,children:g,helpText:C,...x},F)=>{if(null!=m&&null!=c)throw Error("[Paste Radio] Do not provide both 'defaultChecked' and 'checked' to Radio at the same time. Please consider if you want this component to be controlled or uncontrolled.");let[v,y]=i.useState(c),b=i.useContext(s),f=(0,n.GV)(),S=e||(0,n.GV)(),B=i.useMemo(()=>void 0!==m||""!==b.value,[]),E=i.useCallback(e=>{h?h(e):b.onChange(e),B||y(e.target.checked)},[h,b,B]),I={name:t??b.name,disabled:u??b.disabled,hasError:p??b.hasError};B?""!==b.value?I.checked=b.value===l:I.checked=m:I.defaultChecked=c;let D=B?I.checked||I.defaultChecked:v;return i.createElement(o.az,{element:r,position:"relative",display:"inline-flex",alignItems:"flex-start",flexDirection:"column",verticalAlign:"top"},i.createElement(d,{...x,...I,value:l,"aria-describedby":f,"aria-invalid":I.hasError,onChange:E,id:S,ref:F}),i.createElement(a.g$,{disabled:I.disabled,htmlFor:S},i.createElement(a.BJ,{element:`${r}_CONTROL`,borderRadius:"borderRadiusCircle",disabled:I.disabled,type:"radio",_checkedAndDisabledSibling:{color:"colorTextWeaker"}},i.createElement(o.az,{as:"span",element:`${r}_CONTROL_CIRCLE`,lineHeight:"lineHeight0",display:D?"block":"none",color:"inherit",size:"sizeIcon10"},i.createElement("svg",{role:"img","aria-hidden":!0,width:"100%",height:"100%",viewBox:"0 0 16 16",fill:"none"},i.createElement("circle",{fill:"currentColor",cx:8,cy:8,r:3})))),i.createElement(a.pX,{element:`${r}_LABEL_TEXT`,fontWeight:"fontWeightMedium"},g)),C&&i.createElement(a._v,{element:`${r}_HELP_TEXT_WRAPPER`,helpTextId:f},C))});m.displayName="Radio";var c=i.forwardRef(({name:e,element:t="RADIO_GROUP",value:r,onChange:a,disabled:o=!1,errorText:n,children:d,i18nRequiredLabel:m="(required)",...c},u)=>{let p=i.useCallback(e=>{a?.(e.target.value)},[a]),h=i.useMemo(()=>({name:e,value:r||"",disabled:o,hasError:null!=n,onChange:p}),[e,r,o,n,p]);return i.createElement(s.Provider,{value:h},i.createElement(l.a,{element:t,...c,disabled:o,errorText:n,name:e,ref:u,i18nRequiredLabel:m},d))});c.displayName="RadioGroup"},68310:(e,t,r)=>{r.d(t,{$2:()=>c,HK:()=>C,OU:()=>l,P2:()=>i,RI:()=>m,Yk:()=>h,_M:()=>u,aA:()=>p,nr:()=>a,pE:()=>o,qe:()=>g,rS:()=>n,rn:()=>s,xY:()=>d});let a=`
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('address-heading')}>
      <Heading
        as="h3"
        variant="heading30"
        id={seed('address-heading')}
        marginBottom='space0'
      >
        Create new address
      </Heading>
      <FormControl>
        <Label htmlFor={seed('address-type')}>Address type</Label>
        <Select id={seed('address-type')} name="address-type">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor={seed('friendly-name')}>Friendly name</Label>
        <Input
          type="text"
          id={seed('friendly-name')}
          name="friendly-name"
          placeholder="Add friendly name"
        />
      </FormControl>
      <FormControl>
        <RadioGroup
          legend="Address implementation"
          name="address-implementation"
        >
          <Radio
            value="conversations"
            helpText="Supports both inbound and outbound SMS and attachments."
          >
            Conversations
          </Radio>
          <Radio
            value="legacy"
            helpText="Supports inbound SMS."
          >
            Legacy
          </Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim(),o=`
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('date-time-heading')}>
      <Heading as="h3" variant="heading30" id={seed('date-time-heading')} marginBottom='space0'>
        Custom date/time range
      </Heading>
      <Paragraph marginBottom="space0">
        All dates/times in UTC. Usage data available up to 7 days.
      </Paragraph>
      <FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('start-date')}>
            Start date
          </Label>
          <DatePicker id={seed('start-date')}/>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('end-date')}>
            End date
          </Label>
          <DatePicker id={seed('end-date')}/>
        </FormControl>
      </FormControlTwoColumn>
      <FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('start-time')}>
            Start time
          </Label>
          <TimePicker id={seed('start-time')}/>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('end-time')}>
            End time
          </Label>
          <TimePicker id={seed('end-time')}/>
        </FormControl>
      </FormControlTwoColumn>
      <FormActions>
        <Button variant="primary">Apply</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim(),n=`
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('access-profile-heading')}>
      <Heading
        as="h3"
        variant="heading30"
        id={seed('access-profile-heading')}
        marginBottom='space0'
      >
        Choose Network Access Profile
      </Heading>
      <Paragraph marginBottom="space0">
        Network Access Profile specifies what networks your SIM's would connect to and how you will be billed.
      </Paragraph>
      <FormControl>
        <CheckboxGroup
          legend="Select number type"
          name="number-type"
          orientation="horizontal"
        >
          <Checkbox checked value="local">Local</Checkbox>
          <Checkbox value="mobile">Mobile</Checkbox>
          <Checkbox value="toll-free">Toll-free</Checkbox>
        </CheckboxGroup>
      </FormControl>
      <FormControl>
        <RadioGroup
          legend="Select payment method"
          name="payment-method"
          orientation="horizontal"
        >
          <Radio value="cc">Credit card</Radio>
          <Radio value="pp">PayPal</Radio>
          <Radio value="dd">Direct deposit</Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim(),i=`
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('alarm-heading')}>
      <Heading
        as="h3"
        variant="heading30"
        id={seed('alarm-heading')}
        marginBottom='space0'
      >
        Create alarm
      </Heading>
      <Paragraph marginBottom="space0">
        Use alarms to get alerted to important events happening with your account.
      </Paragraph>
      <FormSection>
        <FormSectionHeading>
          Step 1
        </FormSectionHeading>
        <FormSectionDescription>
          Name your alarm and select the error code you’d like to set an alarm. Use the historical trend graph for reference.
        </FormSectionDescription>
        <FormControl>
          <Label htmlFor={seed('alarm-name')}>Alarm name</Label>
          <Input
            type="text"
            id={seed('alarm-name')}
            aria-describedby={seed('alarm-help-text')}
          />
          <HelpText id={seed('alarm-help-text')}>
            Consider a recognizable name related to its use case.
          </HelpText>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('error-code')}>Select error code</Label>
          <Input
            id={seed('error-code')}
            type="text"
            value="11200 - HTTP retrieval failure"
            insertAfter={
              <SearchIcon color="colorTextIcon" decorative/>
            }
          />
        </FormControl>
      </FormSection>
      <Separator orientation="horizontal"/>
      <FormSection>
        <FormSectionHeading>
          Step 2
        </FormSectionHeading>
        <FormSectionDescription>
          Determine when the alarm should be activated.
        </FormSectionDescription>
        <FormControl>
          <Label htmlFor={seed('num-errors')}>
            Number of errors
          </Label>
          <Input
            type="text"
            id={seed('num-errors')}
            value="20"
          />
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('time-period')}>
            Time period
          </Label>
          <Select id={seed('time-period')}>
            <Option value="minute">Every minute</Option>
            <Option value="hour">Every hour</Option>
            <Option value="day">Every day</Option>
          </Select>
        </FormControl>
      </FormSection>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim(),l=`
const FormActionsExample = () => {
  return (
    <FormActions>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
    </FormActions>
  );
}

render(
  <FormActionsExample />
)
`.trim(),s=`
const statesList = [
  {value: 'AK', name: 'Alaska'},
  {value: 'AL', name: 'Alabama'},
  {value: 'AZ', name: 'Arizona'},
  {value: 'CA', name: 'California'},
  {value: 'CO', name: 'Colorado'},
  {value: 'CT', name: 'Connecticut'},
  {value: 'ID', name: 'Idaho'},
  {value: 'IL', name: 'Illinois'},
  {value: 'IN', name: 'Indiana'},
  {value: 'KS', name: 'Kansas'},
  {value: 'KY', name: 'Kentucky'},
  {value: 'LA', name: 'Louisiana'},
  {value: 'MN', name: 'Minnesota'},
  {value: 'MO', name: 'Missouri'},
  {value: 'MS', name: 'Mississippi'},
  {value: 'MT', name: 'Montana'},
];

const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('settings-heading')}>
      <Heading
        id={seed('settings-heading')}
        variant="heading30"
        marginBottom="space0"
      >
        Settings
      </Heading>
      <Callout variant="error">
        <CalloutHeading as="h4">
          These fields are missing values:
        </CalloutHeading>
        <CalloutList as="ul">
          <CalloutListItem>Street address</CalloutListItem>
          <CalloutListItem>Zip code</CalloutListItem>
          <CalloutListItem>Email address</CalloutListItem>
        </CalloutList>
      </Callout>
      <FormControl>
        <Label htmlFor={seed('street-address')} required>
          Street address
        </Label>
        <Input
          id={seed('street-address')}
          type="text"
          hasError
          required
          aria-describedby={seed('street-address-error')}
        />
        <HelpText variant="error" id={seed('street-address-error')}>
          Enter a street address.
        </HelpText>
      </FormControl>
      <FormControlTwoColumn>
        <FormControl>
          <Label htmlFor={seed('state')}>State</Label>
          <Select id={seed('state')}>
            {statesList.map(({value, name}) => (
              <Option value={value} key={value}>
                {name}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Label htmlFor={seed('zip')} required>
            Zip code
          </Label>
          <Input id={seed('zip')} aria-describedby={seed('zip-error')} type="text" hasError required />
          <HelpText variant="error" id={seed('zip-error')}>
            Enter a zip code.
          </HelpText>
        </FormControl>
      </FormControlTwoColumn>
      <FormControl>
        <Label htmlFor={seed('email')} required>
          Email address
        </Label>
        <Input
          id={seed('email')}
          aria-describedby={seed('email-error')}
          type="email"
          hasError
          required
          value="email@xyz.yxz"
        />
        <HelpText variant="error" id={seed('email-error')}>
          Enter an email address.
        </HelpText>
      </FormControl>
      <FormActions>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim(),d=`
const FormExample = () => {
  const seed = useUIDSeed();
  return (
    <Form aria-labelledby={seed('address-heading')} maxWidth="size30">
      <Heading
        as="h3"
        variant="heading30"
        id={seed('address-heading')}
        marginBottom='space0'
      >
        Create new address
      </Heading>
      <FormControl>
        <Label htmlFor={seed('address-type')}>Address type</Label>
        <Select id={seed('address-type')} name="address-type">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor={seed('friendly-name')}>Friendly name</Label>
        <Input
          type="text"
          id={seed('friendly-name')}
          name="friendly-name"
          placeholder="Add friendly name"
        />
      </FormControl>
      <FormControl>
        <RadioGroup
          legend="Address implementation"
          name="address-implementation"
        >
          <Radio
            value="conversations"
            helpText="Supports both inbound and outbound SMS and attachments."
          >
            Conversations
          </Radio>
          <Radio
            value="legacy"
            helpText="Supports inbound SMS."
          >
            Legacy
          </Radio>
        </RadioGroup>
      </FormControl>
      <FormActions>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
      </FormActions>
    </Form>
  );
}

render(
  <FormExample />
)
`.trim(),m=`
const FormExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const modalHeadingID = useUID();
  const name = useUID();
  const email = useUID();
  const phone = useUID();
  const birthday = useUID();
  return (
    <Box>
      <Button variant="primary" onClick={handleOpen}>
        Add new contact
      </Button>
      <Modal ariaLabelledby={modalHeadingID} isOpen={isOpen} onDismiss={handleClose} size="default">
        <ModalHeader>
          <ModalHeading as="h3" id={modalHeadingID}>
            Add new contact
          </ModalHeading>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormControl>
              <Box>
                <Label htmlFor={name}>Full name</Label>
                <Input name="name" id={name} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={email}>Email address</Label>
                <Input name="name" id={email} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={phone}>Phone number</Label>
                <Input name="name" id={phone} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={birthday}>Birthday</Label>
                <DatePicker name="name" id={birthday} />
              </Box>
            </FormControl>
          </Form>
        </ModalBody>
        <ModalFooter>
          <ModalFooterActions>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </ModalFooterActions>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

render(
  <FormExample />
)`.trim(),c=`
const FormExample = () => {
  const popoverID = useUID();
  const phone = useUID();
  const country = useUID();
  return (
    <Box>
      <PopoverContainer baseId={popoverID}>
        <PopoverButton variant="primary">Edit phone number</PopoverButton>
        <Popover aria-label="Popover" width="size40">
          <Form>
            <Heading as="h2" variant="heading40">
              Edit phone number
            </Heading>
            <FormControl>
              <Box>
                <Label htmlFor={phone}>Phone number</Label>
                <Input name="phone" id={phone} type="text" />
              </Box>
            </FormControl>
            <FormControl>
              <Box>
                <Label htmlFor={country}>Country</Label>
                <Select id={country} name="country">
                  <Option value="in">India</Option>
                  <Option value="us">United States</Option>
                  <Option value="mx">Mexico</Option>
                  <Option value="ca">Canada</Option>
                  <Option value="br">Brazil</Option>
                  <Option value="ar">Argentina</Option>
                </Select>
              </Box>
            </FormControl>
          </Form>
          <Box marginTop="space130">
            <ButtonGroup>
              <Button onClick={() => {}} variant="primary">
                Save
              </Button>
              <Button onClick={() => {}} variant="secondary">
                Cancel
              </Button>
            </ButtonGroup>
          </Box>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

render(
  <FormExample />
)`.trim(),u=`
const FormExample = () => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const tax = useUID();
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="712px">
        <Heading as="h1" variant="heading10">
          Tax information
        </Heading>
        <Paragraph marginBottom="space0">
          Based on your jurisdiction, Twilio may need to collect tax on the services sold, in order to abide by local
          laws. Please provide your tax number so that we can apply this correctly to your invoice
        </Paragraph>
        <Box marginTop="space130">
          <RadioGroup
            name="uncontrolled-radio-group"
            legend="Can you provide a business tax number?"
            value={selectedValue}
            onChange={setSelectedValue}
          >
            <Radio id={useUID()} value="yes" name="uncontrolled-radio-group">
              Yes, I can provide a tax number
            </Radio>
            {selectedValue === "yes" ? (
              <Box paddingLeft="space70">
                <Label htmlFor={tax}>Tax Number</Label>
                <Input name="tax" id={tax} type="text" />
              </Box>
            ) : null}
            <Radio id={useUID()} value="no" name="uncontrolled-radio-group">
              No, I cannot provide a tax number
            </Radio>
          </RadioGroup>
        </Box>
        <Box marginTop="space130" display="flex" justifyContent="space-between" columnGap="space40" alignItems="center">
          <Button variant="secondary">
            <ArrowBackIcon decorative />
            Back
          </Button>
          <Button variant="primary" disabled={selectedValue === undefined}>
            Next <ArrowForwardIcon decorative />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

render(
  <FormExample />
)`.trim(),p=`
const FormExample = () => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  const password = useUID();
  const isFourCharacter = selectedValue?.length >= 4;
  const hasNumber = /d/.test(selectedValue || "");
  const hasUppercase = /[A-Z]/.test(selectedValue || "");
  return (
    <Box maxWidth="size30">
      <Box>
        <Label htmlFor={password}>Password</Label>
        <Input
          name="password"
          id={password}
          type="password"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        />
      </Box>
      <HelpText variant={isFourCharacter ? "success" : "default"}>Atleast 4 character</HelpText>
      <HelpText variant={hasNumber ? "success" : "default"}>Atleast 1 number</HelpText>
      <HelpText variant={hasUppercase ? "success" : "default"}>Atleast 1 uppercase</HelpText>
    </Box>
  );
};

render(
  <FormExample />
)`.trim(),h=`
type FormValues = {
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};
const InputWithError = React.memo(
  ({
    id,
    label,
    registerName,
    registerOptions,
    insertAfter,
    errors,
    register,
  }: {
    id: string;
    label: string;
    registerName: keyof FormValues;
    registerOptions: any;
    insertAfter?: React.ReactNode;
    errors: Record<string, any>;
    register: UseFormRegister<FormValues>;
  }) => {
    return (
      <Box>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          type="text"
          {...register(registerName, registerOptions)}
          insertAfter={insertAfter ? insertAfter : undefined}
          hasError={!!errors[registerName]}
        />
        <ErrorMessage
          errors={errors}
          name={registerName}
          render={({ message }) => (
            <HelpText variant="error" id={id}>
              {message}
            </HelpText>
          )}
        />
      </Box>
    );
  },
);
const FormExample = () => {
const { control, handleSubmit, register, setFocus } = useForm<FormValues>({
    defaultValues: {
      country: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    },
  });
  const { errors } = useFormState({ control });
  const seed = useUIDSeed();
    const fieldList = {
    country: "Country",
    address: "Address line 1",
    city: "City",
    state: "State",
    zip: "Zip code",
  };
  return (
    <Box maxWidth="608px">
      <Heading as="h1" variant="heading10">
        Main address
      </Heading>
      <Paragraph>
        This information will be used for taxation purposes. For US customers, this is your service address. For
        international customers, this is your permanent place of establishment (e.g. head office.)
      </Paragraph>
      {Object.keys(errors).length > 0 ? (
        <Callout variant="error">
          <CalloutHeading as="h4">Missing Values</CalloutHeading>
          <CalloutText>Enter values for all required fields</CalloutText>
          <CalloutList as="ul">
            {Object.keys(errors).map((errorKey) => (
              <CalloutListItem key={errorKey}>
                <Button
                  variant="link"
                  onClick={() => {
                    setFocus(errorKey as keyof FormValues);
                  }}
                >
                  <Text as="span" fontWeight="fontWeightNormal" color="colorTextLink">
                    {fieldList[errorKey as keyof FormValues]}
                  </Text>
                </Button>
              </CalloutListItem>
            ))}
          </CalloutList>
        </Callout>
      ) : null}
      <Box marginTop="space50" maxWidth="296px">
        <Form>
          <InputWithError
            id={seed("country")}
            label="Country"
            registerName="country"
            registerOptions={{
              required: "Country is required",
            }}
            insertAfter={<SearchIcon color="colorTextIcon" decorative />}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("address")}
            label="Address line 1"
            registerName="address"
            registerOptions={{
              required: "Address is required",
            }}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("city")}
            label="City"
            registerName="city"
            registerOptions={{
              required: "City is required",
            }}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("state")}
            label="State"
            registerName="state"
            registerOptions={{
              required: "State is required",
            }}
            errors={errors}
            register={register}
          />
          <InputWithError
            id={seed("zip")}
            label="Zip code"
            registerName="zip"
            registerOptions={{
              required: "Zip code is required",
            }}
            errors={errors}
            register={register}
          />
          <Box>
            <Button
              variant="primary"
              onClick={() => {
                handleSubmit(() => {})();
                setTimeout(() => {
                  const firstError = Object.keys(errors)[0];
                  if (firstError) {
                    setFocus(firstError as keyof FormValues);
                  }
                }, 100);
              }}
            >
              Save
            </Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

render(
  <FormExample />
)`.trim(),g=`
const FormExample = () => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>("");
  const [formState, setFormState] = React.useState<"default" | "loading" | "error" | "success">("default");
  const previousFormState = React.useRef<"default" | "error" | "success">("default");
  const vatID = useUID();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    previousFormState.current = formState === "loading" ? previousFormState.current : formState;
    setFormState("loading");
    setTimeout(() => {
      const vatRegex = /^[A-Z]{2}\\d{9}$/;
      if (vatRegex.test(selectedValue || "")) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    }, 1000);
  }
  const helpTextContent = {
    default: "Use the following format: IEXXXXXXXXX",
    error: "Enter VAT in this format: IEXXXXXXXXX",
    success: "VAT number validated",
  };
  return (
    <Box maxWidth="size30">
      <Form>
        <FormControl>
          <Box>
            <Label htmlFor={vatID}>Enter a valid VAT number</Label>
            <Input
              name="vat"
              id={vatID}
              type="text"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            <HelpText variant={formState === "loading" ? previousFormState.current : formState}>
              {formState === "loading" ? helpTextContent[previousFormState.current] : helpTextContent[formState]}
            </HelpText>
          </Box>
        </FormControl>
      </Form>
      <Box marginTop="space130">
        <Button variant="primary" loading={formState === "loading"} onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

render(
  <FormExample />
)`.trim(),C=`
const FormExample = () => {
  const TableComponent = () => {
    return (
      <DataGrid aria-label="Answer table">
        <DataGridHead>
          <DataGridRow>
            <DataGridHeader>Field name</DataGridHeader>
            <DataGridHeader>Answer</DataGridHeader>
            <DataGridHeader textAlign="right">Action</DataGridHeader>
          </DataGridRow>
        </DataGridHead>
        <DataGridBody>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Anchor href="#confirmation-and-deletion">Change</Anchor>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Anchor href="#confirmation-and-deletion">Change</Anchor>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Anchor href="#confirmation-and-deletion">Change</Anchor>
            </DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell>Content</DataGridCell>
            <DataGridCell textAlign="right">
              <Anchor href="#confirmation-and-deletion">Change</Anchor>
            </DataGridCell>
          </DataGridRow>
        </DataGridBody>
      </DataGrid>
    );
  };
  return (
    <Box display="flex" width="100%" justifyContent="center" paddingX="space10">
      <Box paddingTop="space130" paddingBottom="space160" width="size70" maxWidth="size80">
        <PageHeader>
          <PageHeaderSetting>
            <ProgressSteps>
              <ProgressStepComplete as="div">Label</ProgressStepComplete>
              <ProgressStepSeparator />
              <ProgressStepComplete as="div">Label</ProgressStepComplete>
              <ProgressStepSeparator />
              <ProgressStepCurrent as="div">Label</ProgressStepCurrent>
            </ProgressSteps>
          </PageHeaderSetting>
          <PageHeaderDetails>
            <PageHeaderKeyword>Confirmation</PageHeaderKeyword>
            <PageHeaderHeading>Check and confirm your answers</PageHeaderHeading>
            <PageHeaderParagraph>
              See all your selected answers below. You can also change them if you need to.
            </PageHeaderParagraph>
          </PageHeaderDetails>
        </PageHeader>
        <Box display="flex" flexDirection="column" rowGap="space130">
          <Box display="flex" flexDirection="column" rowGap="space130" role="list">
            <Form>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    1
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Step 1</FormSectionHeading>
                    <FormSectionDescription>Paragraph</FormSectionDescription>
                    <TableComponent />
                  </FormSection>
                </Box>
              </Box>
              <Box display="flex" role="listitem">
                <Box width="size10" flexShrink={0}>
                  <Text
                    as="span"
                    color="colorTextWeak"
                    fontWeight="fontWeightSemibold"
                    fontSize="fontSize60"
                    lineHeight="lineHeight60"
                  >
                    2
                  </Text>
                </Box>
                <Box width="100%">
                  <FormSection>
                    <FormSectionHeading variant="heading30">Step 2</FormSectionHeading>
                    <FormSectionDescription>Paragraph</FormSectionDescription>
                    <TableComponent />
                  </FormSection>
                </Box>
              </Box>
            </Form>
          </Box>
          <Box>
            <Separator orientation="horizontal" />
            <Box
              display="flex"
              justifyContent="space-between"
              columnGap="space40"
              marginTop="space50"
              alignItems="center"
            >
              <Button variant="secondary">
                <ArrowBackIcon decorative />
                Back
              </Button>
              <ButtonGroup>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Finish</Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

render(
  <FormExample />
)`.trim()},81724:(e,t,r)=>{r.d(t,{c$:()=>l,l6:()=>m,zQ:()=>s});var a=r(76127),o=r(55729),n=r(92980),i=r(34280),l=o.forwardRef(({children:e,element:t="OPTION",...r},n)=>(r.selected&&console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.'),o.createElement(a.az,{as:"option",ref:n,...(0,a.x8)(r),element:t,size:void 0,height:void 0,width:void 0,backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",lineHeight:"lineHeight50",paddingTop:"space30",paddingBottom:"space30",paddingLeft:"space20"},e)));l.displayName="Option";var s=o.forwardRef(({label:e,children:t,element:r="OPTION_GROUP",...n},i)=>o.createElement(a.az,{ref:i,label:e,...(0,a.x8)(n),element:r,as:"optgroup",backgroundColor:"inherit",color:"inherit",fontFamily:"inherit",fontWeight:"fontWeightMedium",fontStyle:"normal",margin:"space20"},t));s.displayName="OptionGroup";var d=o.forwardRef(({element:e="SELECT_ELEMENT",variant:t,size:r,...n},i)=>o.createElement(a.az,{...(0,a.x8)(n),element:e,as:"select",ref:i,size:r,height:void 0,appearance:"none",backgroundColor:"inverse"===t?"colorBackgroundInverse":"colorBackgroundBody",border:"none",borderRadius:"borderRadius30",boxShadow:"none",color:"inherit",cursor:"pointer",display:"block",fontFamily:"inherit",fontSize:"fontSize30",fontWeight:"fontWeightMedium",lineHeight:"lineHeight20",margin:"space0",outline:"none",paddingBottom:"space30",paddingLeft:"space40",paddingRight:"space100",paddingTop:"space30",resize:"none",width:"100%",_disabled:{color:"inverse"===t?"colorTextInverseWeakest":"colorTextWeaker",backgroundColor:"transparent",cursor:"not-allowed",opacity:1},variant:t}));d.displayName="SelectElement";var m=o.forwardRef(({disabled:e,element:t="SELECT",hasError:r,insertBefore:l,insertAfter:s,children:m,size:c,multiple:u,variant:p="default",...h},g)=>{let[C,x]=o.useState(!1);return o.useEffect(()=>{x(!0)},[]),o.createElement(i.cl,{disabled:e,element:t,hasError:r,insertAfter:s,insertBefore:l,variant:p},o.createElement(a.az,{display:"flex",width:"100%",position:"relative"},C?o.createElement(d,{"aria-invalid":r,"data-not-selectize":"true",disabled:e,ref:g,element:`${t}_ELEMENT`,...h,multiple:u,size:u?c:0,variant:p,key:"mounted"},m):o.createElement(d,{key:"unmounted",variant:p}),!u&&o.createElement(i.JO,{element:`${t}_CHEVRON_WRAPPER`},o.createElement(n.ChevronDownIcon,{"aria-hidden":"true",decorative:!0,element:`${t}_ICON`,color:(0,i.YN)(p,e,!1),size:"sizeIcon30"}))))});m.displayName="Select"}}]);