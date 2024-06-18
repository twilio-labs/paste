import { Box, type BoxProps } from "@twilio-paste/box";
import { Text } from "@twilio-paste/text";
import { Button } from "@twilio-paste/button";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { ChevronDownIcon } from '@twilio-paste/icons/esm/ChevronDownIcon'
import { ChevronRightIcon } from '@twilio-paste/icons/esm/ChevronRightIcon'
import * as React from "react";

import type { ComboboxProps } from "../types";

export interface ComboboxListboxGroupProps extends Pick<ComboboxProps, "groupLabelTemplate" | "canCollapseGroupLabel">, HTMLPasteProps<"ul"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @type {string | undefined}
   * @memberof ComboboxListboxGroupProps
   */
  groupName?: string | undefined;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "COMBOBOX"
   * @type {BoxElementProps["element"]}
   * @memberof ComboboxListboxGroupProps
   */
  element?: BoxProps["element"];

  /**
   * canCollapseGroupLabel, default to false if undefined. If it's true, clicking on the group label will collapse/expand items under the group.
   * @type {boolean}
   * @memberof ComboboxListboxGroupProps
   */
  canCollapseGroupLabel?: boolean;
}

const ComboboxListboxGroup = React.forwardRef<HTMLUListElement, ComboboxListboxGroupProps>(
  ({ children, element = "COMBOBOX", groupName, groupLabelTemplate, canCollapseGroupLabel = false }, ref) => {
    const [collapsedGroups, setCollapsedGroups] = React.useState<Set<string>>(new Set())
    const onClickLabel = (): void => {
      if (!groupName) {
        return;
      }
      if (collapsedGroups.has(groupName)) {
        collapsedGroups.delete(groupName);
      } else {
        collapsedGroups.add(groupName);
      }
      setCollapsedGroups(new Set(collapsedGroups));
    }
    if (!groupName) {
      return (
        <Box
          as="ul"
          ref={ref}
          element={`${element}_LIST`}
          role="presentation"
          margin="space0"
          padding="space0"
          listStyleType="none"
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor="colorBorderWeaker"
          _last={{
            borderWidth: "borderWidth0",
          }}>
          {children}
        </Box>
      );
    }
    const groupLabel = groupLabelTemplate ? groupLabelTemplate(groupName) : groupName
    if (!canCollapseGroupLabel) {
      return (
        <Box
          as="ul"
          ref={ref}
          element={`${element}_LIST`}
          role="group"
          aria-label={groupName}
          margin="space0"
          padding="space0"
          listStyleType="none"
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor="colorBorderWeaker"
          _last={{
            borderWidth: "borderWidth0",
          }}>
          <Box
            as="li"
            backgroundColor="colorBackgroundWeak"
            borderBottomStyle="solid"
            borderBottomWidth="borderWidth10"
            borderBottomColor="colorBorderWeaker"
            role="presentation"
            paddingY="space30"
            paddingLeft="space50"
            paddingRight="space50"
            element={`${element}_GROUPNAME`}
          >
            <Text
              as="span"
              fontSize="fontSize20"
              lineHeight="lineHeight20"
              fontWeight="fontWeightSemibold"
              color="colorText"
              element={`${element}_GROUPNAME_TEXT`}
            >
              {groupLabel}
            </Text>
          </Box>
          {children}
        </Box>
      );
    }
    return (
      <Box
        as="ul"
        ref={ref}
        element={`${element}_LIST`}
        role="group"
        aria-label={groupName}
        margin="space0"
        padding="space0"
        listStyleType="none"
        borderBottomStyle="solid"
        borderBottomWidth="borderWidth10"
        borderBottomColor="colorBorderWeaker"
        _last={{
          borderWidth: "borderWidth0",
        }}
      >
        <Box
          as="li"
          backgroundColor="colorBackgroundWeak"
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor="colorBorderWeaker"
          role="presentation"
          paddingY="space30"
          paddingLeft="space50"
          paddingRight="space50"
          element={`${element}_GROUPNAME`}
        >
          <Button variant="secondary_icon" element={`${element}_GROUPNAME_BUTTON`} onClick={onClickLabel}>
            {collapsedGroups.has(groupName) ? (
              <ChevronRightIcon element={`${element}_GROUPNAME_ARROW`} decorative={false} title={groupName} />
            ) : (
              <ChevronDownIcon element={`${element}_GROUPNAME_ARROW`} decorative={false} title={groupName} />
            )}
            <Text
              as="span"
              variant="secondary_icon"
              fontSize="fontSize20"
              lineHeight="lineHeight20"
              fontWeight="fontWeightSemibold"
              color="colorText"
              element={`${element}_GROUPNAME_TEXT`}
              >
                {groupLabel}
              </Text>
          </Button>
        </Box>
        {!collapsedGroups.has(groupName) && children}
      </Box>
    );
  },
);

ComboboxListboxGroup.displayName = "ComboboxListboxGroup";

export { ComboboxListboxGroup };
