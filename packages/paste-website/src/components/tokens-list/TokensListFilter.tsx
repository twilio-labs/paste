import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Input} from '@twilio-paste/input';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';
import {Grid, Column} from '@twilio-paste/grid';
import {Select, Option} from '@twilio-paste/select';
import {useUID} from '@twilio-paste/uid-library';
import type {TokensListFilterProps} from './types';

export const TokensListFilter: React.FC<TokensListFilterProps> = (props) => {
  const inputId = useUID();
  const themeControlId = useUID();
  const formatControlId = useUID();

  return (
    <>
      <Box marginBottom="space80">
        <Grid gutter="space40">
          <Column span={6}>
            <Label htmlFor={inputId} id="test-label">
              Filter tokens
            </Label>
            <Input
              type="text"
              id={inputId}
              aria-labelledby="test-label"
              onChange={props.handleInput}
              insertBefore={<FilterIcon decorative={false} title="Description of icon" />}
              placeholder="Filter by token name or value"
            />
          </Column>
          <Column span={3}>
            <Label htmlFor={themeControlId} id="theme-control-label">
              Theme
            </Label>
            <Select
              id={themeControlId}
              defaultValue={localStorage.getItem('themeControl') ?? 'default'}
              onChange={props.handleThemeChange}
              data-cy="theme-control"
            >
              <Option value="default">Default</Option>
              <Option value="dark">Dark</Option>
            </Select>
          </Column>
          <Column span={3}>
            <Label htmlFor={formatControlId} id="format-control-label">
              Format
            </Label>
            <Select
              id={formatControlId}
              defaultValue={localStorage.getItem('format-control') ?? 'css'}
              onChange={props.handleFormatChange}
              data-cy="format-control"
            >
              <Option value="css">CSS</Option>
              <Option value="javascript">Javascript</Option>
            </Select>
          </Column>
        </Grid>
      </Box>
    </>
  );
};
