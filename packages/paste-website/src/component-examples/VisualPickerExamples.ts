export const VisualPickerRadioVertical = `
const VisualPickerExample = () => {
    const [value, setValue] = React.useState('')
    return (
        <VisualPickerRadioGroup
          name={useUID()}
          id={useUID()} 
          legend={
            <Text as="span" color="currentColor">
              Select data source
            </Text>
          }
          onChange={(newValue) => {
            setValue(newValue);
          }}
          helpText="The source sends data to the client."
          value={value}
        >
          <VisualPickerRadio id={useUID()} value='1' labelText="my first site (website)">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <MediaObject verticalAlign="center">
                <MediaFigure spacing="space50">
                  <Avatar variant="entity" icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
                </MediaFigure>
                <MediaBody>
                  <Text as="div" fontWeight="fontWeightSemibold">
                    My first site
                  </Text>
                  <Text as="div" color="colorTextWeak">
                    Website
                  </Text>
                </MediaBody>
              </MediaObject>
              <Box display="flex" columnGap="space50">
                <StatusBadge as="span" variant="ConnectivityAvailable">
                  Enabled
                </StatusBadge>
                <AvatarGroup size="sizeIcon20" variant="user">
                  <Avatar name="site user1" icon={CommunityIcon} />
                  <Avatar name="site user2" icon={CommunityIcon} />
                  <Avatar name="site user3" icon={CommunityIcon} />
                </AvatarGroup>
              </Box>
            </Box>
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='2' labelText="test site (website)">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <MediaObject verticalAlign="center">
                <MediaFigure spacing="space50">
                  <Avatar variant="entity" icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
                </MediaFigure>
                <MediaBody>
                  <Text as="div" fontWeight="fontWeightSemibold">
                    Test site
                  </Text>
                  <Text as="div" color="colorTextWeak">
                    Website
                  </Text>
                </MediaBody>
              </MediaObject>
              <Box display="flex" columnGap="space50">
                <StatusBadge as="span" variant="ConnectivityOffline">
                  Offline
                </StatusBadge>
                <AvatarGroup size="sizeIcon20" variant="user">
                  <Avatar name="site user1" icon={CommunityIcon} />
                  <Avatar name="site user2" icon={CommunityIcon} />
                </AvatarGroup>
              </Box>
            </Box>
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='3' labelText="ACME (website)">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <MediaObject verticalAlign="center">
                <MediaFigure spacing="space50">
                  <Avatar variant="entity" icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
                </MediaFigure>
                <MediaBody>
                  <Text as="div" fontWeight="fontWeightSemibold">
                    ACME
                  </Text>
                  <Text as="div" color="colorTextWeak">
                    Website
                  </Text>
                </MediaBody>
              </MediaObject>
              <Box display="flex" columnGap="space50">
                <StatusBadge as="span" variant="ConnectivityAvailable">
                  Enabled
                </StatusBadge>
                <AvatarGroup size="sizeIcon20" variant="user">
                  <Avatar name="site user1" icon={CommunityIcon} />
                  <Avatar name="site user2" icon={CommunityIcon} />
                  <Avatar name="site user3" icon={CommunityIcon} />
                </AvatarGroup>
              </Box>
            </Box>
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
              Select plan
            </Text>
          }
          onChange={(newValue) => {
            setValue(newValue);
          }}
          helpText="The new plan will take effect at the start of the upcoming cycle."
          value={value}
        >
          <VisualPickerRadio id={useUID()} value='1' labelText="30 US dollars per user per month">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              rowGap="space50"
              padding="space20"
              paddingTop="space50"
              paddingRight="space40"
            >
              <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
                $30
              </Text>
              <Text as="div" color="colorTextWeak">
                USD/user/month *
              </Text>
            </Box>
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='2' labelText="150 US dollars per user per month">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            rowGap="space50"
            padding="space20"
            paddingTop="space50"
            paddingRight="space40"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $150
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
          </VisualPickerRadio>
          <VisualPickerRadio id={useUID()} value='3' labelText="300 US dollars per user per month">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              rowGap="space50"
              padding="space20"
              paddingTop="space50"
              paddingRight="space40"
            >
              <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
                $300
              </Text>
              <Text as="div" color="colorTextWeak">
                USD/user/month *
              </Text>
            </Box>
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
    const [checked4, setChecked4] = React.useState(false)
    const handleChange1 = (event) => setChecked1(event.target.checked)
    const handleChange2 = (event) => setChecked2(event.target.checked)
    const handleChange3 = (event) => setChecked3(event.target.checked)
    const handleChange4 = (event) => setChecked4(event.target.checked)
    return (
        <VisualPickerCheckboxGroup
            name={useUID()}
            id={useUID()} 
            legend={
              <Text as="span" color="currentColor">
                Select service
              </Text>
            }
            helpText="The message will be sent to all recipients for each selected service."
        >
            <VisualPickerCheckbox id={useUID()} labelText="sms" checked={checked1} onChange={handleChange1}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <MediaObject verticalAlign="center">
                  <MediaFigure spacing="space50">
                    <Avatar variant="entity" icon={SMSIcon} size="sizeIcon90" name="code" color="decorative20" />
                  </MediaFigure>
                  <MediaBody>
                    <Text as="div" fontWeight="fontWeightSemibold">
                      SMS
                    </Text>
                    <Text as="div" color="colorTextWeak">
                      4,770 recipients
                    </Text>
                  </MediaBody>
                </MediaObject>
                <Box display="flex" columnGap="space30">
                  <AvatarGroup size="sizeIcon20" variant="user">
                    <Avatar name="sms recipient1" icon={UserIcon} />
                    <Avatar name="sms recipient2" icon={UserIcon} />
                    <Avatar name="sms recipient3" icon={UserIcon} />
                  </AvatarGroup>
                  <Text fontWeight="fontWeightBold">+4,767</Text>
                </Box>
              </Box>
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="voice" checked={checked2} onChange={handleChange2}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <MediaObject verticalAlign="center">
                  <MediaFigure spacing="space50">
                    <Avatar variant="entity" icon={VoiceCapableIcon} size="sizeIcon90" name="code" color="decorative20" />
                  </MediaFigure>
                  <MediaBody>
                    <Text as="div" fontWeight="fontWeightSemibold">
                      Voice
                    </Text>
                    <Text as="div" color="colorTextWeak">
                      593 recipients
                    </Text>
                  </MediaBody>
                </MediaObject>
                <Box display="flex" columnGap="space30">
                  <AvatarGroup size="sizeIcon20" variant="user">
                    <Avatar name="voice recipient1" icon={UserIcon} />
                    <Avatar name="voice recipient2" icon={UserIcon} />
                    <Avatar name="voice recipient3" icon={UserIcon} />
                  </AvatarGroup>
                  <Text fontWeight="fontWeightBold">+596</Text>
                </Box>
              </Box>
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="whatsapp" checked={checked3} onChange={handleChange3}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <MediaObject verticalAlign="center">
                  <MediaFigure spacing="space50">
                    <Avatar variant="entity" icon={ProductVideoIcon} size="sizeIcon90" name="code" color="decorative20" />
                  </MediaFigure>
                  <MediaBody>
                    <Text as="div" fontWeight="fontWeightSemibold">
                      Video
                    </Text>
                    <Text as="div" color="colorTextWeak">
                      86 recipients
                    </Text>
                  </MediaBody>
                </MediaObject>
                <Box display="flex" columnGap="space30">
                  <AvatarGroup size="sizeIcon20" variant="user">
                    <Avatar name="video recipient1" icon={UserIcon} />
                    <Avatar name="video recipient2" icon={UserIcon} />
                    <Avatar name="video recipient3" icon={UserIcon} />
                  </AvatarGroup>
                  <Text fontWeight="fontWeightBold">+83</Text>
                </Box>
              </Box>
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="email" checked={checked4} onChange={handleChange4}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <MediaObject verticalAlign="center">
                  <MediaFigure spacing="space50">
                    <Avatar variant="entity" icon={EmailIcon} size="sizeIcon90" name="code" color="decorative20" />
                  </MediaFigure>
                  <MediaBody>
                    <Text as="div" fontWeight="fontWeightSemibold">
                      Email
                    </Text>
                    <Text as="div" color="colorTextWeak">
                      6,081 recipients
                    </Text>
                  </MediaBody>
                </MediaObject>
                <Box display="flex" columnGap="space30">
                  <AvatarGroup size="sizeIcon20" variant="user">
                    <Avatar name="email recipient1" icon={UserIcon} />
                    <Avatar name="email recipient2" icon={UserIcon} />
                    <Avatar name="email recipient3" icon={UserIcon} />
                  </AvatarGroup>
                  <Text fontWeight="fontWeightBold">+6,078</Text>
                </Box>
              </Box>
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
                Select a channel to test
              </Text>
            }
            helpText="The test message will only be sent to test recipients."
        >
            <VisualPickerCheckbox id={useUID()} labelText="sms" checked={checked1} onChange={handleChange1}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                rowGap="space50"
                padding="space20"
                paddingTop="space50"
                paddingRight="space70"
              >
                <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
                  SMS
                </Text>
                <Text as="div" color="colorTextWeak">
                  30 test recipients
                </Text>
              </Box>
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="whatsapp" checked={checked2} onChange={handleChange2}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                rowGap="space50"
                padding="space20"
                paddingTop="space50"
                paddingRight="space70"
              >
                <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
                  Whatsapp
                </Text>
                <Text as="div" color="colorTextWeak">
                  15 test recipients
                </Text>
              </Box>
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="email" checked={checked3} onChange={handleChange3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                rowGap="space50"
                padding="space20"
                paddingTop="space50"
                paddingRight="space70"
              >
                <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
                  Email
                </Text>
                <Text as="div" color="colorTextWeak">
                  7 test recipients
                </Text>
              </Box>
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
    const [checked4, setChecked4] = React.useState(false)
    const [checked5, setChecked5] = React.useState(false)
    const handleChange1 = (event) => setChecked1(event.target.checked)
    const handleChange2 = (event) => setChecked2(event.target.checked)
    const handleChange3 = (event) => setChecked3(event.target.checked)
    const handleChange4 = (event) => setChecked4(event.target.checked)
    const handleChange5 = (event) => setChecked5(event.target.checked)
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
            <VisualPickerCheckbox id={useUID()} labelText="jueves" checked={checked4} onChange={handleChange4}>
              Jueves
            </VisualPickerCheckbox>
            <VisualPickerCheckbox id={useUID()} labelText="viernes" checked={checked5} onChange={handleChange5}>
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
          Select a data source
        </Text>
      }
      onChange={(newValue) => {
        setValue(newValue);
      }}
      helpText="The connected source you select will send data to the client."
      value={value}
    >
      <VisualPickerRadio id={useUID()} value='1' labelText="my first site (website)">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar variant="entity" icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                My first site
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="user">
              <Avatar name="site user1" icon={CommunityIcon} />
              <Avatar name="site user2" icon={CommunityIcon} />
              <Avatar name="site user3" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value='2' labelText="test site (website)">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar variant="entity" icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                Test site
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityOffline">
              Offline
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="user">
              <Avatar name="site user1" icon={CommunityIcon} />
              <Avatar name="site user2" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
      </VisualPickerRadio>
      <VisualPickerRadio id={useUID()} value='3' labelText="ACME (website)">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar variant="entity" icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                ACME
              </Text>
              <Text as="div" color="colorTextWeak">
                Website
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space50">
            <StatusBadge as="span" variant="ConnectivityAvailable">
              Enabled
            </StatusBadge>
            <AvatarGroup size="sizeIcon20" variant="user">
              <Avatar name="site user1" icon={CommunityIcon} />
              <Avatar name="site user2" icon={CommunityIcon} />
              <Avatar name="site user3" icon={CommunityIcon} />
            </AvatarGroup>
          </Box>
        </Box>
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
  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false)
  const [checked3, setChecked3] = React.useState(false)
  const [checked4, setChecked4] = React.useState(false)
  const handleChange1 = (event) => setChecked1(event.target.checked)
  const handleChange2 = (event) => setChecked2(event.target.checked)
  const handleChange3 = (event) => setChecked3(event.target.checked)
  const handleChange4 = (event) => setChecked4(event.target.checked)
    return (
      <VisualPickerCheckboxGroup
      name={useUID()}
      id={useUID()} 
      legend={
        <Text as="span" color="currentColor">
          Select one or more service for your scheduled message
        </Text>
      }
      helpText="The message will be delivered to all selected recipients."
      disabled
  >
      <VisualPickerCheckbox id={useUID()} labelText="sms" checked={checked1} onChange={handleChange1}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar variant="entity" icon={SMSIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
                SMS
              </Text>
              <Text as="div" color="colorTextWeak">
                4,770 recipients
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space30">
            <AvatarGroup size="sizeIcon20" variant="user">
              <Avatar name="sms recipient1" icon={UserIcon} />
              <Avatar name="sms recipient2" icon={UserIcon} />
              <Avatar name="sms recipient3" icon={UserIcon} />
            </AvatarGroup>
            <Text fontWeight="fontWeightBold" color="colorTextWeak">+4,767</Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox id={useUID()} labelText="voice" checked={checked2} onChange={handleChange2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar variant="entity" icon={VoiceCapableIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
                Voice
              </Text>
              <Text as="div" color="colorTextWeak">
                593 recipients
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space30">
            <AvatarGroup size="sizeIcon20" variant="user">
              <Avatar name="voice recipient1" icon={UserIcon} />
              <Avatar name="voice recipient2" icon={UserIcon} />
              <Avatar name="voice recipient3" icon={UserIcon} />
            </AvatarGroup>
            <Text fontWeight="fontWeightBold" color="colorTextWeak">+596</Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox id={useUID()} labelText="whatsapp" checked={checked3} onChange={handleChange3}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar variant="entity" icon={ProductVideoIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
                Video
              </Text>
              <Text as="div" color="colorTextWeak">
                86 recipients
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space30">
            <AvatarGroup size="sizeIcon20" variant="user">
              <Avatar name="video recipient1" icon={UserIcon} />
              <Avatar name="video recipient2" icon={UserIcon} />
              <Avatar name="video recipient3" icon={UserIcon} />
            </AvatarGroup>
            <Text fontWeight="fontWeightBold" color="colorTextWeak">+83</Text>
          </Box>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox id={useUID()} labelText="email" checked={checked4} onChange={handleChange4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar variant="entity" icon={EmailIcon} size="sizeIcon90" name="code" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold" color="colorTextWeak">
                Email
              </Text>
              <Text as="div" color="colorTextWeak">
                6,081 recipients
              </Text>
            </MediaBody>
          </MediaObject>
          <Box display="flex" columnGap="space30">
            <AvatarGroup size="sizeIcon20" variant="user">
              <Avatar name="email recipient1" icon={UserIcon} />
              <Avatar name="email recipient2" icon={UserIcon} />
              <Avatar name="email recipient3" icon={UserIcon} />
            </AvatarGroup>
            <Text fontWeight="fontWeightBold" color="colorTextWeak">+6,078</Text>
          </Box>
        </Box>
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
    const [value, setValue] = React.useState('1')
    return (
      <VisualPickerRadioGroup
        orientation="horizontal"
        name={useUID()}
        id={useUID()} 
        legend={
          <Text as="span" color="currentColor">
            Select a plan
          </Text>
        }
        onChange={(newValue) => {
          setValue(newValue);
        }}
        helpText="The new plan will take effect at the start of the upcoming cycle."
        value={value}
      >
        <VisualPickerRadio id={useUID()} value='1' labelText="30 US dollars per user per month">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            rowGap="space50"
            padding="space20"
            paddingTop="space50"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $30
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
        </VisualPickerRadio>
        <VisualPickerRadio id={useUID()} value='2' labelText="150 US dollars per user per month">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          rowGap="space50"
          padding="space20"
          paddingTop="space50"
        >
          <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
            $150
          </Text>
          <Text as="div" color="colorTextWeak">
            USD/user/month *
          </Text>
        </Box>
        </VisualPickerRadio>
        <VisualPickerRadio id={useUID()} value='3' labelText="300 US dollars per user per month" hasError>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            rowGap="space50"
            padding="space20"
            paddingTop="space50"
          >
            <Text as="div" fontSize="fontSize90" fontWeight="fontWeightSemibold">
              $300
            </Text>
            <Text as="div" color="colorTextWeak">
              USD/user/month *
            </Text>
          </Box>
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
      orientation="horizontal"
      name={useUID()}
      id={useUID()} 
      legend={
        <Text as="span" color="currentColor">
          Select a channel to test
        </Text>
      }
      required
      helpText="The test message will only be sent to test recipients."
      errorText="Select a channel."
  >
      <VisualPickerCheckbox id={useUID()} labelText="sms" checked={checked1} onChange={handleChange1}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          rowGap="space50"
          padding="space20"
          paddingTop="space50"
        >
          <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
            SMS
          </Text>
          <Text as="div" color="colorTextWeak">
            30 test recipients
          </Text>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox id={useUID()} labelText="whatsapp" checked={checked2} onChange={handleChange2}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          rowGap="space50"
          padding="space20"
          paddingTop="space50"
        >
          <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
            Whatsapp
          </Text>
          <Text as="div" color="colorTextWeak">
            15 test recipients
          </Text>
        </Box>
      </VisualPickerCheckbox>
      <VisualPickerCheckbox id={useUID()} labelText="email" checked={checked3} onChange={handleChange3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          rowGap="space50"
          padding="space20"
          paddingTop="space50"
        >
          <Text as="div" fontSize="fontSize60" fontWeight="fontWeightSemibold">
            Email
          </Text>
          <Text as="div" color="colorTextWeak">
            7 test recipients
          </Text>
        </Box>
      </VisualPickerCheckbox>
  </VisualPickerCheckboxGroup>
    );
}
render(
    <VisualPickerExample/>
)
`.trim();
