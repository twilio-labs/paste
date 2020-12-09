import {Popover, PopoverContainer, PopoverButton} from '@twilio-paste/core/popover';
import {Text} from '@twilio-paste/core/text';

const PopoverPreview = () => {
  return (
    <PopoverContainer baseId="popover-example" placement="right-start" visible>
      <PopoverButton variant="primary">✊ Action</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">Black Lives Matter. We stand with the Black community</Text>
      </Popover>
    </PopoverContainer>
  );
};

export {PopoverPreview};
