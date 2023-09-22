import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { ArrowUpIcon } from '@twilio-paste/icons/esm/ArrowUpIcon';

export const ScrollToTopLink: React.FC<{ show: boolean }> = ({ show }): JSX.Element => (
  <Box as="div" position="sticky" bottom="2rem" display={show ? 'flex' : 'none'} justifyContent="end">
    <Button as="a" href="#paste-docs-content-area" variant="secondary">
      Scroll to top <ArrowUpIcon decorative />
    </Button>
  </Box>
);
