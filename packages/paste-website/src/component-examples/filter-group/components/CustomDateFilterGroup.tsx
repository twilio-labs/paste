/* DISCLAIMER: this is an example, not meant to be used in production */

import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { ExportIcon } from '@twilio-paste/icons/esm/ExportIcon';
import { FilterIcon } from '@twilio-paste/icons/esm/FilterIcon';
import { SearchIcon } from '@twilio-paste/icons/esm/SearchIcon';
import { Input } from '@twilio-paste/input';
import { Label } from '@twilio-paste/label';
import { Option, Select } from '@twilio-paste/select';
import { Separator } from '@twilio-paste/separator';
import { useUID } from '@twilio-paste/uid-library';
import isEqual from 'lodash/isEqual';
import * as React from 'react';
import { useForm, useFormState } from 'react-hook-form';

import { DATE_TIME_RANGES, FORM_DEFAULT_VALUES, ROOM_TYPES } from '../constants';
import { filterByDateTimeRange, filterByRoomType, filterBySearchString, isEndDateBeforeStartDate } from '../helpers';
import type { DateTimeFormValues, FilterGroupDateTimeProps } from '../types';
import { DateTimePopover } from './DateTimePopover';
import { EmptyState } from './EmptyState';
import { SampleDataGrid } from './SampleDataGrid';

// Note: update the codesandboxes if update this
export const CustomDateFilterGroup: React.FC<React.PropsWithChildren<FilterGroupDateTimeProps>> = ({ data }) => {
  const dateRangesId = `quality-${useUID()}`;
  const roomTypesId = `type-${useUID()}`;

  const { control, handleSubmit, register, reset, resetField, setError, setValue, watch } = useForm<DateTimeFormValues>(
    {
      defaultValues: FORM_DEFAULT_VALUES,
      criteriaMode: 'all',
    },
  );
  const { errors } = useFormState({
    control,
  });

  const [areButtonsDisabled, setAreButtonsDisabled] = React.useState(true);
  const [filteredTableData, setFilteredTableData] = React.useState(data);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { range, customDate } = value;

      if (type === 'change') {
        setAreButtonsDisabled(false);

        if (name?.includes('customDate') && range !== 'custom') {
          setValue('range', 'custom');
        }

        if (name === 'customDate.endDate') {
          if (customDate?.startDate && customDate?.startTime && customDate?.endDate && customDate?.endTime) {
            const isEndDateInvalid = isEndDateBeforeStartDate(
              customDate.startDate,
              customDate.startTime,
              customDate.endDate,
              customDate.endTime,
            );

            if (isEndDateInvalid) {
              setError('customDate.endDate', {
                type: 'custom',
                message: 'End date has to be after the start date.',
              });
            } else return;
          } else return;
        }

        if (name === 'range' && !isEqual(customDate, FORM_DEFAULT_VALUES.customDate)) {
          resetField('customDate');
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, resetField, setError]);

  const handleApplyFilters = (callback?: VoidFunction) => (formData: DateTimeFormValues) => {
    const { search, type, range, customDate } = formData;
    const { startDate, startTime, endDate, endTime } = customDate;

    const filtered = data.filter(({ uniqueName, sid, roomType, dateCompleted }) => {
      return (
        filterBySearchString(uniqueName, sid, search) &&
        filterByRoomType(roomType, type) &&
        filterByDateTimeRange(dateCompleted, range, startDate, startTime, endDate, endTime)
      );
    });
    setFilteredTableData(filtered);
    setAreButtonsDisabled(true);
    reset(undefined, {
      keepValues: true,
      keepTouched: false,
      keepSubmitCount: true,
    });
    if (callback) callback();
  };

  const handleClearAll = (): void => {
    reset(undefined, {
      keepTouched: false,
      keepSubmitCount: true,
    });
    setFilteredTableData(data);
    setAreButtonsDisabled(true);
  };

  return (
    <Box paddingBottom="space70" as="form" onSubmit={handleSubmit(handleApplyFilters())}>
      <Box display="flex" alignItems="flex-end" columnGap="space50">
        <Box>
          <Label htmlFor={roomTypesId}>Room type</Label>
          <Select id={roomTypesId} {...register('type')}>
            {ROOM_TYPES.map((type) => (
              <Option value={type} key={type}>
                {type}
              </Option>
            ))}
          </Select>
        </Box>
        <Box>
          <Label htmlFor={dateRangesId}>Date/time range</Label>
          <Select
            id={dateRangesId}
            {...register('range')}
            insertAfter={
              <DateTimePopover
                onApply={(cb) => handleSubmit(handleApplyFilters(cb))}
                register={register}
                errors={errors}
              />
            }
          >
            {DATE_TIME_RANGES.map((range) => (
              <Option value={range.value} key={range.value}>
                {range.name}
              </Option>
            ))}
          </Select>
        </Box>
        <Box display="flex" columnGap="space50" paddingLeft="space40">
          <Button
            variant="primary"
            aria-label="Apply filters"
            disabled={areButtonsDisabled}
            onClick={handleSubmit(handleApplyFilters())}
            data-cy="custom-filter-group-apply-button"
          >
            <FilterIcon decorative />
            Apply
          </Button>
          <Button
            variant="link"
            disabled={areButtonsDisabled}
            onClick={handleClearAll}
            data-cy="custom-filter-group-clear-button"
          >
            Clear all
          </Button>
        </Box>
      </Box>
      <Box paddingY="space50">
        <Separator orientation="horizontal" />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box width="size40">
          <Input
            aria-label="Search"
            type="text"
            placeholder="Search by SID or unique name"
            {...register('search')}
            insertAfter={
              <Button
                variant="link"
                onClick={handleSubmit(handleApplyFilters())}
                data-cy="custom-filter-group-search-button"
              >
                <SearchIcon decorative={false} title="Search" />
              </Button>
            }
          />
        </Box>
        <Button variant="secondary">
          <ExportIcon decorative />
          Export CSV
        </Button>
      </Box>
      <Box paddingTop="space50">
        {filteredTableData.length > 0 ? (
          <SampleDataGrid data={filteredTableData} showDateTime />
        ) : (
          <EmptyState handleClearAll={handleClearAll} />
        )}
      </Box>
    </Box>
  );
};
