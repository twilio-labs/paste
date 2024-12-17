import React, { useState, useEffect } from "react";
import { AIChatLogContext } from "./AIChatLogContext";

// Hook to animate text content of React elements
export const useAnimatedText = (children: React.ReactNode, speed: number = 10): React.ReactNode => {
  const {setIsAnimating, isAnimating} = React.useContext(AIChatLogContext);
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
  const calculateTotalTextLength = (children: React.ReactNode): number => {
    let length = 0;
    React.Children.forEach(children, (child) => {
      if (typeof child === "string") {
        length += child.length;
      } else if (React.isValidElement(child)) {
        length += calculateTotalTextLength(child.props.children);
      }
    });
    return length;
  };

  // Function to recursively clone children and apply text animation
  const cloneChildren = (children: React.ReactNode, currentIndex: number): React.ReactNode => {
    let currentTextIndex = currentIndex;
    return React.Children.map(children, (child) => {
      if (typeof child === "string") {
        // Only include text nodes if their animation has started
        if (currentTextIndex > 0) {
          const visibleText = child.slice(0, currentTextIndex);
          currentTextIndex -= child.length;
          return visibleText;
        }
        return null;
      }

      if (React.isValidElement(child)) {
        const totalChildTextLength = calculateTotalTextLength(child.props.children);
        // Only include elements if their text animation has started
        if (currentTextIndex > 0) {
          const clonedChild = React.cloneElement(child, {}, cloneChildren(child.props.children, currentTextIndex));
          currentTextIndex -= totalChildTextLength;
          return clonedChild;
        }
        return null;
      }

      return child;
    });
  };

  // Effect to update animated children based on the current text index
  useEffect(() => {
    const totaLength = calculateTotalTextLength(children);
    if (textIndex <= totaLength) {
      setAnimatedChildren(cloneChildren(children, textIndex));
      if(!isAnimating){
        setIsAnimating && setIsAnimating(true);
      }
    } else if(isAnimating){
      setIsAnimating && setIsAnimating(false);
    }
  }, [children, textIndex]);

  return animatedChildren
};

export default useAnimatedText;
