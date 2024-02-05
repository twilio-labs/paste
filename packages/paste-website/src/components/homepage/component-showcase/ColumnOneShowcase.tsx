// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-max-depth */
import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { CopyIcon } from "@twilio-paste/icons/esm/CopyIcon";
import { EditIcon } from "@twilio-paste/icons/esm/EditIcon";
import { ExportIcon } from "@twilio-paste/icons/esm/ExportIcon";
import { VoiceCapableIcon } from "@twilio-paste/icons/esm/VoiceCapableIcon";
import {
  StatusMenu,
  StatusMenuBadge,
  StatusMenuItemChild,
  StatusMenuItemRadio,
  useStatusMenuState,
} from "@twilio-paste/status";
import type { StatusBadgeVariants } from "@twilio-paste/status";
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
  const onClick = (status: any): void => {
    setProcess(ProcessObject[status as keyof typeof ProcessObject]);
    menu.hide();
  };
  return (
    <Box element="COLUMN_1" width="size50">
      <Box
        backgroundColor="colorBackgroundBody"
        display="inline-flex"
        flexDirection="column"
        rowGap="space70"
        padding="space70"
        borderRadius="borderRadius30"
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
    </Box>
  );
};
