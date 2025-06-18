export const TimelineStart = `
const TimelineStart = () => {
  return (
    <Timeline>
      <TimelineItem title="Event title" timestamp="August 24, 2024">
        Event details
      </TimelineItem>
      <TimelineItem title="Event title" timestamp="August 29, 2024">
        Event details
      </TimelineItem>
      <TimelineItem title="Event title" timestamp="August 30, 2024">
        Event details
      </TimelineItem>
    </Timeline>
  );
};
render(<TimelineStart/>)
`.trim();

export const TimelineBasic = `
const TimelineBasic = () => {
  return (
    <Timeline>
      <TimelineItem title="$0" timestamp="From March 6 - April 6, 2024">
      </TimelineItem>
      <TimelineItem title="$80" timestamp="From April 6 - April 30, 2024">
      </TimelineItem>
      <TimelineItem title="$199" timestamp="From April 6 - April 30, 2024">
        <Box display="flex" flexDirection="column" rowGap="space30" marginTop="space20">
          <StatusBadge as="span" variant="ProcessInProgress">
            In-progress
          </StatusBadge>
          <Paragraph marginBottom="space0">Auto renew every month until cancelled</Paragraph>
        </Box>
      </TimelineItem>
    </Timeline>
  );
};
render(<TimelineBasic/>)
`.trim();

export const TimelineIcon = `
const TimelineIcon = () => {
  return (
    <Timeline>
      <TimelineItem title="Message created" timestamp="August 10, 2024 | 12:38 pm | 0 s" icon={SMSCapableIcon}>
        Twilio Platform
      </TimelineItem>
      <TimelineItem title="Enqueued" timestamp="August 10, 2024 | 12:38 pm | 0.04 s">
        Twilio Platform
      </TimelineItem>
      <TimelineItem title="Dequeued" timestamp="August 10, 2024 | 12:38 pm | 0.09 s">
        Twilio Platform
      </TimelineItem>
      <TimelineItem title="Sent" timestamp="August 10, 2024 | 12:38 pm | 0.20 s" icon={SentIcon}>
        Twilio Platform
      </TimelineItem>
      <TimelineItem title="Undelivered" timestamp="August 10, 2024 | 12:38 pm | 0.24 s" icon={DisableIcon}>
        Twilio Platform
      </TimelineItem>
    </Timeline>
  );
};
render(<TimelineIcon/>)
`.trim();

export const TimelineCollapsible = `
const TimelineCollapsible = () => {
  return (
    <Timeline>
      <TimelineItem title="Inbound call" timestamp="Yesterday | 9:11am | 5m 6s" icon={CallIcon} collapsible>
        Twilio Platform
      </TimelineItem>
      <TimelineItem title="Inbound SMS" timestamp="August 10, 2024 | 12:38 pm | 15m 34s" icon={SMSIcon} collapsible>
        <Box
          display="flex"
          rowGap="space30"
          columnGap="space30"
          flexWrap="wrap"
          color="colorTextWeak"
          fontWeight="fontWeightMedium"
          lineHeight="lineHeight20"
          fontSize="fontSize20">
          <Box display="flex" columnGap="space30">
            <AgentIcon decorative={true} />
            <Box>
              <Box as="span" fontWeight="fontWeightSemibold">
                Agent:{" "}
              </Box>
              Lizbeth Sarvati
            </Box>
          </Box>
          <Box display="flex" columnGap="space30">
            <NotesIcon decorative={true} />
            <Box>
              <Box as="span" fontWeight="fontWeightSemibold">
                Queue:{" "}
              </Box>
              Promo inbounds
            </Box>
          </Box>
          <Box display="flex" columnGap="space30">
            <Box display="flex" columnGap="space30">
              <SentimentPositiveIcon decorative={true} />
              <Box>
                <Box as="span" fontWeight="fontWeightSemibold">
                  Sentiment:{" "}
                </Box>
                Lizbeth Sarvati
              </Box>
            </Box>
            <Box display="flex" columnGap="space30">
              <SupportIcon decorative={true} />
              <Box>
                <Box as="span" fontWeight="fontWeightSemibold">
                  Disposition code:{" "}
                </Box>
                Promo inquiry
              </Box>
            </Box>
          </Box>
          <Box display="flex" columnGap="space30">
            <DocumentationIcon decorative={true} />
            <Box>
              <Box as="span" fontWeight="fontWeightSemibold">
                Agent:{" "}
              </Box>
              Ana received a $555 promotion on her phone and was interested in learning more about it.
              She was curious if she would be eligible for the promotion by increasing her deposits by $5,000 over the next two months.
              The agent explained that this was possible and suggested that she accept the offer through her app.
            </Box>
          </Box>
        </Box>
      </TimelineItem>
      <TimelineItem title="Campaign card viewed" timestamp="August 10, 2024 | 12:34 pm" icon={StarIcon} collapsible>
        <Box
          display="flex"
          flexDirection="column"
          rowGap="space30"
          as="span"
          color="colorTextWeak"
          fontWeight="fontWeightMedium"
          lineHeight="lineHeight20"
          fontSize="fontSize20">
          <Box>
            <Box as="span" fontWeight="fontWeightSemibold">
              Campaign:{" "}
            </Box>
            Earn $555 promotion
          </Box>
           <Box>
            <Box as="span" fontWeight="fontWeightSemibold">
              ID:{" "}
            </Box>
            WB-W-555-PROMO
          </Box>
        </Box>
      </TimelineItem>
      <TimelineItem title="Registered Visa Debit Card" timestamp="July 20, 2024 | 10:38 pm" icon={PaymentIcon} collapsible>
        Twilio Platform
      </TimelineItem>
    </Timeline>
  );
};
render(<TimelineCollapsible/>)
`.trim();

export const TimelineGrouped = `
const TimelineGrouped = () => {
  return (
    <Timeline>
      <TimelineItemGroup timestamp="September 17, 2024" icon={CalendarIcon}>
        <TimelineItem title="Filter Pattern">
          <Box display="flex" flexDirection="column" rowGap="space30" marginTop="space20">
            <StatusBadge as="span" variant="ProcessInProgress">
              In-progress
            </StatusBadge>
            <Paragraph marginBottom="space0">Filters enable users to narrow down and refine results across various types of content pages,
            including rich content pages, data tables, lists, data insights, and more.</Paragraph>
          </Box>
        </TimelineItem>
        <TimelineItem title="Timeline component">
          <Box display="flex" flexDirection="column" rowGap="space30" marginTop="space20">
            <StatusBadge as="span" variant="ProcessInProgress">
              In-progress
            </StatusBadge>
            <Paragraph marginBottom="space0">A component used to display a list of events that occurred in chronological order.</Paragraph>
          </Box>
        </TimelineItem>
      </TimelineItemGroup>
      <TimelineItemGroup timestamp="November 17, 2024" icon={CalendarIcon}>
        <TimelineItem title="Callout component, refined">
          <Box marginTop="space20">
            <StatusBadge as="span" variant="ProcessDraft">
              To do
            </StatusBadge>
          </Box>
        </TimelineItem>
      </TimelineItemGroup>
      <TimelineItem title="Pricing cards" icon={CalendarIcon} collapsible collapsibleHeading="More details">
        <Paragraph marginBottom="space0">The delivery timeline for the Pricing Pattern is pending approval from the broader team.</Paragraph>
      </TimelineItem>
    </Timeline>
  );
};
render(<TimelineGrouped/>)
`.trim();

export const TimelineInteractiveTitle = `
const TimelineInteractiveTitle = () => {
  return (
    <Box maxWidth="300px">
      <Timeline>
        <TimelineItemGroup timestamp="Today – Wednesday, April 9, 2025">
          <TimelineItem title="Invoice billing issue for March cycle resolved" timestamp="9:12 AM" onClick={() => {}} />
          <TimelineItem
            title="Clarification on service tier limits for standard accounts"
            timestamp="11:26 AM"
            onClick={() => {}}
          />
          <TimelineItem title="New user onboarding questions and setup steps" timestamp="1:45 PM" onClick={() => {}} />
        </TimelineItemGroup>
        <TimelineItemGroup timestamp="Yesterday – Tuesday, April 8, 2025">
          <TimelineItem
            title="Account verification delay and next steps discussed"
            timestamp="10:15 AM"
            onClick={() => {}}
          />
          <TimelineItem title="Custom domain setup assistance provided" timestamp="4:38 PM" onClick={() => {}} />
          <TimelineItem
            title="Request to add additional admins to workspace"
            timestamp="6:09 PM"
            onClick={() => {}}
            disabled
          />
        </TimelineItemGroup>
      </Timeline>
    </Box>
  );
};
render(<TimelineInteractiveTitle/>)
`.trim();

export const TimelineComposition = `
const TimelineComposition = () => {
  return (
    <Timeline>
      <TimelineItem title="Message sent" timestamp="August 24, 2024">
       <Box marginTop="space20">
          <Paragraph marginBottom="space0">The message was successfully sent through the following diffusion channels:</Paragraph>
          <Box marginTop="space30">
            <Table>
              <THead>
                <Tr>
                  <Th>Channel Name</Th>
                  <Th>Status</Th>
                </Tr>
              </THead>
              <TBody>
                <Tr>
                  <Td>
                    Customer Updates
                  </Td>
                  <Td>
                    <StatusBadge as="span" variant="ProcessSuccess">
                      Sent
                    </StatusBadge>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                   Special Promotions
                  </Td>
                  <Td>
                    <StatusBadge as="span" variant="ProcessSuccess">
                      Sent
                    </StatusBadge>
                  </Td>
                </Tr>
              </TBody>
            </Table>
          </Box>
        </Box>
      </TimelineItem>
      <TimelineItem title="Message scheduled" timestamp="August 22, 2024">
        <Box marginTop="space10">
          <Paragraph marginBottom="space0">The message has been scheduled for delivery.</Paragraph>
          <Anchor href="#" display="block" marginTop="space50">
            View Scheduled Message
          </Anchor>
        </Box>
      </TimelineItem>
      <TimelineItem title="Message created" timestamp="August 20, 2024">
        <Box marginTop="space20">
          <StatusBadge as="span" variant="ProcessSuccess">
            Completed
          </StatusBadge>
        </Box>
      </TimelineItem>
    </Timeline>
  );
};
render(<TimelineComposition/>)
`.trim();

export const TimelineTimestamp = `
const TimelineTimestamp = () => {
  return (
    <Timeline>
      <TimelineItem title="Flagged on Verizon" timestamp="August 10, 2024 | 12:38:00 pm">
       <Box marginTop="space20">
          <StatusBadge as="span" variant="ProcessWarning">
            Warning
          </StatusBadge>
        </Box>
      </TimelineItem>
      <TimelineItem title="Unflagged on AT&T" timestamp="August 10, 2024 | 12:38:02 pm">
        <Box marginTop="space20">
          <StatusBadge as="span" variant="ProcessSuccess">
            Success
          </StatusBadge>
        </Box>
      </TimelineItem>
      <TimelineItem title="Flagged on AT&T" timestamp="August 10, 2024 | 12:38:03 pm">
        <Box marginTop="space20">
          <StatusBadge as="span" variant="ProcessWarning">
            Warning
          </StatusBadge>
        </Box>
      </TimelineItem>
    </Timeline>
  );
};
render(<TimelineTimestamp/>)
`.trim();
