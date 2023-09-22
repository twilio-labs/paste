import { CustomizationProvider } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';
import * as React from 'react';

import { DisplayHeading } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Display Heading',
  component: DisplayHeading,
};

export const AllVariants = (): React.ReactNode => {
  return (
    <>
      <DisplayHeading variant="displayHeading10" as="div">
        Display Heading 10
      </DisplayHeading>
      <DisplayHeading variant="displayHeading20" as="div">
        Display Heading 20
      </DisplayHeading>
      <DisplayHeading variant="displayHeading30" as="div">
        Display Heading 30
      </DisplayHeading>
    </>
  );
};

export const DisplayHeading10 = (): React.ReactNode => {
  return (
    <DisplayHeading variant="displayHeading10" as="div">
      Display Heading 10
    </DisplayHeading>
  );
};

export const DisplayHeading20 = (): React.ReactNode => {
  return (
    <DisplayHeading variant="displayHeading20" as="div">
      Display Heading 20
    </DisplayHeading>
  );
};

export const DisplayHeading30 = (): React.ReactNode => {
  return (
    <DisplayHeading variant="displayHeading30" as="div">
      Display Heading 30
    </DisplayHeading>
  );
};

export const Customization = (): React.ReactNode => {
  const theme = useTheme();
  return (
    <CustomizationProvider theme={theme} elements={{ DISPLAY_HEADING: { color: 'colorTextDecorative20' } }}>
      <DisplayHeading as="div" variant="displayHeading10">
        Display Heading with customization
      </DisplayHeading>
    </CustomizationProvider>
  );
};
Customization.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
