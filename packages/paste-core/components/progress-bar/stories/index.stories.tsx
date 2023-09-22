import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { Form, FormControl } from '@twilio-paste/form';
import { HelpText } from '@twilio-paste/help-text';
import { Label } from '@twilio-paste/label';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { ProgressBar, ProgressBarLabel } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/ProgressBar',
};

const NumberFormatter = new Intl.NumberFormat('en-US');

export const Default = (): React.ReactNode => {
  const progressBarId = useUID();
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
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <ProgressBarLabel htmlFor={progressBarId}>Downloading more ram</ProgressBarLabel>
          <ProgressBar id={progressBarId} aria-describedby={helpTextId} value={value} />
          <HelpText id={helpTextId}>
            Increasing your ram helps your computer run faster. {NumberFormatter.format(value)}% complete.
          </HelpText>
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
  );
};

export const Indeterminate = (): React.ReactNode => {
  const progressBarId = useUID();
  const helpTextId = useUID();

  return (
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <ProgressBarLabel htmlFor={progressBarId}>Downloading more ram</ProgressBarLabel>
          <ProgressBar id={progressBarId} aria-describedby={helpTextId} isIndeterminate />
          <HelpText id={helpTextId}>Increasing your ram helps your computer run faster.</HelpText>
        </FormControl>
      </Form>
    </Box>
  );
};

export const LabelingApproaches = (): React.ReactNode => {
  const labelId = useUID();

  return (
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <Box id={labelId}>Using aria-labelledby</Box>
          <ProgressBar aria-labelledby={labelId} value={30} />

          <Box marginTop="space40">Using aria-label</Box>
          <ProgressBar aria-label="Using aria-label" value={50} />
        </FormControl>
      </Form>
    </Box>
  );
};

export const CustomRange = (): React.ReactNode => {
  const progressBarId = useUID();

  return (
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <ProgressBarLabel htmlFor={progressBarId}>Friends coming to your birthday</ProgressBarLabel>
          <ProgressBar id={progressBarId} value={21} maxValue={30} />
        </FormControl>
      </Form>
    </Box>
  );
};

export const CustomValueText = (): React.ReactNode => {
  const progressBarId = useUID();

  return (
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <ProgressBarLabel htmlFor={progressBarId}>Friends coming to your birthday</ProgressBarLabel>
          <ProgressBar
            id={progressBarId}
            value={21}
            maxValue={30}
            valueLabel="21 friends accepted"
            formatOptions={{ maximumFractionDigits: 0, minimumFractionDigits: 0 }}
          />
        </FormControl>
      </Form>
    </Box>
  );
};
