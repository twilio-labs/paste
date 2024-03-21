import { Anchor } from "@twilio-paste/anchor";
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Avatar, AvatarGroup } from "@twilio-paste/avatar";
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { CodeBlock } from "@twilio-paste/code-block";
import { Disclosure, DisclosureContent, DisclosureHeading, useDisclosureState } from "@twilio-paste/disclosure";
import { DisplayPill, DisplayPillGroup } from "@twilio-paste/display-pill-group";
import { BuildIcon } from "@twilio-paste/icons/esm/BuildIcon";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { CustomIcon } from "@twilio-paste/icons/esm/CustomIcon";
import { DataLineChartIcon } from "@twilio-paste/icons/esm/DataLineChartIcon";
import { EditIcon } from "@twilio-paste/icons/esm/EditIcon";
import { ExpandIcon } from "@twilio-paste/icons/esm/ExpandIcon";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { FeedIcon } from "@twilio-paste/icons/esm/FeedIcon";
import { FileImageIcon } from "@twilio-paste/icons/esm/FileImageIcon";
import { ShareIcon } from "@twilio-paste/icons/esm/ShareIcon";
import { ShowIcon } from "@twilio-paste/icons/esm/ShowIcon";
import { TimeIcon } from "@twilio-paste/icons/esm/TimeIcon";
import { TipIcon } from "@twilio-paste/icons/esm/TipIcon";
import { TranslationIcon } from "@twilio-paste/icons/esm/TranslationIcon";
import { VoiceCapableIcon } from "@twilio-paste/icons/esm/VoiceCapableIcon";
import { InlineCode } from "@twilio-paste/inline-code";
import { Label } from "@twilio-paste/label";
import { Slider } from "@twilio-paste/slider";
import {
  StatusMenu,
  StatusMenuBadge,
  StatusMenuItemChild,
  StatusMenuItemRadio,
  useStatusMenuState,
} from "@twilio-paste/status";
import type { StatusBadgeVariants } from "@twilio-paste/status";
import { Switch } from "@twilio-paste/switch";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { ComboboxShowcase } from "./ComboboxShowcase";

const ProcessObject = {
  Success: {
    variant: "ProcessSuccess",
    children: "Complete",
  },
  Neutral: {
    variant: "ProcessNeutral",
    children: "In review",
  },
  Warning: {
    variant: "ProcessWarning",
    children: "Needs attention",
  },
  Error: {
    variant: "ProcessError",
    children: "Rejected",
  },
  InProgress: {
    variant: "ProcessInProgress",
    children: "In-progress",
  },
  Disabled: {
    variant: "ProcessDisabled",
    children: "Paused",
  },
  Draft: {
    variant: "ProcessDraft",
    children: "Draft",
  },
};

export const ColumnOneShowcase: React.FC = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useStatusMenuState();
  const [switchOn, setSwitchOn] = React.useState(true);
  const onClick = (status: any): void => {
    setProcess(ProcessObject[status as keyof typeof ProcessObject]);
    menu.hide();
  };
  const [sliderValue, setSliderValue] = React.useState(50);
  const sliderId = useUID();
  const [showDisclosure, setShowDisclosure] = React.useState(true);
  const disclosure = useDisclosureState();
  const toggleDisclosure = (): void => setShowDisclosure((state) => !state);
  const customDisclosureState = {
    ...disclosure,
    toggle: toggleDisclosure,
    visible: showDisclosure,
  };

  return (
    <Box
      element="COLUMN_1"
      width="100%"
      gridArea="bottom1"
      display="flex"
      flexDirection="column"
      rowGap="space70"
      maxWidth="519px"
    >
      <Box
        backgroundColor="colorBackgroundBody"
        display="inline-flex"
        flexDirection="column"
        rowGap="space70"
        padding="space70"
        borderRadius="borderRadius30"
        element="FIRST_BOX_COLUMN_1"
      >
        <ComboboxShowcase />
        <Box display="flex" flexDirection="row" columnGap="space60" alignItems="center">
          <ButtonGroup attached>
            <Button variant="secondary">
              <CopyIcon decorative />
              Copy
            </Button>
            <Button variant="secondary">
              <EditIcon decorative />
              Edit
            </Button>
            <Button variant="secondary">
              <ExportIcon decorative />
              Export
            </Button>
          </ButtonGroup>
          <Badge as="span" variant="decorative20">
            <VoiceCapableIcon decorative />
            Voice
          </Badge>
          <>
            <StatusMenuBadge
              {...menu}
              i18nButtonLabel="Change account"
              variant={process.variant as StatusBadgeVariants}
            >
              {process.children}
            </StatusMenuBadge>
            <StatusMenu {...menu} aria-label="Preferences">
              <StatusMenuItemRadio
                {...menu}
                name="process"
                value="success"
                checked={process.children === ProcessObject.Success.children}
                onClick={() => onClick("Success")}
                variant="default"
              >
                <StatusMenuItemChild variant="ProcessSuccess">{ProcessObject.Success.children}</StatusMenuItemChild>
              </StatusMenuItemRadio>
              <StatusMenuItemRadio
                {...menu}
                name="process"
                value="neutral"
                checked={process.children === ProcessObject.Neutral.children}
                onClick={() => onClick("Neutral")}
                variant="default"
              >
                <StatusMenuItemChild variant="ProcessNeutral">{ProcessObject.Neutral.children}</StatusMenuItemChild>
              </StatusMenuItemRadio>
              <StatusMenuItemRadio
                {...menu}
                name="process"
                value="warning"
                checked={process.children === ProcessObject.Warning.children}
                onClick={() => onClick("Warning")}
                variant="default"
              >
                <StatusMenuItemChild variant="ProcessWarning">{ProcessObject.Warning.children}</StatusMenuItemChild>
              </StatusMenuItemRadio>
              <StatusMenuItemRadio
                {...menu}
                name="process"
                value="error"
                checked={process.children === ProcessObject.Error.children}
                onClick={() => onClick("Error")}
                variant="default"
              >
                <StatusMenuItemChild variant="ProcessError">{ProcessObject.Error.children}</StatusMenuItemChild>
              </StatusMenuItemRadio>
              <StatusMenuItemRadio
                {...menu}
                name="process"
                value="InProgress"
                checked={process.children === ProcessObject.InProgress.children}
                onClick={() => onClick("InProgress")}
                variant="default"
              >
                <StatusMenuItemChild variant="ProcessInProgress">
                  {ProcessObject.InProgress.children}
                </StatusMenuItemChild>
              </StatusMenuItemRadio>
              <StatusMenuItemRadio
                {...menu}
                name="process"
                value="disabled"
                checked={process.children === ProcessObject.Disabled.children}
                onClick={() => onClick("Disabled")}
                variant="default"
              >
                <StatusMenuItemChild variant="ProcessDisabled">{ProcessObject.Disabled.children}</StatusMenuItemChild>
              </StatusMenuItemRadio>
              <StatusMenuItemRadio
                {...menu}
                name="process"
                value="draft"
                checked={process.children === ProcessObject.Draft.children}
                onClick={() => onClick("Draft")}
                variant="default"
              >
                <StatusMenuItemChild variant="ProcessDraft">{ProcessObject.Draft.children}</StatusMenuItemChild>
              </StatusMenuItemRadio>
            </StatusMenu>
          </>
        </Box>
      </Box>
      <Box
        backgroundColor="colorBackgroundBody"
        width="100%"
        padding="space70"
        borderRadius="borderRadius30"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        element="SECOND_BOX_COLUMN_1"
      >
        <Switch name="example_switch" checked={switchOn} onChange={() => setSwitchOn(!switchOn)}>
          View yearly data
        </Switch>
        <AvatarGroup size="sizeIcon70" variant="user">
          <Avatar name="Maria Ardovini" src="/images/avatars/avatar4.png" />
          <Avatar name="Tri O'Hara" src="/images/avatars/avatar1.png" />
          <Avatar name="Imani Nakai" src="/images/avatars/avatar2.png" />
        </AvatarGroup>
        <InlineCode>{"</Theme.Provider>"}</InlineCode>
      </Box>

      <CodeBlock variant="single-line" language="shell" code="npm install @twilio-paste/core @twilio-paste/icons" />
      <Box
        backgroundColor="colorBackgroundBody"
        width="100%"
        padding="space70"
        borderRadius="borderRadius30"
        element="SECOND_BOX_COLUMN_1"
      >
        <Label htmlFor={sliderId}>Volume</Label>
        <Slider id={sliderId} value={sliderValue} onChange={(newValue) => setSliderValue(newValue)} hideRangeLabels />
      </Box>
      <Box
        backgroundColor="colorBackgroundBody"
        borderTopLeftRadius="borderRadius30"
        borderTopRightRadius="borderRadius30"
      >
        <Disclosure state={customDisclosureState}>
          <DisclosureHeading as="h3" variant="heading30">
            Helpful links
          </DisclosureHeading>
          <DisclosureContent>
            <Box display="flex" columnGap="space90" paddingBottom="space40">
              <Box display="flex" flexDirection="column" rowGap="space50" marginLeft="space60" marginBottom="space30">
                <Anchor href="/components/icon">Icons list</Anchor>
                <Box display="flex" flexDirection="column" rowGap="space20" flexWrap="wrap">
                  <Box display="flex" flexDirection="row" columnGap="space30">
                    <EditIcon decorative={false} title="edit icon" size="sizeIcon40" color="colorTextIcon" />
                    <ShowIcon decorative={false} title="show icon" size="sizeIcon40" color="colorTextIcon" />
                    <BuildIcon decorative={false} title="build icon" size="sizeIcon40" color="colorTextIcon" />
                    <CustomIcon decorative={false} title="custom icon" size="sizeIcon40" color="colorTextIcon" />
                  </Box>
                  <Box display="flex" flexDirection="row" columnGap="space30">
                    <ExpandIcon decorative={false} title="expand icon" size="sizeIcon40" color="colorTextIcon" />
                    <FeedIcon decorative={false} title="feed icon" size="sizeIcon40" color="colorTextIcon" />
                    <FileImageIcon decorative={false} title="file image icon" size="sizeIcon40" color="colorTextIcon" />
                    <TranslationIcon
                      decorative={false}
                      title="translation icon"
                      size="sizeIcon40"
                      color="colorTextIcon"
                    />
                  </Box>
                  <Box display="flex" flexDirection="row" columnGap="space30">
                    <ShareIcon decorative={false} title="share icon" size="sizeIcon40" color="colorTextIcon" />
                    <TipIcon decorative={false} title="tip icon" size="sizeIcon40" color="colorTextIcon" />
                    <TimeIcon decorative={false} title="time icon" size="sizeIcon40" color="colorTextIcon" />
                    <DataLineChartIcon
                      decorative={false}
                      title="data line chart icon"
                      size="sizeIcon40"
                      color="colorTextIcon"
                    />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" rowGap="space50">
                <Anchor href="/tokens/list">Tokens list</Anchor>
                <DisplayPillGroup aria-label="design tokens">
                  <DisplayPill>
                    <Avatar name="color-text-success" src="/images/avatars/token1.png" size="sizeIcon10" />
                    $color-text-success
                  </DisplayPill>
                  <DisplayPill>
                    <Avatar name="color-text" src="/images/avatars/token2.png" size="sizeIcon10" />
                    $color-text
                  </DisplayPill>
                  <DisplayPill>
                    <Avatar name="color-data-visualization" src="/images/avatars/token3.png" size="sizeIcon10" />
                    $color-data-visualization-10
                  </DisplayPill>
                  <DisplayPill>
                    <Avatar name="color-background-primary" src="/images/avatars/token4.png" size="sizeIcon10" />
                    $color-background-primary
                  </DisplayPill>
                </DisplayPillGroup>
              </Box>
            </Box>
          </DisclosureContent>
        </Disclosure>
      </Box>
    </Box>
  );
};
