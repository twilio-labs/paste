import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { HelpText } from "@twilio-paste/help-text";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { Meter, MeterLabel } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Meter",
  component: Meter,
};

export const Default = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <Box width="size20">
      <MeterLabel htmlFor={meterId} valueLabel="75%">
        Storage used
      </MeterLabel>
      <Meter value={75} id={meterId} />
    </Box>
  );
};

export const Full = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <Box width="size20">
      <MeterLabel htmlFor={meterId} valueLabel="100%">
        Storage used
      </MeterLabel>
      <Meter value={100} id={meterId} />
    </Box>
  );
};

export const Empty = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <Box width="size20">
      <MeterLabel htmlFor={meterId} valueLabel="0%">
        Storage used
      </MeterLabel>
      <Meter value={0} id={meterId} />
    </Box>
  );
};

export const MinMax = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <Box width="size40">
      <MeterLabel htmlFor={meterId} valueLabel="49GB">
        Storage space used
      </MeterLabel>
      <Meter value={49} minValue={0} maxValue={64} minLabel="0GB" maxLabel="64GB" id={meterId} />
    </Box>
  );
};

export const MinOnly = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <Box width="size20">
      <MeterLabel htmlFor={meterId} valueLabel="75%">
        Storage space
      </MeterLabel>
      <Meter value={75} minValue={0} minLabel="0%" id={meterId} />
    </Box>
  );
};

export const MaxOnly = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <Box width="size20">
      <MeterLabel htmlFor={meterId} valueLabel="75%">
        Storage space
      </MeterLabel>
      <Meter value={75} maxValue={100} maxLabel="100%" id={meterId} />
    </Box>
  );
};

export const AriaLabel = (): React.ReactElement => {
  const meterId = useUID();
  return (
    <Box width="size30">
      <Meter aria-label="Storage space" id={meterId} value={33} />
    </Box>
  );
};

export const CustomLabel = (): React.ReactElement => {
  const labelId = useUID();
  const meterId = useUID();
  return (
    <Box width="size30" display="flex" flexDirection="column" rowGap="space20">
      <legend id={labelId}>Storage space used</legend>
      <Meter aria-labelledby={labelId} id={meterId} value={54} minValue={0} maxValue={60} />
    </Box>
  );
};

export const WithHelpText = (): React.ReactElement => {
  const meterId = useUID();
  const helpTextId = useUID();
  return (
    <Box width="size40">
      <MeterLabel htmlFor={meterId} valueLabel="54GB">
        Storage space used
      </MeterLabel>
      <Meter
        id={meterId}
        value={54}
        minValue={0}
        maxValue={60}
        aria-describedby={helpTextId}
        minLabel="0GB"
        maxLabel="64GB"
      />
      <HelpText id={helpTextId}>Additional storage may be purchased on your account page.</HelpText>
    </Box>
  );
};

export const Wrapped = (): React.ReactElement => {
  const meterId = useUID();
  const helpTextId = useUID();
  return (
    <Box width="size20">
      <MeterLabel htmlFor={meterId} valueLabel="54,730 is the current value of this Meter">
        Storage space used on this account that belongs to you
      </MeterLabel>
      <Meter
        id={meterId}
        value={54730}
        minValue={0}
        maxValue={600000}
        aria-describedby={helpTextId}
        minLabel="000000000000GB"
        maxLabel="100000000000GB"
      />
      <HelpText id={helpTextId}>Helpful text</HelpText>
    </Box>
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
        METER_LABEL_WRAPPER: { borderStyle: "solid", borderWidth: "borderWidth20" },
        METER_LABEL: { color: "colorTextError" },
        METER_LABEL_VALUE_LABEL: { color: "colorTextDecorative10" },
        METER: {
          borderStyle: "solid",
          borderWidth: "borderWidth30",
          borderColor: "colorBorderDecorative20Weaker",
          borderRadius: "borderRadius10",
        },
        METER_VALUE_LABEL: { color: "colorTextDecorative30", fontWeight: "fontWeightBold" },
        METER_BAR: { backgroundColor: "colorBackgroundDestructiveStrongest", borderRadius: "borderRadius10" },
        METER_FILL: { backgroundColor: "colorBackgroundDecorative30Weakest", borderRadius: "borderRadius10" },
        METER_MIN_MAX_WRAPPER: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        METER_MIN: { color: "colorTextBrandHighlight" },
        METER_MAX: { color: "colorTextIconAvailable" },

        FOO_LABEL_WRAPPER: { borderStyle: "solid", borderWidth: "borderWidth20" },
        FOO_LABEL: { color: "colorTextError" },
        FOO_LABEL_VALUE_LABEL: { color: "colorTextDecorative10" },
        FOO: {
          borderStyle: "solid",
          borderWidth: "borderWidth30",
          borderColor: "colorBorderDecorative20Weaker",
          borderRadius: "borderRadius10",
        },
        FOO_VALUE_LABEL: { color: "colorTextDecorative30", fontWeight: "fontWeightBold" },
        FOO_BAR: { backgroundColor: "colorBackgroundDestructiveStrongest", borderRadius: "borderRadius10" },
        FOO_FILL: { backgroundColor: "colorBackgroundDecorative30Weakest", borderRadius: "borderRadius10" },
        FOO_MIN_MAX_WRAPPER: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        FOO_MIN: { color: "colorTextBrandHighlight" },
        FOO_MAX: { color: "colorTextIconAvailable" },
      }}
    >
      <Box width="size30" display="flex" flexDirection="column" rowGap="space60">
        <Box>
          <MeterLabel htmlFor={meterOneId} data-testid="meter_label_one" valueLabel="70">
            Storage space
          </MeterLabel>
          <Meter
            id={meterOneId}
            value={70}
            minValue={0}
            maxValue={100}
            minLabel="0"
            maxLabel="100"
            data-testid="meter_one"
          />
        </Box>
        <Box>
          <MeterLabel htmlFor={meterTwoId} data-testid="meter_label_two" valueLabel="30" element="FOO_LABEL">
            Storage space
          </MeterLabel>
          <Meter
            id={meterTwoId}
            value={30}
            minValue={0}
            maxValue={100}
            minLabel="0"
            maxLabel="100"
            element="FOO"
            data-testid="meter_two"
          />
        </Box>
      </Box>
    </CustomizationProvider>
  );
};
