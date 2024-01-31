import { useLexicalComposerContext } from "@twilio-paste/lexical-library";
import * as React from "react";

export const FocusComposerPlugin = ({ selectedThread }: { selectedThread?: string }): null => {
  const [editor] = useLexicalComposerContext();

  React.useEffect(() => {
    editor.focus();
  }, [editor, selectedThread]);
  return null;
};
