import { Anchor } from "@twilio-paste/anchor";
import { Avatar, AvatarGroup } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { CodeIcon } from "@twilio-paste/icons/esm/CodeIcon";
import { CommunityIcon } from "@twilio-paste/icons/esm/CommunityIcon";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import { StatusBadge } from "@twilio-paste/status";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import { useUID } from "@twilio-paste/uid-library";
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";

import { VisualPickerCheckbox, VisualPickerCheckboxGroup, VisualPickerRadio, VisualPickerRadioGroup } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Visual Picker/Customization",
  component: VisualPickerRadioGroup,
};

export const CustomizedRadio = (props: Partial<Record<"element", string>>): React.ReactElement<any> => {
  const theme = useTheme();
  const [value, setValue] = React.useState("1");
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        VISUAL_PICKER_RADIO_GROUP: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        VISUAL_PICKER_RADIO_GROUP_SET: { backgroundColor: "colorBackgroundDecorative20Weakest" },
        VISUAL_PICKER_RADIO_GROUP_FIELD: { backgroundColor: "colorBackgroundDecorative30Weakest" },
        VISUAL_PICKER_RADIO: { borderRadius: "borderRadiusCircle" },
        VISUAL_PICKER_RADIO_CONTROL: { borderRadius: "borderRadius20" },
        VISUAL_PICKER_RADIO_CONTROL_CIRCLE: { opacity: "50%" },
        VISUAL_PICKER_RADIO_CONTENT: { fontFamily: "fontFamilyCode", color: "colorTextErrorStrongest" },
        MY_PICKER: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        MY_PICKER_SET: { backgroundColor: "colorBackgroundDecorative20Weakest" },
        MY_PICKER_FIELD: { backgroundColor: "colorBackgroundDecorative30Weakest" },
        MY_PICKER_RADIO: { borderRadius: "borderRadiusCircle" },
        MY_PICKER_RADIO_CONTROL: { borderRadius: "borderRadius20" },
        MY_PICKER_RADIO_CONTROL_CIRCLE: { opacity: "50%" },
        MY_PICKER_RADIO_CONTENT: { fontFamily: "fontFamilyCode", color: "colorTextErrorStrongest" },
      }}
    >
      <VisualPickerRadioGroup
        orientation="vertical"
        legend={
          <Text as="span" color="currentColor">
            This is a Visual Picker Radio Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
          </Text>
        }
        name="visual-picker"
        helpText="Help text should go here."
        data-testid="visual-picker-radio-group"
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <VisualPickerRadio
          id={useUID()}
          value="1"
          labelText="ACME Website"
          element={props.element ? `${props.element}_RADIO` : undefined}
        >
          <Box width="size50" display="flex" justifyContent="space-between" alignItems="center">
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space50">
                <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
              </MediaFigure>
              <MediaBody>
                <Text as="div" fontWeight="fontWeightSemibold">
                  ACME
                </Text>
                <Text as="div">Website</Text>
              </MediaBody>
            </MediaObject>
            <Box display="flex" columnGap="space50">
              <StatusBadge as="span" variant="ConnectivityAvailable">
                Enabled
              </StatusBadge>
              <AvatarGroup size="sizeIcon20" variant="entity">
                <Avatar name="grouped avatar" icon={CommunityIcon} />
                <Avatar name="grouped avatar" icon={CommunityIcon} />
                <Avatar name="grouped avatar" icon={CommunityIcon} />
              </AvatarGroup>
            </Box>
          </Box>
        </VisualPickerRadio>
        <VisualPickerRadio
          id={useUID()}
          value="2"
          labelText="ACME Website"
          element={props.element ? `${props.element}_RADIO` : undefined}
        >
          <Box width="size50" display="flex" justifyContent="space-between" alignItems="center">
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space50">
                <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
              </MediaFigure>
              <MediaBody>
                <Text as="div" fontWeight="fontWeightSemibold">
                  ACME
                </Text>
                <Text as="div">Website</Text>
              </MediaBody>
            </MediaObject>
            <Box display="flex" columnGap="space50">
              <StatusBadge as="span" variant="ConnectivityAvailable">
                Enabled
              </StatusBadge>
              <AvatarGroup size="sizeIcon20" variant="entity">
                <Avatar name="grouped avatar" icon={CommunityIcon} />
                <Avatar name="grouped avatar" icon={CommunityIcon} />
                <Avatar name="grouped avatar" icon={CommunityIcon} />
              </AvatarGroup>
            </Box>
          </Box>
        </VisualPickerRadio>
        <VisualPickerRadio
          id={useUID()}
          value="3"
          labelText="ACME Website"
          element={props.element ? `${props.element}_RADIO` : undefined}
        >
          <Box width="size50" display="flex" justifyContent="space-between" alignItems="center">
            <MediaObject verticalAlign="center">
              <MediaFigure spacing="space50">
                <Avatar icon={CodeIcon} size="sizeIcon90" name="code" color="decorative20" />
              </MediaFigure>
              <MediaBody>
                <Text as="div" fontWeight="fontWeightSemibold">
                  ACME
                </Text>
                <Text as="div">Website</Text>
              </MediaBody>
            </MediaObject>
            <Box display="flex" columnGap="space50">
              <StatusBadge as="span" variant="ConnectivityAvailable">
                Enabled
              </StatusBadge>
              <AvatarGroup size="sizeIcon20" variant="entity">
                <Avatar name="grouped avatar" icon={CommunityIcon} />
                <Avatar name="grouped avatar" icon={CommunityIcon} />
                <Avatar name="grouped avatar" icon={CommunityIcon} />
              </AvatarGroup>
            </Box>
          </Box>
        </VisualPickerRadio>
      </VisualPickerRadioGroup>
    </CustomizationProvider>
  );
};

export const CustomizedCheckbox = (props: Partial<Record<"element", string>>): React.ReactElement<any> => {
  const theme = useTheme();
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked1(event.target.checked);
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked2(event.target.checked);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => setChecked3(event.target.checked);
  return (
    <CustomizationProvider
      theme={theme}
      elements={{
        VISUAL_PICKER_CHECKBOX_GROUP: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        VISUAL_PICKER_CHECKBOX_GROUP_SET: { backgroundColor: "colorBackgroundDecorative20Weakest" },
        VISUAL_PICKER_CHECKBOX_GROUP_FIELD: { backgroundColor: "colorBackgroundDecorative30Weakest" },
        VISUAL_PICKER_CHECKBOX: { borderRadius: "borderRadiusCircle" },
        VISUAL_PICKER_CHECKBOX_CONTROL: { borderRadius: "borderRadiusCircle" },
        VISUAL_PICKER_CHECKBOX_ICON: { opacity: "50%" },
        VISUAL_PICKER_CHECKBOX_CONTENT: { fontFamily: "fontFamilyCode", color: "colorTextErrorStrongest" },
        MY_PICKER: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
        MY_PICKER_SET: { backgroundColor: "colorBackgroundDecorative20Weakest" },
        MY_PICKER_FIELD: { backgroundColor: "colorBackgroundDecorative30Weakest" },
        MY_PICKER_CHECKBOX: { borderRadius: "borderRadiusCircle" },
        MY_PICKER_CHECKBOX_CONTROL: { borderRadius: "borderRadius20" },
        MY_PICKER_CHECKBOX_ICON: { opacity: "50%" },
        MY_PICKER_CHECKBOX_CONTENT: { fontFamily: "fontFamilyCode", color: "colorTextErrorStrongest" },
      }}
    >
      <VisualPickerCheckboxGroup
        orientation="vertical"
        legend={
          <Text as="span" color="currentColor">
            This is a Visual Picker Checkbox Group label with a <Anchor href="http://paste.twilio.com">link</Anchor>
          </Text>
        }
        name="visual-picker"
        helpText="Help text should go here."
        data-testid="visual-picker-checkbox-group"
        {...props}
      >
        <VisualPickerCheckbox
          labelText="SQL"
          element={props.element ? `${props.element}_CHECKBOX` : undefined}
          checked={checked1}
          onChange={handleChange1}
        >
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar size="sizeIcon90" name="B T" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                SQL
              </Text>
              <Text as="div">Create any trait from your data warehouse by writing SQL.</Text>
            </MediaBody>
          </MediaObject>
        </VisualPickerCheckbox>
        <VisualPickerCheckbox
          labelText="SQL"
          element={props.element ? `${props.element}_CHECKBOX` : undefined}
          checked={checked2}
          onChange={handleChange2}
        >
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar size="sizeIcon90" name="B T" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                SQL
              </Text>
              <Text as="div">Create any trait from your data warehouse by writing SQL.</Text>
            </MediaBody>
          </MediaObject>
        </VisualPickerCheckbox>
        <VisualPickerCheckbox
          labelText="SQL"
          element={props.element ? `${props.element}_CHECKBOX` : undefined}
          checked={checked3}
          onChange={handleChange3}
        >
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space50">
              <Avatar size="sizeIcon90" name="B T" color="decorative20" />
            </MediaFigure>
            <MediaBody>
              <Text as="div" fontWeight="fontWeightSemibold">
                SQL
              </Text>
              <Text as="div">Create any trait from your data warehouse by writing SQL.</Text>
            </MediaBody>
          </MediaObject>
        </VisualPickerCheckbox>
      </VisualPickerCheckboxGroup>
    </CustomizationProvider>
  );
};
