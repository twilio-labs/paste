import * as React from 'react';
import { Button } from '@twilio-paste/core/button';
import { Stack } from '@twilio-paste/core/stack';

const ButtonPreview = (): JSX.Element => {
  return (
    <Stack orientation="horizontal" spacing="space30">
      <Button variant="primary">Action</Button>
      <Button variant="secondary">Action</Button>
      <Button variant="destructive">Action</Button>
      <Button variant="destructive_secondary">Action</Button>
      <Button variant="primary" size="small">
        Action
      </Button>
      <Button variant="secondary" size="small">
        Action
      </Button>
      <Button variant="destructive" size="small">
        Action
      </Button>
      <Button variant="destructive_secondary" size="small">
        Action
      </Button>
      <Button variant="link">Action</Button>
      <Button variant="destructive_link">Action</Button>
    </Stack>
  );
};

export { ButtonPreview };
