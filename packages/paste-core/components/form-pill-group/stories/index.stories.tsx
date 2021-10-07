import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {CustomizationProvider} from '@twilio-paste/customization';
import {CalendarIcon} from '@twilio-paste/icons/esm/CalendarIcon';
import {useFormPillState, FormPillGroup, FormPill} from '../src';

export const Basic: React.FC = () => {
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label="Your favorite sports:">
        <FormPill data-testid="form-pill" {...pillState}>
          <CalendarIcon decorative size="sizeIcon10" />
          Tennis
        </FormPill>
        <FormPill {...pillState} selected data-testid="form-pill-selected">
          Baseball
        </FormPill>
        <FormPill {...pillState}>Football</FormPill>
        <FormPill {...pillState} selected>
          Soccer
        </FormPill>
      </FormPillGroup>
    </form>
  );
};

type Pills = string[];

export const Selectable: React.FC = () => {
  const [pills] = React.useState<Pills>(['Tennis', 'Baseball', 'Football', 'Soccer']);
  const [selectedSet, updateSelectedSet] = React.useState<Set<string>>(new Set(['Football']));
  const pillState = useFormPillState();

  console.log(selectedSet);
  return (
    <form>
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label="Your favorite sports:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selectedSet.has(pill)}
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
            {pill}
          </FormPill>
        ))}
      </FormPillGroup>
    </form>
  );
};

export const Removable: React.FC = () => {
  const [pills, setPills] = React.useState<Pills>(['Tennis', 'Baseball', 'Football', 'Soccer']);
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label="Your favorite sports:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            data-testid={`form-pill-${index}`}
            {...pillState}
            onDismiss={() => {
              setPills(pills.filter((_, i) => i !== index));
            }}
          >
            {pill}
          </FormPill>
        ))}
        {pills.length === 0 ? <Text as="p">No sports remaining</Text> : null}
      </FormPillGroup>
    </form>
  );
};

export const SelectableAndRemovable: React.FC = () => {
  const [pills, setPills] = React.useState<Pills>(['Tennis', 'Baseball', 'Football', 'Soccer']);
  const [selectedSet, updateSelectedSet] = React.useState<Set<string>>(new Set(['Football']));
  const pillState = useFormPillState();

  return (
    <form>
      <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label="Your favorite sports:">
        {pills.map((pill, index) => (
          <FormPill
            key={pill}
            data-testid={`form-pill-${index}`}
            {...pillState}
            selected={selectedSet.has(pill)}
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
            {pill}
          </FormPill>
        ))}
        {pills.length === 0 ? <Text as="p">No sports remaining</Text> : null}
      </FormPillGroup>
    </form>
  );
};

export const CustomFormPillGroup: React.FC = () => {
  const [showTennis, setShowTennis] = React.useState(true);
  const pillState = useFormPillState();

  return (
    <CustomizationProvider
      baseTheme="default"
      theme={{
        textColors: {colorTextLink: 'red'},
        fonts: {fontFamilyText: 'arial'},
      }}
      elements={{
        FORM_PILL_GROUP: {
          margin: 'space40',
        },
        FORM_PILL: {
          backgroundColor: 'colorBackgroundNew',
          color: 'colorText',
          padding: 'space40',
        },
      }}
    >
      <form>
        <FormPillGroup {...pillState} data-testid="form-pill-group" aria-label="Your favorite sports:">
          {showTennis && (
            <FormPill
              data-testid="form-pill"
              {...pillState}
              onDismiss={() => {
                console.log('removed the first pill');
                setShowTennis(false);
              }}
              onSelect={() => {}}
              onFocus={() => {}}
              onBlur={() => {}}
            >
              <CalendarIcon decorative size="sizeIcon10" />
              Tennis
            </FormPill>
          )}
          <FormPill {...pillState} onSelect={() => {}}>
            Baseball
          </FormPill>
          <FormPill {...pillState} onSelect={() => {}}>
            Football
          </FormPill>
          <FormPill {...pillState} onSelect={() => {}}>
            Soccer
          </FormPill>
        </FormPillGroup>
      </form>
    </CustomizationProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Form Pill Group',
  component: FormPillGroup,
};
