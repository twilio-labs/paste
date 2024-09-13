import * as React from "react";

import {
  ProgressStepComplete,
  ProgressStepCurrent,
  ProgressStepError,
  ProgressStepIncomplete,
  ProgressStepSeparator,
  ProgressSteps,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Progress Steps/Horizontal",
  component: ProgressSteps,
};

export const Divs: React.FC = () => {
  return (
    <ProgressSteps>
      <ProgressStepComplete as="div">Completed</ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="div">Error</ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="div">Current</ProgressStepCurrent>
      <ProgressStepSeparator />
      <ProgressStepIncomplete as="div">Incomplete</ProgressStepIncomplete>
    </ProgressSteps>
  );
};

export const Buttons: React.FC = () => {
  return (
    <ProgressSteps>
      <ProgressStepComplete as="button" onClick={() => {}}>
        Sign up
      </ProgressStepComplete>
      <ProgressStepSeparator />
      <ProgressStepError as="button" onClick={() => {}}>
        Validate email
      </ProgressStepError>
      <ProgressStepSeparator />
      <ProgressStepCurrent as="button" onClick={() => {}}>
        Complete profile
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

export const Anchors: React.FC = () => {
  return (
    <ProgressSteps>
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
    <ProgressSteps>
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

export const WithoutSeparatorComponent = (): React.ReactNode => {
  return (
    <ProgressSteps>
      <ProgressStepComplete as="div">Complete </ProgressStepComplete>
      <ProgressStepError as="div">Error</ProgressStepError>
      <ProgressStepCurrent as="div">Current</ProgressStepCurrent>
      <ProgressStepIncomplete as="div">Incomplete</ProgressStepIncomplete>
    </ProgressSteps>
  );
};
