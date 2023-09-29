import React from "react";

import { forceHiddenStyles } from "./forceHiddenStyles";

export const useHiddenTextarea = (): HTMLTextAreaElement | null => {
  const [hiddenTextarea, setHiddenTextarea] = React.useState<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    const textareaElement = document.createElement("textarea");
    textareaElement.setAttribute("tabindex", "-1");
    textareaElement.setAttribute("aria-hidden", "true");
    forceHiddenStyles(textareaElement);
    document.body.append(textareaElement);

    setHiddenTextarea(textareaElement);

    return () => {
      // Clean up DOM
      textareaElement.remove();
      setHiddenTextarea(null);
    };
  }, []);

  return hiddenTextarea;
};
