import {Badge} from '@twilio-paste/badge';
import {Box} from '@twilio-paste/box';
import {NewIcon} from '@twilio-paste/icons/esm/NewIcon';

export const DarkModeBadge = (): JSX.Element => (
  <Box display="flex" alignItems="center" marginLeft="space40">
    <Badge as="a" variant="new" href="/theme/dark-theme">
      <NewIcon size="sizeIcon10" decorative />
      New
    </Badge>
  </Box>
);
