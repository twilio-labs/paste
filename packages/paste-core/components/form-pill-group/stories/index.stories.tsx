import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Avatar} from '@twilio-paste/avatar';
import {CalendarIcon} from '@twilio-paste/icons/esm/CalendarIcon';
import {useFormPillState, FormPillGroup, FormPill} from '../src';

const PILL_NAMES = [
  'Default pill',
  'Pill with icon',
  'Pill with avatar',
  'Error pill',
  'Error pill with icon',
  'Error pill with avatar',
];

export const Basic: React.FC<{selected?: boolean; dismissable?: boolean; disabled?: boolean; ariaLabel?: string}> = ({
  selected = false,
  dismissable = false,
  disabled = false,
  ariaLabel = 'Basic pills:',
}) => {
  const pillState = useFormPillState();
  return (
    <form>
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label={ariaLabel}>
        {PILL_NAMES.map((pill, index) => (
          <FormPill
            key={pill}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selected}
            variant={index > 2 ? 'error' : 'default'}
            onDismiss={dismissable ? () => {} : undefined}
            disabled={disabled}
          >
            {index % 3 === 2 ? <Avatar size="sizeIcon10" name="avatar example" src="./avatars/avatar4.png" /> : null}
            {index % 3 === 1 ? <CalendarIcon decorative size="sizeIcon10" /> : null}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

export const Disabled: React.FC = () => <Basic disabled ariaLabel="Disabled pills:" />;
export const Selected: React.FC = () => <Basic selected ariaLabel="Selected pills:" />;
export const Dismissable: React.FC = () => <Basic dismissable ariaLabel="Dismissable pills:" />;

export const OverflowWrapping: React.FC = () => (
  <Box maxWidth="size40">
    <Basic ariaLabel="Horizontal wrap pills:" />
  </Box>
);

export const SelectableAndDismissable: React.FC = () => {
  const [pills, setPills] = React.useState([...PILL_NAMES]);
  const [selectedSet, updateSelectedSet] = React.useState<Set<string>>(new Set([PILL_NAMES[1], PILL_NAMES[4]]));
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label="Selectable and dismissable pills:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selectedSet.has(pill)}
            variant={index > 2 ? 'error' : 'default'}
            onDismiss={() => {
              setPills(pills.filter((_, i) => i !== index));
            }}
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
            {index % 3 === 2 ? <Avatar size="sizeIcon10" name="avatar example" src="./avatars/avatar4.png" /> : null}
            {index % 3 === 1 ? <CalendarIcon decorative size="sizeIcon10" /> : null}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

const I18N_PILL_NAMES = ['Le tennis', 'Le football américain', 'Le ski', 'Le football'];

export const I18nProp = (): React.ReactNode => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup
        {...pillState}
        data-testid="form-pill-group"
        aria-label="Votre sports favoris:"
        i18nKeyboardControls="Appuyez sur Supprimer ou Retour arrière pour supprimer. Appuyez sur Entrée pour basculer la sélection."
      >
        {I18N_PILL_NAMES.map((pill) => (
          <FormPill key={pill} {...pillState} variant="error" i18nErrorLabel="(erreur)">
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

I18nProp.storyName = 'I18n Prop';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Form Pill Group',
  component: FormPillGroup,
};
