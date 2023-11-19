import type { StoryFn } from "@storybook/react";
import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Combobox } from "@twilio-paste/combobox";
import { CustomizationProvider } from "@twilio-paste/customization";
import { HelpText } from "@twilio-paste/help-text";
import { Label } from "@twilio-paste/label";
import { Stack } from "@twilio-paste/stack";
import { useTheme } from "@twilio-paste/theme";
import { useUID, useUIDSeed } from "@twilio-paste/uid-library";
import * as React from "react";

import { DatePicker, formatReturnDate } from "../src";
import type { DatePickerProps } from "../src";

export const DefaultDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>What day did the Stonewall riots begin?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>
        Enter a date above.&nbsp;
        <Anchor
          href="https://civilrights.org/2009/06/22/stonewall-riots-the-beginning-of-the-lgbt-movement/"
          showExternal
        >
          Read more about Stonewall
        </Anchor>
      </HelpText>
    </>
  );
};

export const InverseDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse">
        What day did the Stonewall riots begin?
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} id={uidDP} {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Enter a date above.&nbsp;
      </HelpText>
    </Box>
  );
};

export const RequiredDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} required>
        When was the abolition of slavery announced in Galveston Bay, Texas (also known as Juneteenth)?
      </Label>
      <DatePicker required id={uidDP} aria-describedby={uidHT} {...props} />
      <HelpText id={uidHT}>
        Enter a date above.&nbsp;
        <Anchor href="https://nmaahc.si.edu/blog-post/historical-legacy-juneteenth" showExternal>
          Read more about Juneteenth
        </Anchor>
      </HelpText>
    </>
  );
};

export const InverseRequiredDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse" required>
        When was the abolition of slavery announced in Galveston Bay, Texas (also known as Juneteenth)?
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} id={uidDP} required {...props} />
      <HelpText variant="inverse" id={uidHT}>
        Enter a date above.&nbsp;
      </HelpText>
    </Box>
  );
};

export const ErrorDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When did the Jallianwala Bagh massacre take place?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} hasError {...props} />
      <HelpText id={uidHT} variant="error">
        Enter a date above.&nbsp;
        <Anchor
          href="https://www.hindustantimes.com/india-news/jallianwala-bagh-massacre-here-is-how-the-deadly-incident-transpired-102-years-ago-101618276752335.html"
          showExternal
        >
          Read more about the Jallianwala Bagh massacre
        </Anchor>
      </HelpText>
    </>
  );
};

export const InverseErrorDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse">
        When did the Jallianwala Bagh massacre take place?
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} hasError id={uidDP} {...props} />
      <HelpText variant="error_inverse" id={uidHT}>
        Enter a date above.&nbsp;
      </HelpText>
    </Box>
  );
};

export const DisabledDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP} disabled>
        When did the Supreme Court ban anti-miscegenation laws (in Loving v. Virginia)?
      </Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} disabled defaultValue="1967-06-12" {...props} />
      <HelpText id={uidHT}>
        <Anchor href="https://www.oyez.org/cases/1966/395" showExternal>
          Read more about Loving Day
        </Anchor>
      </HelpText>
    </>
  );
};

export const InverseDisabledDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse" disabled>
        When did the Supreme Court ban anti-miscegenation laws (in Loving v. Virginia)?
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} disabled id={uidDP} defaultValue="1967-06-12" {...props} />
      <HelpText variant="inverse" id={uidHT} />
    </Box>
  );
};

export const ReadonlyDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>In what month was the Combahee River Collective (CRC) Statement published?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} readOnly defaultValue="1977-04-01" {...props} />
      <HelpText id={uidHT}>
        <Anchor href="https://combaheerivercollective.weebly.com/" showExternal>
          Read more about the CRC
        </Anchor>
      </HelpText>
    </>
  );
};

export const InverseReadonlyDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
      <Label htmlFor={uidDP} variant="inverse">
        In what month was the Combahee River Collective Statement published?
      </Label>
      <DatePicker variant="inverse" aria-describedby={uidHT} readOnly id={uidDP} defaultValue="1977-04-01" {...props} />
    </Box>
  );
};

export const DefaultValueDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>
        When was Planned Parenthood (PPFA) founded in the US (under the name American Birth Control League)?
      </Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} defaultValue="1916-10-16" {...props} />
      <HelpText id={uidHT}>
        <Anchor href="https://www.plannedparenthood.org/about-us/who-we-are/our-history" showExternal>
          Read more about PPFA
        </Anchor>
      </HelpText>
    </>
  );
};

export const OnChangeDatePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const [value, setValue] = React.useState("");
  const [dateFormat, setDateFormat] = React.useState("MM dd yy");
  const uidDP = useUID();
  const uidHT = useUID();
  const dateFormatOptions = ["MM dd yyyy", "MMMM do yyyy", "EEEEEE MMM do yy", "MM/dd/yyyy"];
  const handleChange = (val: string, format: string): string => {
    setValue(formatReturnDate(val, format));
    return value;
  };
  return (
    <>
      <Box marginBottom="space60">
        <Combobox
          items={dateFormatOptions}
          labelText="Return date format:"
          onInputValueChange={({ inputValue }) => {
            if (inputValue !== undefined) setDateFormat(inputValue);
          }}
        />
      </Box>
      <Label htmlFor={uidDP}>On what day was Apartheid legislation repealed in South Africa?</Label>
      <DatePicker
        id={uidDP}
        aria-describedby={uidHT}
        onChange={(evt) => handleChange(evt.target.value, dateFormat)}
        {...props}
      />
      <HelpText id={uidHT}>
        Enter a date above.&nbsp;
        <Anchor href="https://www.sahistory.org.za/article/history-apartheid-south-africa" showExternal>
          Read more about Apartheid in South Africa
        </Anchor>
      </HelpText>
      <Box marginTop="space60">
        <b>Return value </b>(will only change when the onChange event fires): {value}
      </Box>
    </>
  );
};

export const LabelOnlyPicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When does this year&apos;s LGBTQ+ Pride month begin in the US?</Label>
      <DatePicker id={uidDP} {...props} />
    </>
  );
};

export const DateRangePicker: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const [startDate, setStartDate] = React.useState("");
  const startUidDP = useUID();
  const endUidDP = useUID();
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box>
        <Label htmlFor={startUidDP}>Start date</Label>
        <DatePicker id={startUidDP} onChange={(evt) => setStartDate(evt.target.value)} {...props} />
      </Box>
      <Box>
        <Label htmlFor={endUidDP}>End date</Label>
        <DatePicker id={endUidDP} min={startDate} {...props} />
      </Box>
    </Stack>
  );
};

export const StackOfPickers: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDPOne = useUID();
  const uidHTOne = useUID();
  const uidDPTwo = useUID();
  const uidHTTwo = useUID();
  return (
    <Stack orientation="vertical" spacing="space80">
      <Box>
        <Label htmlFor={uidDPOne}>When was the NAACP Legal Defense Fund (LDF) founded?</Label>
        <DatePicker id={uidDPOne} aria-describedby={uidHTOne} {...props} />
        <HelpText id={uidHTOne}>
          Enter a date above.&nbsp;
          <Anchor href="https://www.naacpldf.org/about-us/history/" showExternal>
            Read more about the NAACP LDF
          </Anchor>
        </HelpText>
      </Box>
      <Box>
        <Label htmlFor={uidDPTwo}>
          When did Thurgood Marshall become the first African American Supreme Court Justice?
        </Label>
        <DatePicker id={uidDPTwo} aria-describedby={uidHTTwo} {...props} />
        <HelpText id={uidHTTwo}>
          Enter a date above.&nbsp;
          <Anchor
            href="https://constitutioncenter.org/blog/thurgood-marshalls-unique-supreme-court-legacy"
            showExternal
          >
            Read more about Marshall&apos;s legacy
          </Anchor>
        </HelpText>
      </Box>
    </Stack>
  );
};

export const DatePickerWithMinAndMax: React.FC<React.PropsWithChildren<DatePickerProps>> = (props) => {
  const uidDP = useUID();
  const uidHT = useUID();
  return (
    <>
      <Label htmlFor={uidDP}>When was Grace Hopper awarded the Presidential Medal of Freedom?</Label>
      <DatePicker id={uidDP} aria-describedby={uidHT} min="2016-10-15" max="2016-10-25" {...props} />
      <HelpText id={uidHT}>
        Hint: it was awarded posthumously by President Obama.&nbsp;
        <Anchor
          href="https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service"
          showExternal
        >
          Read more about Grace Hopper
        </Anchor>
      </HelpText>
    </>
  );
};

export const CustomizedDatePicker: StoryFn = (_args, { parameters: { isTestEnvironment }, props }) => {
  const activeTheme = useTheme();
  const uidSeed = useUIDSeed();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={activeTheme}
      elements={{
        DATEPICKER: {
          backgroundColor: "colorBackgroundPrimaryWeakest",
          borderRadius: "borderRadius30",
          boxShadow: "none",
          borderStyle: "solid",
          borderWidth: "borderWidth10",
          borderColor: "colorBorderPrimary",
          variants: {
            default: {
              backgroundColor: "colorBackgroundPrimaryWeakest",
            },
            inverse: {
              backgroundColor: "colorBackgroundDestructiveWeakest",
              borderColor: "colorBorderDestructive",
            },
          },
        },
        DATEPICKER_ELEMENT: {
          color: "colorTextLinkStronger",
          padding: "space50",
          "::placeholder": {
            color: "colorTextLink",
          },
          variants: {
            default: {
              backgroundColor: "colorBackgroundPrimaryWeakest",
            },
            inverse: {
              backgroundColor: "colorBackgroundDestructiveWeakest",
            },
          },
        },
        CUSTOM_DATE: {
          backgroundColor: "colorBackgroundDestructiveWeakest",
          borderRadius: "borderRadius30",
          boxShadow: "none",
          borderStyle: "solid",
          borderWidth: "borderWidth20",
          borderColor: "colorBorderDestructive",
          variants: {
            default: {
              backgroundColor: "colorBackgroundDestructiveWeakest",
            },
            inverse: {
              backgroundColor: "colorBackgroundPrimaryWeakest",
              borderColor: "colorBorderPrimary",
            },
          },
        },
        CUSTOM_DATE_ELEMENT: {
          color: "colorTextLinkDestructive",
          padding: "space70",
          "::placeholder": {
            color: "colorTextLinkDestructive",
          },
          variants: {
            default: {
              backgroundColor: "colorBackgroundDestructiveWeakest",
            },
            inverse: {
              backgroundColor: "colorBackgroundPrimaryWeakest",
              borderRadius: "borderRadius30",
            },
          },
        },
      }}
    >
      <Stack orientation="vertical" spacing="space40">
        <div>
          <Label htmlFor={uidSeed("pride")}>When does this year&apos;s LGBTQ+ Pride month begin in the US?</Label>
          <DatePicker id={uidSeed("pride")} {...props} />
        </div>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space80">
          <Label variant="inverse" htmlFor={uidSeed("pride2")}>
            When does this year&apos;s LGBTQ+ Pride month begin in the US?
          </Label>
          <DatePicker variant="inverse" id={uidSeed("pride2")} {...props} />
        </Box>
        <div>
          <Label htmlFor={uidSeed("pride3")}>When does this year&apos;s LGBTQ+ Pride month begin in the US?</Label>
          <DatePicker element="CUSTOM_DATE" id={uidSeed("pride3")} {...props} />
        </div>
        <Box backgroundColor="colorBackgroundBodyInverse" padding="space80">
          <Label variant="inverse" htmlFor={uidSeed("pride4")}>
            When does this year&apos;s LGBTQ+ Pride month begin in the US?
          </Label>
          <DatePicker variant="inverse" element="CUSTOM_DATE" id={uidSeed("pride4")} {...props} />
        </Box>
      </Stack>
    </CustomizationProvider>
  );
};
CustomizedDatePicker.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Date Picker",
  component: DatePicker,
};
