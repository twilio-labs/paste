import * as React from 'react';
import { Popover, PopoverContainer, PopoverButton } from '@twilio-paste/core/popover';
import { Text } from '@twilio-paste/core/text';

const PopoverPreview = (): JSX.Element => {
  return (
    <PopoverContainer baseId="popover-example" placement="right-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">Black Lives Matter. We stand with the Black community.</Text>
      </Popover>
    </PopoverContainer>
  );
};

export { PopoverPreview };
