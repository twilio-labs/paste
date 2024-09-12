export const divExample = `const ProgressStepsExample = () => {
  return (
    <ProgressSteps>
      <ProgressStepComplete as="div">Sign up</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="div">Validate email</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="div">Complete profile</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="div">Add friends</ProgressStepIncomplete>
    </ProgressSteps>
  );
};

render(<ProgressStepsExample />);`.trim();

export const buttonExample = `const ProgressStepsExample = () => {
  return (
    <ProgressSteps>
      <ProgressStepComplete as="button" onClick={() => {}}>Sign up</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="button" onClick={() => {}}>Validate email</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="button" onClick={() => {}}>Complete profile</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}}>Add friends</ProgressStepIncomplete>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}} disabled>
        Start event
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};

render(<ProgressStepsExample />);`.trim();

export const anchorExample = `const ProgressStepsExample = () => {
  return (
    <ProgressSteps>
      <ProgressStepComplete as="a" href="#">Sign up</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="a" href="#">Validate email</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="a" href="#">Complete profile</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="a" href="#">Add friends</ProgressStepIncomplete>
    </ProgressSteps>
  );
};

render(<ProgressStepsExample />);`.trim();

export const verticalExample = `const ProgressStepsExample = () => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="div">Sign up</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="div">Validate email</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="div">Complete profile</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="div">Add friends</ProgressStepIncomplete>
    </ProgressSteps>
  );
};

render(<ProgressStepsExample />);`.trim();

export const i18nExample = `const ProgressStepsExample = () => {
  return (
    <ProgressSteps>
      <ProgressStepComplete i18nCompleteLabel="Complété" as="div">S'inscrire</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError i18nErrorLabel="Erreur" as="div">Email validé</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent i18nCurrentLabel="Actuelle" as="div">Complétez votre profil</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete i18nIncompleteLabel="Incomplet" as="div">Ajouter des amis</ProgressStepIncomplete>
    </ProgressSteps>
  );
};

render(<ProgressStepsExample />);`.trim();

export const additionalContentExample = `const ProgressStepsExample = () => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="div">
        Data warehouse connected
        <ProgressStepContent>
          <Box paddingX="space10" paddingY="space30">
            <Box display="flex" columnGap="space50" paddingY="space40">
              <Avatar size="sizeIcon90" name="Twilio Paste" variant="entity" icon={BusinessIcon} />
              <Box>
                <Heading variant="heading50">Snowflake</Heading>
                <Box display="flex" flexDirection="column">
                  <Paragraph>Account: accountname</Paragraph>
                  <Paragraph>Database: snowflakedatabasename</Paragraph>
                  <Paragraph>Warehouse: snowflakewarehousename</Paragraph>
                  <Paragraph>User: bsmith</Paragraph>
                  <Paragraph marginBottom="space0">Password: *****</Paragraph>
                </Box>
                <Box marginTop="space80">
                  <ButtonGroup>
                    <Button variant="secondary">Edit</Button>
                    <Button variant="destructive_secondary">Remove</Button>
                  </ButtonGroup>
                </Box>
              </Box>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepComplete>
      <ProgressStepCurrent as="div">
        Create a model
        <ProgressStepContent>
          <Box paddingX="space10" paddingY="space30">
            <Paragraph marginBottom="space0">
              Models are SQL queries that define sets of data to sync using Reverse ETL.
            </Paragraph>
            <Box marginTop="space50">
              <Button variant="primary">Define model</Button>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepCurrent>
      <ProgressStepIncomplete as="div">
        Create mapping
        <ProgressStepContent>
          <Box paddingX="space10" paddingY="space30">
            <Paragraph marginBottom="space0">
              Mappings determine how data extracted from your warehouse is mapped to fields in Flex
            </Paragraph>
            <Box marginTop="space50">
              <Button variant="primary" disabled>
                Continue mapping
              </Button>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};

render(<ProgressStepsExample />);`.trim();
