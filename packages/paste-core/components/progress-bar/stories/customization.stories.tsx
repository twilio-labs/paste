import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Form, FormControl } from '@twilio-paste/form';
import { HelpText } from '@twilio-paste/help-text';
import { Label } from '@twilio-paste/label';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { ProgressBar, ProgressBarLabel } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ProgressBar/Customization',
};

const NumberFormatter = new Intl.NumberFormat('en-US');

export const CustomizationWrapper: React.FC<React.PropsWithChildren<{ isTestEnvironment: boolean }>> = ({
  isTestEnvironment,
}): React.ReactElement => {
  const progressBarId = useUID();
  const customProgressBarId = useUID();
  const helpTextId = useUID();
  const [value, setValue] = React.useState<number>(0);
  const [rerun, setRerun] = React.useState<number>(1);

  // Randomly updates the value of the progress bar to simulate a real progress bar
  React.useEffect(() => {
    let interval;
    if (rerun) {
      interval = setInterval(() => {
        setValue((previousValue) => {
          if (previousValue >= 100) {
            setRerun(0);
            return 100;
          }
          return previousValue + Math.random() * 12;
        });
      }, 600);
    }
    return () => clearInterval(interval);
  }, [rerun]);

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      baseTheme="default"
      elements={{
        PROGRESS_BAR: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
        },
        PROGRESS_BAR_LABEL: {
          fontSize: 'fontSize50',
        },
        PROGRESS_BAR_FILL: {
          borderRadius: 'borderRadius0',
          backgroundColor: 'colorBackgroundBrand',
        },

        PROGGER: {
          backgroundColor: 'colorBackgroundPrimaryWeakest',
        },
        PROGGER_LABEL: {
          fontSize: 'fontSize50',
        },
        PROGGER_FILL: {
          borderRadius: 'borderRadius0',
          backgroundColor: 'colorBackgroundBrand',
        },
      }}
    >
      <Box maxWidth="600px">
        <Form>
          <FormControl>
            <ProgressBarLabel htmlFor={progressBarId}>Downloading more ram</ProgressBarLabel>
            <ProgressBar id={progressBarId} aria-describedby={helpTextId} value={value} />
            <HelpText id={helpTextId}>
              Increasing your ram helps your computer run faster. {NumberFormatter.format(value)}% complete.
            </HelpText>
          </FormControl>

          <FormControl>
            <ProgressBarLabel element="PROGGER_LABEL" htmlFor={customProgressBarId}>
              Custom element name
            </ProgressBarLabel>
            <ProgressBar element="PROGGER" id={customProgressBarId} aria-describedby={helpTextId} value={value} />
          </FormControl>

          <Button
            variant="primary"
            onClick={() => {
              setRerun(1);
              setValue(0);
            }}
            disabled={rerun === 1}
          >
            Restart Progress
          </Button>
        </Form>
      </Box>
    </CustomizationProvider>
  );
};
