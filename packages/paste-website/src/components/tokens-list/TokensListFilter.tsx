import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Input} from '@twilio-paste/input';
import Tokens from '@twilio-paste/design-tokens/dist/tokens.generic';
import DarkModeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.generic';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';
import {Grid, Column} from '@twilio-paste/grid';
import {Select, Option} from '@twilio-paste/select';
import type {TokensListFilterProps} from './types';

export const TokensListFilter: React.FC<TokensListFilterProps> = (props) => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    props.setFilterString(filter);
  };

  return (
    <>
      <Box marginBottom="space80">
        <Grid gutter="space40">
          <Column span={6}>
            <Label htmlFor="test" id="test-label">
              Filter tokens
            </Label>
            <Input
              type="text"
              id="test"
              aria-labelledby="test-label"
              onChange={handleInput}
              insertBefore={<FilterIcon decorative={false} title="Description of icon" />}
              placeholder="Filter by token name or value"
            />
          </Column>
          <Column span={3}>
            <Label htmlFor="theme-control" id="theme-control-label">
              Theme
            </Label>
            <Select
              id="theme-control"
              defaultValue={props.theme === 'dark' ? 'dark' : 'default'}
              onChange={(evt) => {
                if (evt.target.value === 'dark') {
                  props.setSelectedTheme('dark');
                  // @ts-ignore
                  props.setTokens(DarkModeTokens.tokens);
                }
                if (evt.target.value === 'default') {
                  props.setSelectedTheme('default');
                  // @ts-ignore
                  props.setTokens(Tokens.tokens);
                }
              }}
            >
              <Option value="default">Default</Option>
              <Option value="dark">Dark</Option>
            </Select>
          </Column>
          <Column span={3}>
            <Label htmlFor="format-control" id="format-control-label">
              Format
            </Label>
            <Select
              id="format-control"
              onChange={(evt) => {
                if (evt.target.value === 'javascript') props.setUseJavascriptNames(true);
                else props.setUseJavascriptNames(false);
              }}
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
