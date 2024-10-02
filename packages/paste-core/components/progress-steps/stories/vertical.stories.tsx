import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import {
  DescriptionList,
  DescriptionListDetails,
  DescriptionListSet,
  DescriptionListTerm,
} from "@twilio-paste/description-list";
import { BusinessIcon } from "@twilio-paste/icons/esm/BusinessIcon";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

import {
  ProgressStepComplete,
  ProgressStepContent,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Progress Steps/Vertical",
  component: ProgressSteps,
};

export const Divs = (): React.ReactNode => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="div">Complete</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="div">Error</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="div">Current</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="div">Incomplete</ProgressStepIncomplete>
    </ProgressSteps>
  );
};

export const Buttons = (): React.ReactNode => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="button" onClick={() => {}}>
        Sign up
      </ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="button" onClick={() => {}}>
        Validate Email
      </ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="button" onClick={() => {}}>
        Complete Profile
      </ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}}>
        Add friends
      </ProgressStepIncomplete>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="button" onClick={() => {}} disabled>
        Start event
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};

export const Anchors = (): React.ReactNode => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="a" href="#">
        Sign up
      </ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="a" href="#">
        Validate Email
      </ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="a" href="#">
        Complete Profile
      </ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="a" href="#">
        Add friends
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};

export const Internationalized: React.FC = () => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete i18nCompleteLabel="Complété" as="div">
        S&apos;inscrire
      </ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError i18nErrorLabel="Erreur" as="div">
        Email validé
      </ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent i18nCurrentLabel="Actuelle" as="div">
        Profil complet
      </ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete i18nIncompleteLabel="Incomplet" as="div">
        Ajouter des amis
      </ProgressStepIncomplete>
      <ProgressStepSeparator />
      <ProgressStepIncomplete i18nIncompleteLabel="Incomplet" as="button" disabled onClick={() => {}}>
        Démarrer l&apos;événement
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};

export const WithContent: React.FC = () => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="div">
        Data warehouse connected
        <ProgressStepContent>
          <Box display="flex" columnGap="space50" paddingY="space40">
            <Avatar size="sizeIcon90" name="Twilio Paste" variant="entity" icon={BusinessIcon} />
            <Box display="flex" flexDirection="column">
              <DescriptionList>
                <DescriptionListSet>
                  <DescriptionListTerm>Snowflake</DescriptionListTerm>
                  <DescriptionListDetails>Account: accountname</DescriptionListDetails>
                  <DescriptionListDetails>Database: snowflakedatabasename</DescriptionListDetails>
                  <DescriptionListDetails>Warehouse: snowflakewarehousename</DescriptionListDetails>
                </DescriptionListSet>
              </DescriptionList>

              <Box marginTop="space50">
                <ButtonGroup>
                  <Button variant="secondary">Edit</Button>
                  <Button variant="destructive_secondary">Remove</Button>
                </ButtonGroup>
              </Box>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepComplete>
      <ProgressStepCurrent as="div">
        Create a model
        <ProgressStepContent>
          <Paragraph marginBottom="space0">
            Models are SQL queries that define sets of data to sync using Reverse ETL.
          </Paragraph>
          <Box marginTop="space50">
            <Button variant="primary">Define model</Button>
          </Box>
        </ProgressStepContent>
      </ProgressStepCurrent>
      <ProgressStepIncomplete as="div">
        Create mapping
        <ProgressStepContent>
          <Paragraph marginBottom="space0">
            Mappings determine how data extracted from your warehouse is mapped to fields in Flex
          </Paragraph>
          <Box marginTop="space50">
            <Button variant="primary" disabled>
              Continue mapping
            </Button>
          </Box>
        </ProgressStepContent>
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};
