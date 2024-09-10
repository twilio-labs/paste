import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
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

export const WithContent = (): React.ReactNode => {
  return (
    <ProgressSteps orientation="vertical">
      <ProgressStepComplete as="div">
        Complete
        <ProgressStepContent>
          <Box>
            <Paragraph marginBottom="space0">Connect your customer data</Paragraph>
            <Box marginTop="space30">
              <Button variant="primary" size="small">
                Connect data
              </Button>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepComplete>
      <ProgressStepError as="div">
        Error
        <ProgressStepContent>
          <Box>
            <Paragraph marginBottom="space0">Connect your customer data</Paragraph>
            <Box marginTop="space30">
              <Button variant="primary" size="small">
                Connect data
              </Button>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepError>
      <ProgressStepCurrent as="div">
        Current
        <ProgressStepContent>
          <Box>
            <Paragraph marginBottom="space0">Connect your customer data</Paragraph>
            <Box marginTop="space30">
              <Button variant="primary" size="small">
                Connect data
              </Button>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepCurrent>
      <ProgressStepIncomplete as="div">
        Incomplete
        <ProgressStepContent>
          <Box>
            <Paragraph marginBottom="space0">Connect your customer data</Paragraph>
            <Box marginTop="space30">
              <Button variant="primary" size="small">
                Connect data
              </Button>
            </Box>
          </Box>
        </ProgressStepContent>
      </ProgressStepIncomplete>
    </ProgressSteps>
  );
};
