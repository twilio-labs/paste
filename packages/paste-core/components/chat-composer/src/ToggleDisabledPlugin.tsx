import { useLexicalComposerContext } from "@twilio-paste/lexical-library";
import * as React from "react";

import { ChatComposerContext } from "./ChatComposerContext";

export const ToggleEditablePlugin: React.FC<{ disabled: boolean | undefined }> = ({ disabled }): null => {
  const [editor] = useLexicalComposerContext();
  const { setIsDisabled } = React.useContext(ChatComposerContext);

  React.useEffect(() => {
    if (disabled !== undefined) {
      if (setIsDisabled !== undefined) {
        setIsDisabled(disabled);
      }
      editor.setEditable(!disabled);
    }
  }, [disabled]);

  return null;
};

ToggleEditablePlugin.displayName = "ToggleEditablePlugin";
