import {CustomizationProvider} from '@twilio-paste/customization';
import {useTheme} from '@twilio-paste/theme';
import * as React from 'react';

import {Meter} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Meter',
  component: Meter,
};

export const Default = (): React.ReactElement => {
  return <Meter label="Storage space" value={75} id="meter" />;
};

export const HiddenValueLabel = (): React.ReactElement => {
  return <Meter label="Fuel level" value={33} showValueLabel={false} />;
};

export const FormattedValueLabel = (): React.ReactElement => {
  return <Meter label="Account funds" value={80} formatOptions={{style: 'currency', currency: 'USD'}} />;
};

export const CustomValueLabel = (): React.ReactElement => {
  return <Meter label="Storage space used" value={54} minValue={0} maxValue={60} valueLabel="54 of 60GB" />;
};

export const Customized = (): React.ReactElement => {
  const theme = useTheme();
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        METER_WRAPPER: {backgroundColor: 'colorBackgroundDecorative20Weakest'},
        METER: {backgroundColor: 'colorBackgroundError', borderRadius: 'borderRadiusPill'},
        METER_LABEL_WRAPPER: {borderStyle: 'solid', borderColor: 'colorBorderDestructiveStrong'},
        METER_LABEL: {color: 'colorTextErrorStrongest'},
        METER_VALUE_LABEL: {color: 'colorTextDecorative30', fontWeight: 'fontWeightBold'},
        METER_BAR: {backgroundColor: 'colorBackgroundDestructiveStrongest', borderRadius: 'borderRadiusPill'},

        FOO_WRAPPER: {backgroundColor: 'colorBackgroundDecorative20Weakest'},
        FOO: {backgroundColor: 'colorBackgroundError', borderRadius: 'borderRadiusPill'},
        FOO_LABEL_WRAPPER: {borderStyle: 'solid', borderColor: 'colorBorderDestructiveStrong'},
        FOO_LABEL: {color: 'colorTextErrorStrongest'},
        FOO_VALUE_LABEL: {color: 'colorTextDecorative30', fontWeight: 'fontWeightBold'},
        FOO_BAR: {backgroundColor: 'colorBackgroundDestructiveStrongest', borderRadius: 'borderRadiusPill'},
      }}
    >
      <Meter label="Storage space" value={70} data-testid="meter_one" />
      <Meter label="Storage space" value={30} element="FOO" data-testid="meter_two" />
    </CustomizationProvider>
  );
};
