// eslint-disable-next-line import/no-extraneous-dependencies
import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { CalendarIcon } from "@twilio-paste/icons/esm/CalendarIcon";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import * as React from "react";

import { FormPill, FormPillGroup, useFormPillState } from "../src";
import type { FormPillGroupSizeVariant } from "../src/FormPillGroup";

const PILL_NAMES = [
  "Default pill",
  "Pill with icon",
  "Pill with avatar",
  "Error pill",
  "Error pill with icon",
  "Error pill with avatar",
];

export const Basic: React.FC<
  React.PropsWithChildren<{
    selected?: boolean;
    dismissable?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    size?: FormPillGroupSizeVariant;
  }>
> = ({ selected = false, dismissable = false, disabled = false, ariaLabel = "Basic pills:", size }) => {
  const pillState = useFormPillState();
  return (
    <form>
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label={ariaLabel} size={size}>
        {PILL_NAMES.map((pill, index) => (
          <FormPill
            key={pill}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selected}
            variant={index > 2 ? "error" : "default"}
            onDismiss={dismissable ? () => {} : undefined}
            disabled={disabled}
          >
            {index % 3 === 2 ? (
              <Avatar
                size={size === "large" ? "sizeIcon20" : "sizeIcon10"}
                name="avatar example"
                src="./avatars/avatar4.png"
              />
            ) : null}
            {index % 3 === 1 ? <CalendarIcon decorative size={size === "large" ? "sizeIcon20" : "sizeIcon10"} /> : null}
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

export const Large = (): JSX.Element => <Basic size="large" ariaLabel="Large pill group:" />;
export const Disabled = (): JSX.Element => <Basic disabled ariaLabel="Disabled pills:" />;
export const Selected = (): JSX.Element => <Basic selected ariaLabel="Selected pills:" />;
export const Dismissable = (): JSX.Element => <Basic dismissable ariaLabel="Dismissable pills:" />;
export const LargeAndDismissable = (): JSX.Element => (
  <Basic size="large" dismissable ariaLabel="Large and dismissable pills:" />
);

export const OverflowWrapping = (): JSX.Element => (
  <Box maxWidth="size40">
    <Basic ariaLabel="Horizontal wrap pills:" />
  </Box>
);

export const SelectableAndDismissable = (): JSX.Element => {
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
            variant={index > 2 ? "error" : "default"}
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

const I18N_PILL_NAMES = ["Le tennis", "Le football américain", "Le ski", "Le football"];

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

I18nProp.storyName = "I18n Prop";

export const FormPillTreeVariant = (): JSX.Element => {
  const [pills, setPills] = React.useState([...PILL_NAMES]);
  const [selectedSet, updateSelectedSet] = React.useState<Set<string>>(new Set([PILL_NAMES[1], PILL_NAMES[4]]));
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup
        {...pillState}
        data-testid="form-pill-group"
        aria-label="Selectable and dismissable pills:"
        variant="tree"
      >
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selectedSet.has(pill)}
            variant={index > 2 ? "error" : "default"}
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

FormPillTreeVariant.storyName = "FormPillGroup Tree Variant";

export const PillStringOverflowVSComposed: React.FC<
  React.PropsWithChildren<{
    selected?: boolean;
    dismissable?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    size?: FormPillGroupSizeVariant;
  }>
> = ({ selected = false, dismissable = true, disabled = false, ariaLabel = "Basic pills:", size }) => {
  const pillState = useFormPillState();
  const pillState2 = useFormPillState();

  return (
    <Box maxWidth="150px">
      <Stack orientation="vertical" spacing="space80">
        <FormPillGroup {...pillState} data-testid="form-pill-group-1" aria-label={ariaLabel} size={size}>
          {PILL_NAMES.map((pill, index) => (
            <FormPill
              key={`${pill}-1`}
              data-testid={`form-pill-${index}-01`}
              {...pillState}
              selected={selected}
              variant={index > 2 ? "error" : "default"}
              onDismiss={dismissable ? () => {} : undefined}
              disabled={disabled}
            >
              {index % 3 === 2 ? (
                <Avatar
                  size={size === "large" ? "sizeIcon20" : "sizeIcon10"}
                  name="avatar example"
                  src="./avatars/avatar4.png"
                />
              ) : null}
              {index % 3 === 1 ? (
                <CalendarIcon decorative size={size === "large" ? "sizeIcon20" : "sizeIcon10"} />
              ) : null}
              {pill}
            </FormPill>
          ))}
        </FormPillGroup>

        <FormPillGroup {...pillState2} data-testid="form-pill-group-2" aria-label={ariaLabel} size={size}>
          {PILL_NAMES.map((pill, index) => (
            <FormPill
              key={`${pill}-2`}
              data-testid={`form-pill-${index}-02`}
              {...pillState2}
              selected={selected}
              variant={index > 2 ? "error" : "default"}
              onDismiss={dismissable ? () => {} : undefined}
              disabled={disabled}
            >
              {pill}
            </FormPill>
          ))}
        </FormPillGroup>
      </Stack>
    </Box>
  );
};

PillStringOverflowVSComposed.storyName = "Pill String Overflow vs Composed";

export const PillNarrowContainerDecorationsEnd: React.FC<
  React.PropsWithChildren<{
    selected?: boolean;
    dismissable?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    size?: FormPillGroupSizeVariant;
  }>
> = ({ selected = false, dismissable = true, disabled = false, ariaLabel = "Basic pills:", size }) => {
  const pillState = useFormPillState();
  const pillState2 = useFormPillState();

  return (
    <Box maxWidth="150px">
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label={ariaLabel} size={size}>
        {PILL_NAMES.map((pill, index) => (
          <FormPill
            key={`${pill}-1`}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selected}
            variant={index > 2 ? "error" : "default"}
            onDismiss={dismissable ? () => {} : undefined}
            disabled={disabled}
          >
            {pill}
            {index % 3 === 2 ? (
              <Avatar
                size={size === "large" ? "sizeIcon20" : "sizeIcon10"}
                name="avatar example"
                src="./avatars/avatar4.png"
              />
            ) : null}
            {index % 3 === 1 ? <CalendarIcon decorative size={size === "large" ? "sizeIcon20" : "sizeIcon10"} /> : null}
          </FormPill>
        ))}
      </FormPillGroup>
    </Box>
  );
};

export const PillNarrowContainerFormattedTextContent: React.FC<
  React.PropsWithChildren<{
    selected?: boolean;
    dismissable?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    size?: FormPillGroupSizeVariant;
  }>
> = ({ selected = false, dismissable = true, disabled = false, ariaLabel = "Basic pills:", size }) => {
  const pillState = useFormPillState();

  return (
    <Box maxWidth="90px">
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label={ariaLabel} size={size}>
        {PILL_NAMES.map((pill, index) => (
          <FormPill
            key={`${pill}-1`}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selected}
            variant={index > 2 ? "error" : "default"}
            onDismiss={dismissable ? () => {} : undefined}
            disabled={disabled}
          >
            {index % 3 === 2 ? (
              <Avatar
                size={size === "large" ? "sizeIcon20" : "sizeIcon10"}
                name="avatar example"
                src="./avatars/avatar4.png"
              />
            ) : null}
            {index % 3 === 1 ? <CalendarIcon decorative size={size === "large" ? "sizeIcon20" : "sizeIcon10"} /> : null}
            <Text as="p" fontWeight="fontWeightBold" fontStyle="italic">
              {pill}
            </Text>
          </FormPill>
        ))}
      </FormPillGroup>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Form Pill Group",
  component: FormPillGroup,
};
