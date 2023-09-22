import { CustomizationProvider } from '@twilio-paste/customization';
import { CalendarIcon } from '@twilio-paste/icons/esm/CalendarIcon';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { FormPill, FormPillGroup, useFormPillState } from '../src';

export const CustomFormPillGroup = (): JSX.Element => {
  const currentTheme = useTheme();
  const [showTennis, setShowTennis] = React.useState(true);
  const pillState = useFormPillState();

  return (
    <CustomizationProvider
      disableAnimations={true}
      theme={{
        ...currentTheme,
        fonts: { fontFamilyText: 'arial' },
      }}
      elements={{
        FORM_PILL_GROUP: {
          margin: 'space40',
        },
        FORM_PILL: {
          backgroundColor: 'colorBackgroundNew',
          color: 'colorText',
          height: 'sizeIcon20',
        },
        FORM_PILL_CLOSE: {
          color: 'colorText',
          height: 'sizeIcon20',
          width: 'sizeIcon20',
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
  title: 'Components/Form Pill Group/Customization',
  component: FormPillGroup,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
