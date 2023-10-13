import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Form, FormControl } from "@twilio-paste/form";
import { HelpText } from "@twilio-paste/help-text";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { ProgressBar, ProgressBarLabel } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/ProgressBar",
};

const NumberFormatter = new Intl.NumberFormat("en-US");

export const Default = (): React.ReactNode => {
  const progressBarId = useUID();
  const helpTextId = useUID();
  const [value, setValue] = React.useState<number>(5);
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
          const newValue = previousValue + Math.random() * 12;

          /*
           * intentionally causes another loop for UX so that the
           * submit button is not enabled until the progress fills cleanly
           */
          if (newValue > 100) {
            return 100;
          }
          return newValue;
        });
      }, 600);
    }
    return () => clearInterval(interval);
  }, [rerun]);

  return (
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <ProgressBarLabel htmlFor={progressBarId} valueLabel={`${Math.round(value)}%`}>
            Downloading more ram
          </ProgressBarLabel>
          <ProgressBar
            id={progressBarId}
            aria-describedby={helpTextId}
            value={value}
            valueLabel={`${Math.round(value)}%`}
          />
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

export const ErrorStory = (): React.ReactNode => {
  const progressBarId = useUID();
  const helpTextId = useUID();

  return (
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <ProgressBarLabel htmlFor={progressBarId} valueLabel="50%">
            mtn_sunrise.png
          </ProgressBarLabel>
          <ProgressBar id={progressBarId} aria-describedby={helpTextId} value={50} valueLabel="50%" hasError />
          <HelpText variant="error" id={helpTextId}>
            Upload failed. <Anchor href="#">Retry upload</Anchor>
          </HelpText>
        </FormControl>
      </Form>
    </Box>
  );
};
ErrorStory.displayName = "Error";

export const DisabledStory = (): React.ReactNode => {
  const progressBarId = useUID();
  const helpTextId = useUID();

  return (
    <Box maxWidth="600px">
      <Form>
        <FormControl>
          <ProgressBarLabel disabled htmlFor={progressBarId} valueLabel="50%">
            Campaign registration
          </ProgressBarLabel>
          <ProgressBar id={progressBarId} aria-describedby={helpTextId} value={80} disabled />
          <HelpText variant="default" id={helpTextId}>
            Your profile is in review. You will receive an email about your application status in 3-5 business days.
          </HelpText>
        </FormControl>
      </Form>
    </Box>
  );
};
DisabledStory.displayName = "Disabled";

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
          <ProgressBarLabel htmlFor={progressBarId} valueLabel="21 of 30">
            Friends coming to your birthday
          </ProgressBarLabel>
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
          <ProgressBarLabel htmlFor={progressBarId} valueLabel="21 friends accepted">
            Friends coming to your birthday
          </ProgressBarLabel>
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
