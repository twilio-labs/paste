import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { CustomizationProvider } from "@twilio-paste/customization";
import { DatePicker } from "@twilio-paste/date-picker";
import { FormPill, FormPillGroup, useFormPillState } from "@twilio-paste/form-pill-group";
import { Label } from "@twilio-paste/label";
import { Separator } from "@twilio-paste/separator";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import { TimePicker } from "@twilio-paste/time-picker";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";
import type { JSX } from "react";

import {
  Popover,
  PopoverBadgeButton,
  PopoverButton,
  PopoverContainer,
  PopoverFormPillButton,
  usePopoverState,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Popover",
  component: Popover,
  subcomponents: { PopoverContainer, PopoverButton },
  parameters: {
    // Sets a delay and diff threshold for the component's stories
    chromatic: { delay: 3000, diffThreshold: 0.3 },
  },
};

export const Default = (): JSX.Element => {
  const uniqueBaseID = useUID();
  return (
    <Box height="300px">
      <PopoverContainer baseId={uniqueBaseID} visible>
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const Sizes: React.FC = () => {
  return (
    <Box height="300px" display="grid" gridTemplateColumns="1fr 1fr" gridTemplateRows="auto auto auto">
      <Box>
        <PopoverContainer baseId={useUID()} visible>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover" width="size50">
            <Text as="span">width is &apos;size50&apos;</Text>
          </Popover>
        </PopoverContainer>
      </Box>
      <Box>
        <PopoverContainer baseId={useUID()} visible>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover" width="size40">
            <Text as="span">width is &apos;size40&apos;</Text>
          </Popover>
        </PopoverContainer>
      </Box>
      <Box>
        <PopoverContainer baseId={useUID()} visible>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover" width="size30">
            <Text as="span">width is &apos;size30&apos;</Text>
          </Popover>
        </PopoverContainer>
      </Box>
      <Box>
        <PopoverContainer baseId={useUID()} visible>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover" width="size20">
            <Text as="span">width is &apos;size20&apos;</Text>
          </Popover>
        </PopoverContainer>
      </Box>
      <Box>
        <PopoverContainer baseId={useUID()} visible>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover" width="size10">
            <Text as="span">width is &apos;size10&apos;</Text>
          </Popover>
        </PopoverContainer>
      </Box>
    </Box>
  );
};

export const InitialFocus: React.FC = () => {
  const uniqueBaseID = useUID();
  const buttonRef = React.createRef<HTMLButtonElement>();

  return (
    <Box height="300px">
      <PopoverContainer baseId={uniqueBaseID}>
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover" initialFocusRef={buttonRef}>
          <Box display="flex" flexDirection="column" rowGap="space70">
            <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
            <Box>
              <Button variant="primary" size="small" ref={buttonRef}>
                Click me
              </Button>
            </Box>
          </Box>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const ResponsiveWidth: StoryFn = () => {
  return (
    <PopoverContainer baseId={useUID()} visible>
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover" width={["size20", "size40"]}>
        <Text as="span">Responsive width Popover</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const WideContent: React.FC = () => {
  const date1ID = useUID();
  const time1ID = useUID();
  const date2ID = useUID();
  const time2ID = useUID();
  const uniqueBaseID = useUID();
  return (
    <Box height="300px">
      <PopoverContainer baseId={uniqueBaseID} visible>
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Stack orientation="horizontal" spacing="space40">
            <Box width="10rem">
              <Label htmlFor={date1ID}>Start date</Label>
              <DatePicker id={date1ID} />
            </Box>
            <Box width="8rem">
              <Label htmlFor={time1ID}>Start time</Label>
              <TimePicker id={time1ID} />
            </Box>
          </Stack>
          <Separator orientation="horizontal" verticalSpacing="space40" />
          <Stack orientation="horizontal" spacing="space40">
            <Box width="10rem">
              <Label htmlFor={date2ID}>Start date</Label>
              <DatePicker id={date2ID} />
            </Box>
            <Box width="8rem">
              <Label htmlFor={time2ID}>Start time</Label>
              <TimePicker id={time2ID} />
            </Box>
          </Stack>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const PopoverTop = (): JSX.Element => {
  const uniqueBaseID = useUID();
  return (
    <Box bottom={12} position="absolute">
      <PopoverContainer baseId={uniqueBaseID} placement="top-start">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover" data-testid="top-popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const PopoverLeft = (): JSX.Element => {
  const uniqueBaseID = useUID();
  return (
    <Box position="absolute" right={12} top={12}>
      <PopoverContainer baseId={uniqueBaseID} placement="left-start">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover aria-label="Popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const PopoverRight = (): JSX.Element => {
  const uniqueBaseID = useUID();
  return (
    <PopoverContainer baseId={uniqueBaseID} placement="right-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const PopoverBottom = (): JSX.Element => {
  const uniqueBaseID = useUID();
  return (
    <PopoverContainer baseId={uniqueBaseID} placement="bottom-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover aria-label="Popover">
        <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
      </Popover>
    </PopoverContainer>
  );
};

export const BadgePopover = (): JSX.Element => {
  const uniqueBaseID = useUID();
  return (
    <Box height="300px">
      <PopoverContainer baseId={uniqueBaseID}>
        <PopoverBadgeButton variant="neutral">Open popover</PopoverBadgeButton>
        <Popover aria-label="Popover" data-testid="badge-popover">
          <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

export const FormPillPopover = (): JSX.Element => {
  const pillState = useFormPillState();
  const [selected, setSelected] = React.useState(true);

  return (
    <Box height="300px">
      <FormPillGroup {...pillState} aria-label="filter-group" variant="tree">
        <PopoverContainer baseId={useUID()}>
          <PopoverFormPillButton {...pillState} selected={selected} onDismiss={() => {}}>
            Open popover
          </PopoverFormPillButton>
          <Popover aria-label="Popover" data-testid="form-pill-popover">
            <Box margin="space60">
              <Button
                variant="primary"
                size="small"
                onClick={() => {
                  setSelected(!selected);
                }}
              >
                Toggle Form Pill selection
              </Button>
            </Box>
          </Popover>
        </PopoverContainer>
        <PopoverContainer baseId={useUID()}>
          <PopoverFormPillButton {...pillState} onDismiss={() => {}}>
            Open popover
          </PopoverFormPillButton>
          <Popover aria-label="Popover" data-testid="form-pill-popover">
            <Box margin="space60">
              <Button
                variant="primary"
                size="small"
                onClick={() => {
                  setSelected(!selected);
                }}
              >
                Toggle Form Pill selection
              </Button>
            </Box>
          </Popover>
        </PopoverContainer>
      </FormPillGroup>
    </Box>
  );
};

export const StateHookExample = (): JSX.Element => {
  const uniqueBaseID = useUID();
  const popover = usePopoverState({ baseId: uniqueBaseID });
  return (
    <Box height="300px">
      <Stack orientation="horizontal" spacing="space60">
        <PopoverContainer state={popover}>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover" data-testid="state-hook-popover">
            <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
          </Popover>
        </PopoverContainer>
        <Button variant="primary" onClick={() => popover.show()} data-testid="show-button">
          Open popover on click
        </Button>
        <Button variant="primary" onClick={() => popover.hide()} data-testid="hide-button">
          Close popover on click
        </Button>
      </Stack>
    </Box>
  );
};

export const Customization: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  const uniqueBaseID = useUID();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        POPOVER: {
          backgroundColor: "colorBackgroundNeutralWeakest",
          fontWeight: "fontWeightBold",
        },
        POPOVER_BUTTON: {
          backgroundColor: "colorBackgroundBrandStronger",
        },
        POPOVER_CLOSE_BUTTON: {
          backgroundColor: "colorBackgroundBodyInverse",
          borderRadius: "borderRadius20",
        },
        POPOVER_CLOSE_ICON: {
          color: "colorTextInverse",
        },
      }}
    >
      <Box height="300px">
        <PopoverContainer baseId={uniqueBaseID} visible>
          <PopoverButton variant="primary">Open popover</PopoverButton>
          <Popover aria-label="Popover">
            <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
          </Popover>
        </PopoverContainer>
      </Box>
    </CustomizationProvider>
  );
};
Customization.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const I18n = (): React.ReactNode => {
  const uniqueBaseID = useUID();
  return (
    <Box height="300px">
      <PopoverContainer baseId={uniqueBaseID} visible>
        <PopoverButton variant="primary">Abrir popover</PopoverButton>
        <Popover aria-label="Popover" i18nDismissLabel="Cerrar popover">
          <Text as="span">
            &quot;Vivir en las fronteras y en los márgenes, mantener intacta la identidad múltiple y la integridad, es
            como tratar de nadar en un nuevo elemento, un elemento &apos;extranjero&apos;&quot; — Gloria E. Anzaldúa
          </Text>
        </Popover>
      </PopoverContainer>
    </Box>
  );
};

I18n.storyName = "i18n Prop";
