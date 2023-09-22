import { useRect } from "@radix-ui/react-use-rect";
import { Box, type BoxStyleProps } from "@twilio-paste/box";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

interface ListBoxPositionerProps {
  children: React.ReactNode;
  inputBoxRef: React.RefObject<HTMLElement>;
  dropdownBoxRef: React.RefObject<HTMLElement>;
}

export const ListBoxPositioner: React.FC<ListBoxPositionerProps> = ({ inputBoxRef, dropdownBoxRef, ...props }) => {
  const { height: windowHeight } = useWindowSize();
  const inputBoxDimensions = useRect(inputBoxRef.current);
  const dropdownBoxDimensions = useRect(dropdownBoxRef.current);
  const dropdownBoxHeight = dropdownBoxDimensions?.height;

  const styles = React.useMemo((): BoxStyleProps => {
    // If it's closed, return an empty object
    if (dropdownBoxHeight == null || inputBoxDimensions == null || dropdownBoxHeight === 0) {
      return {};
    }

    /*
     *  Scenarios:
     * 1- Dropdown height is bigger than window height
     *   - Then show at the top of the viewport
     * 2- Dropdown height + inputbox bottom is bigger than viewport height
     *   2.1- inputbox top - Dropdown height is < 0 (offscreen topwise)
     *     - Show downwards
     *   2.2- else
     *     - Show upwards
     * 3- Dropdown height + inputbox bottom is smaller than viewport height
     *   - Show downwards
     */
    if (windowHeight) {
      if (dropdownBoxHeight >= windowHeight) {
        return {
          position: "fixed",
          top: 0,
          left: inputBoxDimensions?.left,
          right: inputBoxDimensions?.right,
          width: inputBoxDimensions?.width,
        };
      }
      if (
        dropdownBoxHeight + inputBoxDimensions?.bottom >= windowHeight &&
        inputBoxDimensions?.top - dropdownBoxHeight > 0
      ) {
        return {
          position: "fixed",
          // 6px to account for border things, should be fine on all themes
          top: inputBoxDimensions?.top - dropdownBoxHeight - 6,
          left: inputBoxDimensions?.left,
          right: inputBoxDimensions?.right,
          width: inputBoxDimensions?.width,
        };
      }
    }

    return {
      position: "fixed",
      top: inputBoxDimensions?.bottom,
      left: inputBoxDimensions?.left,
      right: inputBoxDimensions?.right,
      width: inputBoxDimensions?.width,
    };
  }, [inputBoxDimensions, dropdownBoxHeight, windowHeight]);

  return <Box {...props} {...styles} zIndex="zIndex90" />;
};
ListBoxPositioner.displayName = "ListBoxPositioner";
