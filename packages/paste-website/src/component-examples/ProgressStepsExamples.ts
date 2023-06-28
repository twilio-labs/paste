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
