export const mainExample = `
const DisplayPillGroupExample = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill>Voice</DisplayPill>
      <DisplayPill href="https://google.com">
        Studio
      </DisplayPill>
      <DisplayPill>
        <SMSCapableIcon decorative size="sizeIcon10" />
        SMS
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <MMSCapableIcon decorative size="sizeIcon10" />
        MMS
      </DisplayPill>
      <DisplayPill>
      <Avatar size="sizeIcon10" name='Customer' src="/images/avatars/avatar4.png" />
        Customer
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Agent' icon={AgentIcon} />
        Agent
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <DisplayPillGroupExample />
)
`.trim();

export const basicExample = `
const BasicDisplayPillGroup = () => {
  return (
    <DisplayPillGroup>
      <DisplayPill>Notify</DisplayPill>
      <DisplayPill>Proxy</DisplayPill>
      <DisplayPill>
        <ProductVerifyIcon decorative size="sizeIcon10" />
        Verify
      </DisplayPill>
      <DisplayPill>
        <ProductInterconnectIcon decorative size="sizeIcon10" />
        Interconnect
      </DisplayPill>
      <DisplayPill>Transcriptions</DisplayPill>
      <DisplayPill>Chat</DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <BasicDisplayPillGroup />
)
`.trim();

export const linkedExample = `
const LinkedDisplayPillGroup = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill href="https://google.com">Authy</DisplayPill>
      <DisplayPill href="https://google.com">
        <ProductPhoneNumbersIcon decorative size="sizeIcon10" />
        Phone Numbers
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <ProductFrontlineIcon decorative size="sizeIcon10" />
        Frontline
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Customer' src="/images/avatars/avatar4.png" />
        Customer
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Agent' icon={AgentIcon} />
        Agent
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <LinkedDisplayPillGroup />
)
`.trim();

export const groupExample = `
const DisplayPillGroupExample = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill href="https://www.twilio.com/segment-hello">
        <ProductSegmentIcon decorative size="sizeIcon10" />
        Segment
      </DisplayPill>
      <DisplayPill>Flex</DisplayPill>
      <DisplayPill href="https://sendgrid.com/">SendGrid</DisplayPill>
      <DisplayPill>
        <LogoTwilioIcon decorative size="sizeIcon10" />
        Twilio
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <DisplayPillGroupExample />
)
`.trim();

export const truncateExample = `
const TruncateDisplayPillGroup = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill>
        <ProductInternetOfThingsIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="Internet of Things">Internet of Things</Truncate>
        </Box>
      </DisplayPill>
      <DisplayPill>
        <ProductMarketingCampaignsIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="Marketing Campaigns">Marketing Campaigns</Truncate>
        </Box>
      </DisplayPill>
      <DisplayPill>
        <ProductCodeExchangePartnerIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="CodeExchange Partner">CodeExchange Partner</Truncate>
        </Box>
      </DisplayPill>
      <DisplayPill>
        <ProductEngagementIntelligencePlatformIcon decorative size="sizeIcon10" />
        <Box maxWidth="size10">
          <Truncate title="Engagement Intelligence Platform">Engagement Intelligence Platform</Truncate>
        </Box>
      </DisplayPill>
    </DisplayPillGroup>
  );
};

render(
  <TruncateDisplayPillGroup />
)
`.trim();

export const avatarExample = `
const AvatarDisplayPillGroupExample = () => {
  return (
    <DisplayPillGroup aria-label="People:">
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Customer' src="/images/avatars/avatar4.png" />
        Customer
      </DisplayPill>
      <DisplayPill href="https://google.com">
        <Avatar size="sizeIcon10" name='Agent' icon={AgentIcon} />
        Agent
      </DisplayPill>
    </DisplayPillGroup>
  );
}

render(
  <AvatarDisplayPillGroupExample />
)
`.trim();

export const iconExample = `
const IconDisplayPillGroup = () => {
  return (
    <DisplayPillGroup aria-label="Products:">
      <DisplayPill>
        <ProductMessagingIcon decorative size="sizeIcon10" />
        Messaging
      </DisplayPill>
      <DisplayPill>
        <ProductBillingIcon decorative size="sizeIcon10" />
        Billing
      </DisplayPill>
      <DisplayPill>
        <ProductLookupIcon decorative size="sizeIcon10" />
        Lookup
      </DisplayPill>
      <DisplayPill>
        <ProductConversationsIcon decorative size="sizeIcon10" />
        Conversations
      </DisplayPill>
    </DisplayPillGroup>
  );
};

render(
  <IconDisplayPillGroup />
)
`.trim();
