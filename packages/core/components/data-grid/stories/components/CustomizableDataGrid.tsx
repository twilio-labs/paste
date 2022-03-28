import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {CustomizationProvider} from '@twilio-paste/customization';
import {PlainDataGrid} from './PlainDataGrid';

export const customElementStyles = (prefix = 'DATA_GRID'): {[key: string]: any} => ({
  [prefix]: {
    fontSize: 'fontSize20',
    borderColor: 'colorBorderDark',
  },
  [`${prefix}_HEAD`]: {
    backgroundColor: 'colorBackgroundDark',
    fontWeight: 'fontWeightSemibold',
    borderColor: 'colorBorderDark',
  },
  [`${prefix}_FOOT`]: {
    backgroundColor: 'colorBackgroundDark',
    fontWeight: 'fontWeightSemibold',
    borderColor: 'colorBorderDark',
  },
  [`${prefix}_HEADER`]: {
    padding: 'space10',
  },
  [`${prefix}_ROW`]: {
    borderColor: 'colorBorderDark',
    // _even
    '&:nth-of-type(2n)': {
      backgroundColor: 'colorBackgroundBody',
    },
  },
  [`${prefix}_CELL`]: {
    padding: 'space10',
  },
});

export const CustomizableDataGrid: React.FC = () => {
  /* eslint-disable react/no-array-index-key */
  return (
    <Stack orientation="vertical" spacing="space120">
      <Heading as="h2" variant="heading20">
        Default element
      </Heading>
      <CustomizationProvider baseTheme="default" elements={customElementStyles()}>
        <PlainDataGrid />
      </CustomizationProvider>

      <Heading as="h2" variant="heading20">
        Custom element
      </Heading>
      <CustomizationProvider baseTheme="default" elements={customElementStyles('FOO')}>
        <PlainDataGrid element="FOO" />
      </CustomizationProvider>
    </Stack>
  );
  /* eslint-enable react/no-array-index-key */
};
