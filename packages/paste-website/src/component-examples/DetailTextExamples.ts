export const detailTextWithImage = `
const DetailTextExample = () => {
  return (
    <Box maxWidth='size30'>
      <Box as='img' alt='' src='/images/detail-text/detail-text-image.png' maxWidth='100%' />
      <DetailText>
        Your sender identity is the “from” email address your recipients will see in their inbox.
      </DetailText>
    </Box>
  );
};
render(<DetailTextExample />)
`.trim();

export const detailTextWithPrimaryContent = `
const DetailTextExample = () => {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>User</Th>
          <Th>Skills</Th>
          <Th textAlign="right">Tasks</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Th scope="row">
            <Text as="span">
              Adam Brown
            </Text>
            <DetailText marginTop='space0'>adam@brown.com</DetailText>
          </Th>
          <Td>English, French, Sales, Spanish</Td>
          <Td textAlign="right">35</Td>
        </Tr>
        <Tr>
          <Th scope="row">
            <Text as="span">
              Adriana Lovelock
            </Text>
            <DetailText marginTop='space0'>adriana@lovelock.com</DetailText>
          </Th>
          <Td>English, French, Sales, Spanish</Td>
          <Td textAlign="right">28</Td>
        </Tr>
        <Tr>
          <Th scope="row">
            <Text as="span">
              Amanda Cutlack
            </Text>
            <DetailText marginTop='space0'>amanda@cutlack.com</DetailText>
          </Th>
          <Td>English, French, Sales, Spanish</Td>
          <Td textAlign="right">7</Td>
        </Tr>
      </TBody>
    </Table>
  );
};
render(<DetailTextExample />)
`.trim();

export const detailTextWithNoMargin = `
const DetailTextExample = () => {
  return (
    <Box maxWidth='size30'>
      <Card>
        <Heading
          as='h3'
          variant='heading50'
          marginBottom='space0'
        >
          Average handle time
        </Heading>
        <Box display='grid' gridTemplateColumns='1fr auto' marginTop='space70' marginBottom='space90'>
          <Text
            fontWeight='fontWeightSemibold'
            fontSize='fontSize90'
            lineHeight='lineHeight70'
          >
            3m
          </Text>
          <Box display='flex' flexDirection='row' alignItems='center' color='colorTextPrimary'>
            <ArrowUpIcon decorative={true} size='sizeIcon80' />
            <Text
              fontWeight='fontWeightSemibold'
              fontSize='fontSize90'
              lineHeight='lineHeight70'
              color='inherit'
            >
              8%
            </Text>
          </Box>
        </Box>
        <Text fontSize='fontSize30' lineHeight='lineHeight60'>Handle time by hour</Text>
        <Box
          as='img'
          src='/images/detail-text/graph.png'
          maxWidth='100%'
          marginBottom='space90'
          alt='Sample graph showing how the handle time increased after 10:00 AM today compared to yesterday.'
        />
        <Box display='grid' gridTemplateColumns='1fr auto' columnGap='space50'>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='flex-end'
            columnGap='space40'
            alignItems='center'
          >
            <Box
              borderTopStyle='solid'
              borderTopColor='colorBorderPrimary'
              borderTopWidth='borderWidth20'
              width='sizeSquare50'
            />
            <DetailText marginTop='space0'>Today</DetailText>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='flex-end'
            columnGap='space40'
            alignItems='center'
          >
            <Box
              borderTopStyle='dashed'
              borderTopColor='colorBorderWeak'
              borderTopWidth='borderWidth20'
              width='sizeSquare50'
            />
            <DetailText marginTop='space0'>Yesterday</DetailText>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
render(<DetailTextExample />)
`.trim();

export const detailTextAsFootnote = `
const DetailTextExample = () => {
  return (
    <>
      <Heading as='h2' variant='heading20'>Auth tokens</Heading>
      <Paragraph>
        Auth tokens can be used to authenticate while making API requests. You will need to use HTTP Basic Authentication with user = Account SID and password = AuthToken. Auth tokens are specific to your account and can be used to access all API’s for the account.
      </Paragraph>
      <DetailText>
        *Please keep the auth tokens in a secure place and rotate them periodically.
      </DetailText>
    </>
  );
};
render(<DetailTextExample />)
`.trim();
