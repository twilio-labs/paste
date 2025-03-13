import React, { useEffect, useState } from "react";

// Hook to animate text content of React elements
export const useAnimatedText = (
  children: React.ReactNode,
  speed = 10,
  enabled = true,
): { animatedChildren: React.ReactNode; isAnimating: boolean } => {
  const [animatedChildren, setAnimatedChildren] = useState<React.ReactNode>();
  const [textIndex, setTextIndex] = useState(0);

  // Effect to increment textIndex at a specified speed
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  // Function to calculate the total length of text within nested elements
  const calculateTotalTextLength = (nodes: React.ReactNode): number => {
    let length = 0;
    React.Children.forEach(nodes, (child) => {
      if (typeof child === "string") {
        length += child.length;
      } else if (React.isValidElement(child)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        length += calculateTotalTextLength((child.props as { children: any }).children);
      }
    });
    return length;
  };

  // Function to recursively clone children and apply text animation
  const cloneChildren = (nodes: React.ReactNode, currentIndex: number): React.ReactNode => {
    let currentTextIndex = currentIndex;
    return React.Children.map(nodes, (child) => {
      if (typeof child === "string") {
        // Only include text nodes if their animation has started
        if (currentTextIndex > 0) {
          const visibleText = child.slice(0, currentTextIndex);
          currentTextIndex -= child.length;
          return visibleText;
        }
        return null;
      } else if (React.isValidElement(child)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const totalChildTextLength = calculateTotalTextLength((child.props as { children: any }).children);
        // Only include elements if their text animation has started
        if (currentTextIndex > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const clonedChild = React.cloneElement(
            child,
            {},
            cloneChildren((child.props as { children: any }).children, currentTextIndex),
          );
          currentTextIndex -= totalChildTextLength;
          return clonedChild;
        } else if (currentTextIndex === 0 && totalChildTextLength === 0) {
          return child;
        }
        return null;
      }

      return child;
    });
  };

  // Effect to update animated children based on the current text index
  useEffect(() => {
    if (enabled) {
      const totaLength = calculateTotalTextLength(children);
      if (textIndex <= totaLength) {
        setAnimatedChildren(cloneChildren(children, textIndex));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, textIndex, enabled]);

  return {
    animatedChildren: enabled ? animatedChildren : children,
    isAnimating: enabled && textIndex < calculateTotalTextLength(children),
  };
};

export default useAnimatedText;
