import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';

const ExperimentMobileButton = (): JSX.Element => {
  return (
    <>
      <Box
        alignItems="center"
        backgroundColor="colorBackgroundBody"
        display={['flex', 'none']}
        justifyContent="center"
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        opacity="0.80"
      />
      <Box
        alignItems="center"
        display={['flex', 'none']}
        justifyContent="center"
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
      >
        <Button as="a" href="https://codesandbox.io/s/pizza-toppings-d8u21" variant="primary">
          Experiment with code
        </Button>
      </Box>
    </>
  );
};

export { ExperimentMobileButton };
