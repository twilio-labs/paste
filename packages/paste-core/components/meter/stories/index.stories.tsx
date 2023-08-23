import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import {useUID} from '@twilio-paste/uid-library';
import * as React from 'react';

import {Meter, MeterLabel} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Meter',
  component: Meter,
};

export const Default = (): React.ReactElement => {
  const meterId = 'meter';
  return (
    <>
      <MeterLabel htmlFor={meterId}>Storage space</MeterLabel>
      <Meter value={75} id={meterId} />
    </>
  );
};

export const HiddenValueLabel = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <>
      <MeterLabel htmlFor={meterId}>Fuel level</MeterLabel>
      <Meter id={meterId} value={33} showValueLabel={false} />
    </>
  );
};

export const FormattedValueLabel = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <>
      <MeterLabel htmlFor={meterId}>Account funds</MeterLabel>
      <Meter id={meterId} value={80} formatOptions={{style: 'currency', currency: 'USD'}} />
    </>
  );
};

export const CustomValueLabel = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <>
      <MeterLabel htmlFor={meterId}>Storage space used</MeterLabel>
      <Meter id={meterId} value={54} minValue={0} maxValue={60} valueLabel="54 of 60GB" />
    </>
  );
};

export const Customized = (): React.ReactElement => {
  const theme = useTheme();
  const meterOneId = useUID();
  const meterTwoId = useUID();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        METER_LABEL_WRAPPER: {borderStyle: 'solid', borderColor: 'colorBorderDestructiveStrong'},
        METER_LABEL: {color: 'colorTextErrorStrongest'},
        METER: {
          borderStyle: 'solid',
          borderWidth: 'borderWidth30',
          borderColor: 'colorBorderDecorative20Weaker',
          borderRadius: 'borderRadiusPill',
        },
        METER_VALUE_LABEL_WRAPPER: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
        METER_VALUE_LABEL: {color: 'colorTextDecorative30', fontWeight: 'fontWeightBold'},
        METER_BAR: {backgroundColor: 'colorBackgroundDestructiveStrongest', borderRadius: 'borderRadiusPill'},
        METER_FILL: {backgroundColor: 'colorBackgroundDecorative30Weakest', borderRadius: 'borderRadiusPill'},

        FOO_LABEL_WRAPPER: {borderStyle: 'solid', borderColor: 'colorBorderDestructiveStrong'},
        FOO_LABEL: {color: 'colorTextErrorStrongest'},
        FOO: {
          borderStyle: 'solid',
          borderWidth: 'borderWidth30',
          borderColor: 'colorBorderDecorative20Weaker',
          borderRadius: 'borderRadiusPill',
        },
        FOO_VALUE_LABEL_WRAPPER: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
        FOO_VALUE_LABEL: {color: 'colorTextDecorative30', fontWeight: 'fontWeightBold'},
        FOO_BAR: {backgroundColor: 'colorBackgroundDestructiveStrongest', borderRadius: 'borderRadiusPill'},
        FOO_FILL: {backgroundColor: 'colorBackgroundDecorative30Weakest', borderRadius: 'borderRadiusPill'},
      }}
    >
      <MeterLabel htmlFor={meterOneId} data-testid="meter_label_one">
        Storage space
      </MeterLabel>
      <Meter id={meterOneId} value={70} data-testid="meter_one" />
      <MeterLabel htmlFor={meterTwoId} data-testid="meter_label_two" element="FOO_LABEL">
        Storage space
      </MeterLabel>
      <Meter id={meterTwoId} value={30} element="FOO" data-testid="meter_two" />
    </CustomizationProvider>
  );
};
