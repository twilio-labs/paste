import { Box } from "@twilio-paste/box";
import { DeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";
import {
  ListboxPrimitive,
  ListboxPrimitiveItem,
  type ListboxPrimitiveItemProps,
  type ListboxPrimitiveProps,
} from "@twilio-paste/listbox-primitive";
import * as React from "react";

// Styled components that wrap the Paste Box component
const StyledList = React.forwardRef<HTMLDivElement, React.PropsWithChildren>((props, ref) => (
  <Box ref={ref} {...props} />
));

const StyledListItem = React.forwardRef<HTMLDivElement, React.PropsWithChildren>((props, ref) => (
  <Box
    ref={ref}
    {...props}
    backgroundColor="colorBackgroundBody"
    padding="space60"
    borderBottomStyle="solid"
    borderBottomColor="colorBorderWeaker"
    borderBottomWidth="borderWidth10"
    cursor="pointer"
    position="relative"
    display="flex"
    columnGap="space30"
    justifyContent="space-between"
    alignItems="center"
    outline="none"
    _hover={{
      backgroundColor: "colorBackgroundPrimaryWeakest",
    }}
    _focus={{
      backgroundColor: "colorBackgroundPrimaryWeakest",
    }}
    _selected_after={{
      content: '" "',
      position: "absolute",
      height: "80%",
      width: "4px",
      backgroundColor: "colorBackgroundPrimary",
      borderTopLeftRadius: "borderRadius30",
      borderBottomLeftRadius: "borderRadius30",
      right: -1,
      top: "10%",
    }}
    _selected_hover_after={{}}
    _focus_selected_after={{}}
  />
));

export const ThreadList = React.forwardRef<HTMLDivElement, ListboxPrimitiveProps>((props, ref) => (
  <ListboxPrimitive {...props} as={StyledList} ref={ref} />
));

type ListItemProps = { onDelete: () => void };
export const ThreadListItem = React.forwardRef<HTMLButtonElement, ListboxPrimitiveItemProps & ListItemProps>(
  ({ children, onDelete, ...props }, ref) => (
    <ListboxPrimitiveItem
      {...props}
      as={StyledListItem}
      ref={ref}
      onKeyDown={(event) => {
        if (event.key === "Backspace") {
          onDelete();
        }
      }}
    >
      <Box>{children}</Box>
      <Box
        cursor="pointer"
        onClick={(event) => {
          event.stopPropagation();
          onDelete();
        }}
      >
        <DeleteIcon decorative={false} title=": press backspace to delete" color="colorTextDestructive" />
      </Box>
    </ListboxPrimitiveItem>
  ),
);

export const ThreadListTitle = React.forwardRef<HTMLDivElement, React.PropsWithChildren>((props, ref) => (
  <Box ref={ref} {...props} fontWeight="fontWeightMedium" />
));
export const ThreadListMeta = React.forwardRef<HTMLDivElement, React.PropsWithChildren>((props, ref) => (
  <Box ref={ref} {...props} color="colorTextWeak" fontSize="fontSize20" />
));
