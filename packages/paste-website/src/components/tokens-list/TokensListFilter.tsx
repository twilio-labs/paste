import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {Input} from '@twilio-paste/input';
import {Button} from '@twilio-paste/button';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';
import {CloseCircleIcon} from '@twilio-paste/icons/esm/CloseCircleIcon';
import {Grid, Column} from '@twilio-paste/grid';
import {Select, Option} from '@twilio-paste/select';
import {useUID} from '@twilio-paste/uid-library';

export interface TokensListFilterProps {
  value: string;
  handleThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
  handleFormatChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClearSearch: () => void;
  selectedFormat: string;
  selectedTheme: string;
  shadowOpacity: number;
}

export const TokensListFilter: React.FC<TokensListFilterProps> = ({
  value,
  handleInput,
  handleFormatChange,
  handleThemeChange,
  handleClearSearch,
  selectedFormat,
  selectedTheme,
  shadowOpacity = 0,
}) => {
  const inputId = useUID();
  const themeControlId = useUID();
  const themeControlLabelId = useUID();
  const formatControlId = useUID();
  const formatControlLabelId = useUID();

  return (
    <Box
      marginBottom="space80"
      position="sticky"
      top="0"
      zIndex="zIndex10"
      marginX="spaceNegative40"
      css={{
        '::before': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          right: '8px',
          left: '8px',
          height: '1px',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.8)',
          opacity: shadowOpacity,
        },
      }}
    >
      <Box backgroundColor="colorBackgroundBody" padding="space40" position="relative">
        <Grid gutter="space40" vertical={[true, false, true, false]}>
          <Column span={[12, 6, 12, 6]} data-cy="input-column">
            <Label htmlFor={inputId} id="test-label">
              Filter tokens
            </Label>
            <Input
              type="text"
              id={inputId}
              aria-labelledby="test-label"
              value={value}
              onChange={handleInput}
              insertBefore={<FilterIcon decorative={false} title="Description of icon" color="colorTextIcon" />}
              placeholder="Filter by token name or value"
              insertAfter={
                value.length > 0 ? (
                  <Button variant="secondary_icon" size="reset" onClick={handleClearSearch}>
                    <CloseCircleIcon decorative={false} size="sizeIcon20" title="Clear token search" />
                  </Button>
                ) : null
              }
            />
          </Column>
          <Column span={[12, 6, 12, 6]}>
            <Grid gutter="space40">
              <Column span={6}>
                <Label htmlFor={themeControlId} id={themeControlLabelId}>
                  Theme
                </Label>
                <Select id={themeControlId} value={selectedTheme} onChange={handleThemeChange} data-cy="theme-control">
                  <Option value="default">Default</Option>
                  <Option value="dark">Dark</Option>
                </Select>
              </Column>
              <Column span={6}>
                <Label htmlFor={formatControlId} id={formatControlLabelId}>
                  Format
                </Label>
                <Select
                  id={formatControlId}
                  value={selectedFormat}
                  onChange={handleFormatChange}
                  data-cy="format-control"
                >
                  <Option value="css">CSS</Option>
                  <Option value="javascript">Javascript</Option>
                </Select>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Box>
    </Box>
  );
};
