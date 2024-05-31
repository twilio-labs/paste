import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { ThemeShape } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";
import { uid } from "react-uid";

const Variants = {
  default: {
    fontSize: "fontSize30" as ThemeShape["fontSizes"],
    lineHeight: "lineHeight30" as ThemeShape["lineHeights"],
  },
  fullScreen: {
    fontSize: "fontSize40" as ThemeShape["fontSizes"],
    lineHeight: "lineHeight40" as ThemeShape["lineHeights"],
  },
};

export interface AIChatMessageBodyTypeWriterProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_BODY_TYPE_WRITER"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageBodyTypeWriterProps
   */
  element?: BoxElementProps["element"];
  /**
   * Override the font size for full screen experiences.
   *
   * @default "default"
   * @type {"default" | "fullScreen"}
   * @memberof AIChatMessageBodyTypeWriterProps
   */
  variant?: "default" | "fullScreen";
  /**
   * Whether the text should be animated with type writer effect
   *
   * @default true
   * @type {boolean}
   * @memberof AIChatMessageBodyTypeWriterProps
   */
  animated?: boolean;
}

export const AIChatMessageBodyTypeWriter = React.forwardRef<HTMLDivElement, AIChatMessageBodyTypeWriterProps>(
  ({ children, variant = "default", element = "AI_CHAT_MESSAGE_BODY_TYPE_WRITER", animated = true, ...props }, ref) => {
    const [textLessChildren, setTextLessChildren] = React.useState<React.ReactNode[]>([]);
    const [animatedChildren, setAnimatedChildren] = React.useState<React.ReactNode[]>([]);
    const [childrenText, setChildrenText] = React.useState<string[]>([]);

    // Initially split all children from text and elements
    React.useEffect(() => {
      if (textLessChildren.length === 0 && childrenText.length === 0 && animated) {
        React.Children.forEach(children, (child) => {
          // Strings dn onot neet to copy props
          if (typeof child === "string") {
            setChildrenText((prevState) => [...prevState, child]);
            setTextLessChildren((prevState) => [...prevState, ""]);
          } else if (React.isValidElement(child)) {
            setChildrenText((prevState) => [...prevState, findNestedElementText(child.props.children)]);
            const { children, ...rest } = child.props;
            // by using {...rest} we take all props except children (the text inside the element )
            setTextLessChildren((prevState) => [...prevState, <child.type {...rest} />]);
          }
        });
      }
    }, []);

    const findNestedElementText = (children: React.ReactNode): string => {
      let text = "";

      React.Children.forEach(children, (child) => {
        if (typeof child === "string") {
          text += child;
        } else if (React.isValidElement(child)) {
          // Recursively find text in nested elements
          text += findNestedElementText(child.props.children);
        }
      });

      return text;
    };

    const handleAnimationChangeForChild = (index: number) => {
      const animationChild = animatedChildren[index];
      const textForChild = childrenText[index];

      let currentText = "";

      if (React.isValidElement(animationChild)) {
        currentText += findNestedElementText(animationChild.props.children);
        setAnimatedChildren((prev) =>
          prev.map((el, i) => {
            if (i === index) {
              return (
                <animationChild.type {...animationChild.props}>
                  {findNestedElementText(animationChild.props.children) + textForChild[currentText.length]}
                </animationChild.type>
              );
            }
            return el;
          }),
        );
      } else {
        currentText += animationChild;
        setAnimatedChildren((prev) =>
          prev.map((el, i) => {
            if (i === index) {
              return currentText + textForChild[currentText.length];
            }
            return el;
          }),
        );
      }
    };

    const handleAddNewAnimatedElWithFirstChar = (index: number) => {
      const textForChild = childrenText[index];
      const child = React.Children.toArray(children)[index];

      if (React.isValidElement(child)) {
        setAnimatedChildren((prevState) => [...prevState, <child.type {...child.props}>{textForChild[0]}</child.type>]);
      } else {
        setAnimatedChildren((prevState) => [...prevState, textForChild[0]]);
      }
    };

    React.useEffect(() => {
      let interval: NodeJS.Timeout;

      if (animated) {
        interval = setInterval(() => {
          if (textLessChildren.length > 0 && childrenText.length > 0) {
            if (animatedChildren.length === 0) {
              handleAddNewAnimatedElWithFirstChar(0);
            } else {
              /**
               * Find the index of an element in the animated children array where the text content does not
               * match the text length passed in
               */
              const indexOfElementToUpdate = animatedChildren.findIndex((child, i) => {
                let currentText = "";

                if (React.isValidElement(child)) {
                  currentText += findNestedElementText(child.props.children);
                } else {
                  currentText += child;
                }
                if (currentText.length < childrenText[i].length) {
                  return true;
                }
                return false;
              });

              if (indexOfElementToUpdate >= 0) {
                handleAnimationChangeForChild(indexOfElementToUpdate);
              }
              // If text content matches another check is needed to add the next element that is missing
              if (indexOfElementToUpdate === -1 && animatedChildren.length < textLessChildren.length) {
                handleAddNewAnimatedElWithFirstChar(animatedChildren.length);
              }
              // If no element is missing and all text is the stop the interval
              else {
                clearInterval(interval);
              }
            }
          }
        }, 25);
      }

      return () => clearInterval(interval);
    }, [textLessChildren, childrenText, animatedChildren]);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...Variants[variant]}
        display="inline-block"
        color="colorText"
        wordWrap="break-word"
        maxWidth="100%"
        minWidth={0}
        element={element}
        ref={ref}
        whiteSpace="pre-wrap"
      >
        {animated
          ? animatedChildren.map((el, idx) => (
              <Box as="span" key={uid(idx)}>
                {el}
              </Box>
            ))
          : children}
      </Box>
    );
  },
);

AIChatMessageBodyTypeWriter.displayName = "AIChatMessageBodyTypeWriter";
