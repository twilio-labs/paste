export const basicExample = `
const BasicFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState}>
         Voice
        </FormPill>
        <FormPill {...pillState}>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState}>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <BasicFormPillGroup />
)
`.trim();

export const largeExample = `
const BasicFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:" size="large">
        <FormPill {...pillState}>
         Voice
        </FormPill>
        <FormPill {...pillState}>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState}>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <BasicFormPillGroup />
)
`.trim();

export const treeVariantExample = `
const TreeVariantExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:" variant="tree">
        <FormPill {...pillState}>
         Voice
        </FormPill>
        <FormPill {...pillState}>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState}>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <TreeVariantExample />
)
`.trim();

export const selectableExample = `
const SelectableFormPillGroup = () => {
  const [pills] = React.useState(['SMS', 'MMS', 'Fax', 'Voice', 'Messaging', 'Chat']);
  const [selectedSet, updateSelectedSet] = React.useState(new Set(['MMS', 'Voice', 'Chat']));
  const pillState = useFormPillState();

  const iconMap = {
    ['Fax']: <FaxCapableIcon decorative/>,
    ['Voice']: <ProductVoiceIcon decorative/>,
    ['Messaging']: <ProductMessagingIcon decorative/>,
    ['Chat']: <ProductChatIcon decorative/>,
  }

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
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
            {iconMap[pill]}
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

export const dismissableExample = `
const DismissableFormPillGroup = () => {
  const [pills, setPills] = React.useState(['Frontline', 'Phone Numbers', 'Authy']);
  const pillState = useFormPillState();

  const iconMap = {
    ['Phone Numbers']: <ProductPhoneNumbersIcon decorative/>,
  }

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            {...pillState}
            onDismiss={() => {
              setPills(pills.filter((_, i) => i !== index));
            }}
          >
            {iconMap[pill]}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

render(
  <DismissableFormPillGroup />
)
`.trim();

export const selectableAndDismissableExample = `
const SelectableAndDismissableFormPillGroup = () => {
  const [pills, setPills] = React.useState(['Proxy', 'Interconnect', 'Trust Hub']);
  const [selectedSet, updateSelectedSet] = React.useState(new Set(['Interconnect']));
  const pillState = useFormPillState();

  const iconMap = {
    ['Interconnect']: <ProductInterconnectIcon decorative/>,
  }

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            {...pillState}
            onDismiss={() => {
              setPills(pills.filter((_, i) => i !== index));
              if (selectedSet.has(pill)) {
                const newSelectedSet = new Set(selectedSet);
                newSelectedSet.delete(pill);
                updateSelectedSet(newSelectedSet);
              }
            }}
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
            {iconMap[pill]}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

render(
  <SelectableAndDismissableFormPillGroup />
)
`.trim();

export const i18nExample = `
const I18nFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup
        {...pillState}
        aria-label="Votre sports favoris:"
        i18nKeyboardControls="Appuyez sur Supprimer ou Retour arrière pour supprimer. Appuyez sur Entrée pour basculer la sélection."
      >
        <FormPill {...pillState} variant="error" i18nErrorLabel="(Erreur)">
          Le tennis
        </FormPill>
        <FormPill {...pillState}>
          Le football américain
        </FormPill>
        <FormPill {...pillState} variant="error" i18nErrorLabel="(Erreur)">
          Le ski
        </FormPill>
        <FormPill {...pillState}>Le football</FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <I18nFormPillGroup />
)
`.trim();

export const selectedStateExample = `
const SelectedStateExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState} selected>
         Voice
        </FormPill>
        <FormPill {...pillState} selected>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState} selected>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <SelectedStateExample />
)
`.trim();

export const errorStateExample = `
const ErrorStateExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState} variant="error">
         Voice
        </FormPill>
        <FormPill {...pillState} variant="error" selected>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState} variant="error">
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
        <FormPill {...pillState} variant="error" selected>
         Usage
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <ErrorStateExample />
)
`.trim();

export const disabledStateExample = `
const DisabledStateExample = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState} disabled>
         Voice
        </FormPill>
        <FormPill {...pillState} disabled>
          <ProductVideoIcon decorative />
          Video
        </FormPill>
        <FormPill {...pillState} disabled>
          <ProductVerifyIcon decorative />
          Verify
        </FormPill>
        <FormPill {...pillState} disabled>
         Usage
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <DisabledStateExample />
)
`.trim();

export const truncateExample = `
const TruncateFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState}>
          <ProductInternetOfThingsIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="Internet of Things">Internet of Things</Truncate>
          </Box>
        </FormPill>
        <FormPill {...pillState}>
          <ProductMarketingCampaignsIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="Marketing Campaigns">Marketing Campaigns</Truncate>
          </Box>
        </FormPill>
        <FormPill {...pillState}>
          <ProductCodeExchangePartnerIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="CodeExchange Partner">CodeExchange Partner</Truncate>
          </Box>
        </FormPill>
        <FormPill {...pillState}>
          <ProductEngagementIntelligencePlatformIcon decorative />
          <Box maxWidth="size10">
            <Truncate title="Engagement Intelligence Platform">Engagement Intelligence Platform</Truncate>
          </Box>
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <TruncateFormPillGroup />
)
`.trim();

export const avatarExample = `
const AvatarFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="People:">
        <FormPill {...pillState}>
          <Avatar size='sizeIcon30' name='Customer' src="/images/avatars/avatar4.png" />
          Customer
        </FormPill>
        <FormPill {...pillState}>
          <Avatar size='sizeIcon30' name='Agent' icon={AgentIcon} />
          Agent
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <AvatarFormPillGroup />
)
`.trim();

export const iconExample = `
const IconFormPillGroup = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} aria-label="Products:">
        <FormPill {...pillState}>
          <ProductMessagingIcon decorative />
          Messaging
        </FormPill>
        <FormPill {...pillState}>
          <ProductBillingIcon decorative />
          Billing
        </FormPill>
        <FormPill {...pillState}>
          <ProductLookupIcon decorative />
          Lookup
        </FormPill>
        <FormPill {...pillState}>
          <ProductConversationsIcon decorative />
          Conversations
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

render(
  <IconFormPillGroup />
)
`.trim();
