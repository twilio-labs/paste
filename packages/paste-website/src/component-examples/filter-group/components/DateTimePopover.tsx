/* DISCLAIMER: this is an example, not meant to be used in production */

import { ErrorMessage } from '@hookform/error-message';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { DatePicker } from '@twilio-paste/date-picker';
import { Heading } from '@twilio-paste/heading';
import { HelpText } from '@twilio-paste/help-text';
import { CalendarIcon } from '@twilio-paste/icons/esm/CalendarIcon';
import { Label } from '@twilio-paste/label';
import { Popover, PopoverButton, PopoverContainer, usePopoverState } from '@twilio-paste/popover';
import { Text } from '@twilio-paste/text';
import { TimePicker } from '@twilio-paste/time-picker';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import type { DateTimePopoverProps } from '../types';

export const DateTimePopover: React.FC<React.PropsWithChildren<DateTimePopoverProps>> = ({
  onApply,
  register,
  errors,
}) => {
  const startId = `start-date-${useUID()}`;
  const endId = `end-date-${useUID()}`;
  const popoverId = `date-popover-${useUID()}`;

  const popover = usePopoverState({ baseId: popoverId });

  return (
    <PopoverContainer state={popover}>
      <PopoverButton variant="link" data-cy="custom-filter-group-popover-button">
        <CalendarIcon decorative={false} title="Set custom date/time range" />
      </PopoverButton>
      <Popover aria-label="Custom date range" data-cy="custom-date-popover">
        <Heading as="h2" variant="heading40">
          Custom date range
        </Heading>
        <Text as="p" color="colorTextWeak" marginBottom="space70">
          All dates/times in UTC. Usage data available up to 7 days.
        </Text>
        <Box display="flex" flexDirection="column" marginBottom="space50" rowGap="space50">
          <Box display="flex" flexDirection="row" columnGap="space50">
            <Box width="100%">
              <Label htmlFor={`${startId}-date`} required>
                Start date
              </Label>
              <DatePicker
                id={`${startId}-date`}
                aria-describedby={`${startId}-date-error`}
                required
                {...register('customDate.startDate', { required: 'Start date is required.' })}
              />
              <ErrorMessage
                errors={errors}
                name="customDate.startDate"
                render={({ message }): React.ReactNode => (
                  <HelpText variant="error" id={`${startId}-date-error`} data-cy="start-date-error">
                    {message}
                  </HelpText>
                )}
              />
            </Box>
            <Box width="100%">
              <Label htmlFor={`${startId}-time`} required>
                Start time
              </Label>
              <TimePicker
                id={`${startId}-time`}
                required
                {...register('customDate.startTime', { required: 'Start time is required.' })}
              />
              <ErrorMessage
                errors={errors}
                name="customDate.startTime"
                render={({ message }) => (
                  <HelpText variant="error" id={`${startId}-time-error`} data-cy="start-time-error">
                    {message}
                  </HelpText>
                )}
              />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" columnGap="space50">
            <Box width="100%">
              <Label htmlFor={`${endId}-date`} required>
                End date
              </Label>
              <DatePicker
                id={`${endId}-date`}
                aria-describedby={`${endId}-date-error`}
                required
                {...register('customDate.endDate', { required: 'End date is required.' })}
              />
              <ErrorMessage
                errors={errors}
                name="customDate.endDate"
                render={({ message }): React.ReactNode => (
                  <HelpText variant="error" id={`${endId}-date-error`} data-cy="end-date-error">
                    {message}
                  </HelpText>
                )}
              />
            </Box>
            <Box width="100%">
              <Label htmlFor={`${endId}-time`} required>
                End time
              </Label>
              <TimePicker
                id={`${endId}-time`}
                required
                {...register('customDate.endTime', { required: 'End time is required.' })}
              />
              <ErrorMessage
                errors={errors}
                name="customDate.endTime"
                render={({ message }) => (
                  <HelpText variant="error" id={`${endId}-time-error`} data-cy="end-time-error">
                    {message}
                  </HelpText>
                )}
              />
            </Box>
          </Box>
        </Box>
        <Button variant="primary" onClick={onApply(popover.hide)} data-cy="custom-filter-group-popover-apply-button">
          Apply
        </Button>
      </Popover>
    </PopoverContainer>
  );
};
