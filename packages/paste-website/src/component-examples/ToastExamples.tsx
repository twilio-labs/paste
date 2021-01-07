import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Toaster, useToaster, ToastVariants} from '@twilio-paste/toast';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {RadioGroup, Radio} from '@twilio-paste/radio-group';

export const ToasterExample: React.FC = () => {
  const toaster = useToaster();
  const messageID = useUID();
  const dismissAfterID = useUID();
  const [messageText, setMessageText] = React.useState('Nice one, you just pushed a Toast to the Toaster!');
  const [variantStyle, setVariantStyle] = React.useState<ToastVariants>('success');
  const [toastTimeout, setToastTimeout] = React.useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    toaster.push({
      variant: variantStyle,
      message: messageText,
      ...(toastTimeout !== '0' && toastTimeout !== '' && {dismissAfter: Number.parseInt(toastTimeout, 10)}),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Stack orientation="vertical" spacing="space80">
          <div>
            <Label htmlFor={messageID} required>
              Message
            </Label>
            <Input
              id={messageID}
              value={messageText}
              type="text"
              onChange={e => setMessageText(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor={dismissAfterID}>Dismiss after (milliseconds)</Label>
            <Input
              id={dismissAfterID}
              value={toastTimeout}
              type="number"
              onChange={e => setToastTimeout(e.target.value)}
              placeholder="7000"
            />
          </div>
          <div>
            <RadioGroup
              name="variant"
              legend="Variant"
              onChange={newVariant => {
                setVariantStyle(newVariant as ToastVariants);
              }}
              value={variantStyle}
              orientation="horizontal"
              required
            >
              <Radio id={useUID()} required value="error">
                Error
              </Radio>
              <Radio id={useUID()} required value="neutral">
                Neutral
              </Radio>
              <Radio id={useUID()} required value="success">
                Success
              </Radio>
              <Radio id={useUID()} required value="warning">
                Warning
              </Radio>
            </RadioGroup>
          </div>
          <Button type="submit" variant="secondary">
            Add toast
          </Button>
        </Stack>
      </form>
      <Toaster {...toaster} />
    </div>
  );
};
